require 'jaspec'

module Jaspec
  class Tasks
    include Rake::DSL

    def initialize(spec_dir)
      namespace :spec do
        desc 'Execute all Jaspec specs'
        task :jaspec do
          Jaspec::Runner.run_all(File.join(Dir.pwd, spec_dir)) || exit(1)
        end
      end
    end
  end
end
