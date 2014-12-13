module Jaspec
  class Runner
    PHANTOM_RUNNER  = File.expand_path('runner/phantom.js',   File.dirname(__FILE__))
    HTML_RUNNER     = File.expand_path('runner/runner.html',  File.dirname(__FILE__))

    class << self

      def run(spec)
        if File.directory?(spec)
          run_all(spec)
        else
          system("phantomjs #{PHANTOM_RUNNER} #{HTML_RUNNER} #{spec}")
        end
      end

      def run_all(dir)
        failures = []

        Dir.glob(File.join(dir,'**','*Spec.{js,coffee}')).each do |spec|
          failures << spec if !run(spec)
        end

        if failures.empty?
          puts "\nAll specs passing. Badass!"
          return true
        else
          puts "\n#{failures.length} failing spec file#{'s' if failures.length > 1}:"
          puts failures.join("\n")
          return false
        end
      end

    end
  end
end
