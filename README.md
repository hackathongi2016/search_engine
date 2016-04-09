# Travel.me (search engine)

- **frontend**: ?
- **solr**: Custom Solr configuration

~~~
# For run solr
$ <solr path> start -f -s <absolute path to repo>/solr/
# example: ./solr-6.0.0/bin/solr start -f -s /Volumes/Data/Workspace/hackathon2016/search_engine/solr/
~~~

- **solr_sync**: Solr synchronization in Ruby (using 1.9.3)

~~~
# For sync
$ bundle install
$ bundle exec ruby sync.rb
~~~

# Tips
Restart solr schema after change things (please do not laugh, we don't know how to do...)

~~~
$ rm -rf solr/travels/data/ solr/travels/conf/managed-schema
$ mv solr/travels/conf/schema.xml.bak solr/travels/conf/schema.xml
$ rm -rf solr/routes/data/ solr/routes/conf/managed-schema
$ mv solr/routes/conf/schema.xml.bak solr/routes/conf/schema.xml
~~~
