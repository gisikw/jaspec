jaspec_files = [
  'version',
  'runner',
  'cli'
]

jaspec_files.each do |file|
  require File.join('jaspec', file)
end
