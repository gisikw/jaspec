$LOAD_PATH.unshift File.expand_path("#{File.dirname(__FILE__)}/lib")

require "bundler/gem_tasks"
require "jaspec/tasks"

Jaspec::Tasks.new('spec/javascripts')

task :default => 'spec:jaspec'
