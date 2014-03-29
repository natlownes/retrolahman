---
title: 'Introduction'

layout: nil
---

This is a project that combines both the
[Retrosheet](http://www.retrosheet.org/) game logs and player data with [Sean
Lahman's Baseball
Database](http://www.seanlahman.com/baseball-archive/statistics/) for the years
1920 through 2012 with data provided as JSON documents.

The reason this exists is to allow querying of Retrosheet's excellent historical
along side Lahman's excellent statistical data.

Data available (described as paths):

* `/players/{id}`
* `/games/{team_id}/{year}/{game_number}`
* `/teams/{year}/{team_id}`
* `/seasons/{year}/{team_id}`

Schemas for the JSON documents and some examples of querying can be found below.

For now data will be distributed as a
[Docker](https://www.docker.io/gettingstarted/) container with a
[CouchDB](http://couchdb.apache.org/) database.

