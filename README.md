Problem: the ES variable is undefined.

To reproduce the problem:

1. Install elasticsearch on localhost;

1. Install mongo river plugin with `sudo bin/plugin --install com.github.richardwilly98.elasticsearch/elasticsearch-river-mongodb/2.0.9`;

1. Start elasticsearch server: `sudo /usr/share/elasticsearch/bin/elasticsearch --default.path.conf=/etc/elasticsearch/`

1. Create the meteor project and add elastic package: `meteor add bigdata:elasticsearch`;

1. Start the meteor server: `MONGO_URL="mongodb://user:pwd@ip:port/db" meteor --settings settings.json`

Find the exact command on Moxtra.
