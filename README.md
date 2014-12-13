# Jaspec [![Build Status](https://travis-ci.org/gisikw/jaspec.svg?branch=master)](https://travis-ci.org/gisikw/jaspec) [![Gem Version](https://badge.fury.io/rb/jaspec.png)](http://badge.fury.io/rb/jaspec)

Jaspec is a dirt-simple Jasmine spec runner. It runs off of [Jasmine](http://jasmine.github.io/) standalone, [RequireJS](http://requirejs.org/), and [PhantomJS](http://phantomjs.org/). It doesn't care about sprockets; it doesn't start a web server; it does something really really simple:

It runs your specs.

## Installation

You can install jaspec via:

    $ gem install jaspec

Or, if you're using it with an application that includes a Gemfile, add this line:

    gem 'jaspec'

And then execute:

    $ bundle

## Usage

Running your specs is nice and easy. Just execute:

    $ jaspec specs/myCoolSpec.js

Or, if you're using CoffeeScript:

    $ jaspec specs/myCoolerSpec.coffee

Finally, if you want to run across an entire directory:

    $ jaspec specs/

This will execute against all \*Spec.js, and \*Spec.coffee files within that directory.

## Writing Your Specs

You can format your specs normally:

```coffeescript
describe 'A useless spec', ->
  it 'should be useless', ->
    expect(true).toBe true
```

...but you'll get a LOT more power out of Jaspec if you use AMD-style definitions (RequireJS will include source files that way!)

```coffeescript
define ['../myLibrary/foo.js'], (foo) ->
  describe 'foo', ->
    it 'should have a value of 5', ->
      expect(foo.value).toBe 5
```

You can use these dependencies to load non-AMD compliant JS, and stuff will still work!

```coffeescript
define ['../vendor/jQuery.js'], ->
  # do stuff with $
```

Best of all, since each spec runs in isolation, you can pre-define your dependencies, in order to provide useful stubs and mocks.

```coffeescript
define 'foo', -> 'Fake foo'

define ['../thingThatNeedsFoo.js'], (thing) ->
  describe 'thing', ->
    it 'should have a stubbed foo', ->
      expect(thing.foo).toBe 'Fake Foo'
```

Get testing!

## Contributing

1. Fork it ( https://github.com/gisikw/jaspec/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
