$LOAD_PATH.unshift File.expand_path("#{File.dirname(__FILE__)}/lib")

require "bundler/gem_tasks"
require "jaspec"

namespace :spec do
  desc "Run all the jaspect tests"
  task :jaspec do
    Jaspec::Runner.run_all(File.join(File.dirname(__FILE__),'spec','javascripts')) || exit(1)
  end
end

task :default => 'spec:jaspec'
