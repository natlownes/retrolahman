---
title: 'Installation'

layout: nil
---

* [Install Docker](https://www.docker.io/gettingstarted/#h_installation)
  * [Linux](https://www.docker.io/gettingstarted/#h_installation)
  * [OS X/Linux](http://docs.docker.io/en/latest/installation/mac/)
  * [Windows](http://docs.docker.io/en/latest/installation/windows/)
* Pull image: `docker pull narf/retrolahman:latest`
* Start db:  `docker run -i -p 5984:5984 narf/retrolahman`
* Wait for the db to start.  You'll see `Apache CouchDB has started. Time to
  relax` when finished.
* open [http://localhost:5984/\_utils/](http://localhost:5984/_utils/) in your
  browser.  You should see a couch DB UI.
