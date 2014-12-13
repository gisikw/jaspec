var
  system  = require('system'),
  page    = require('webpage').create(),
  colorWrap,
  interval,
  timeout,
  report,
  yellow,
  green,
  file = system.args[2],
  red;

colorWrap = function (code) {
  return function (str) {
    return '\033[' + code + 'm' + str + '\033[0m';
  };
}

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

yellow  = colorWrap(33);
green   = colorWrap(32);
red     = colorWrap(31);

report = function () {
  var specs = page.evaluate(function () {
    return jsApiReporter.specResults(0, jsApiReporter.specs().length);
  });

  if (specs.every(function (spec) { return spec.status === 'passed'; })) {
    console.log(green(file));
    page.close();
    setTimeout(function () { phantom.exit(0); });
  } else {
    if (specs.some(function (spec) { return spec.status === 'failed'; })) {
      console.log(red(file));
    } else {
      console.log(yellow(file));
    }
    specs.forEach(function (spec) {
      if (spec.status === 'passed') {
        console.log(green('- ' + spec.fullName));
      } else if (spec.status === 'pending') {
        console.log(yellow('- ' + spec.fullName));
      } else {
        console.log(red('- ' + spec.fullName));
      }
    });
    page.close();
    setTimeout(function () { phantom.exit(1); });
  }
}

page.onInitialized = function () {
  page.evaluate(function (file) {
    document.addEventListener('DOMContentLoaded', function () {
      window.callPhantom();
    });
  });
};

page.onCallback = function () {
  var specsDone;

  page.evaluate(function (file) {
    window.runSpec(file);
  }, file);

  specsDone = function () {
    return page.evaluate(function () {
      return window.jsApiReporter && window.jsApiReporter.finished;
    });
  };

  interval = setInterval(function () {
    if (specsDone()) {
      clearInterval(interval);
      clearTimeout(timeout);
      report();
    }
  });

  timeout = setTimeout(function () {
    clearInterval(interval);
    console.log(red(file));
    page.close();
    setTimeout(function () { phantom.exit(1); });
  }, 10000);
};

page.open(system.args[1], function (status) {
  if (status !== 'success') {
    console.log(red(file));
    page.close();
    setTimeout(function () { phantom.exit(1); });
  }
});
