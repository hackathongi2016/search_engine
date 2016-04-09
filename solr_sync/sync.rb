require 'active_record'
require 'mysql2'
require 'rsolr'

puts '== Configuring database connection...'
ActiveRecord::Base.establish_connection(
  :adapter => "mysql2",
  :host => "localhost",
  :database => "viatgemjunts", #viatgemjunts
  username: 'walter', #root
  password: 'walter' #hackaton
)

puts '== Configuring tables...'
class Travel < ActiveRecord::Base
  self.table_name = 'Travel'
end
class Route < ActiveRecord::Base
  self.table_name = 'Route'
end

puts "===== Travels ====="
puts "==================="
puts '== Configuring Solr connection...'
solr = RSolr.connect :url => 'http://localhost:8983/solr/travels'

puts '== Deleting all...'
solr.delete_by_query '*:*'
solr.commit

puts '== Synchronizing...'
Travel.find_each do |travel|
  solr.add :id => travel.id,
    :tra_description => travel.tra_description,
    :tra_destination => travel.tra_destination,
    :tra_origin => travel.tra_origin
  print '.'
end
solr.commit
puts ""


puts "===== Routes ====="
puts "=================="
puts "WIP..."
