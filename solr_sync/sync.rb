require 'active_record'
require 'mysql2'
require 'rsolr'

puts ">>>> Start <<<<"
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
puts '== Configuring Solr connection...'
solr = RSolr.connect :url => 'http://localhost:8983/solr/travels'

puts '== Deleting all...'
solr.delete_by_query '*:*'
solr.commit

puts '== Synchronizing...'
Travel.find_each do |travel|
  solr.add :id => travel.id,
    :tra_origin => travel.tra_origin,
    :tra_destination => travel.tra_destination,
    :tra_num_days => travel.tra_num_days,
    :tra_budget_max => travel.tra_budget_max,
    :tra_budget_min => travel.tra_budget_min,
    :tra_date => travel.tra_date,
    :tra_planning_limit => travel.tra_planning_limit,
    :tra_persons_min => travel.tra_persons_min,
    :tra_persons_max => travel.tra_persons_max,
    :tra_description => travel.tra_description,
    :tra_usr_id => travel.tra_usr_id,
    :tra_lat => travel.tra_lat,
    :tra_long => travel.tra_lat
  print '.'
end
solr.commit
puts ""

puts "===== Routes ====="
puts "WIP..."
puts ">>>> Finish <<<<"
