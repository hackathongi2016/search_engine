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

puts '== Configuring Solr connection...'
s_travels = RSolr.connect :url => 'http://localhost:8983/solr/travels'

puts '== Deleting all...'
s_travels.delete_by_query '*:*'
s_travels.commit

#puts '== Synchronizing travels...'
#Travel.find_each do |travel|
#end
