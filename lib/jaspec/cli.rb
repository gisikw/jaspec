module Jaspec
  class Cli
    def process(argv)
      @argv = argv
      if @argv.size > 0
        run
      else
        print_help
      end
    end

    def print_help
      puts "Usage: jaspec [file or directory]"
    end

    def run
      Jaspec::Runner.run File.expand_path(@argv[1])
    end
  end
end
