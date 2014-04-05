#!/usr/bin/env bash

. /opt/start_couch > /dev/stdout &

echo "it's going to take about 5 minutes for couch to come up.  patience, please..."

node /opt/proxy.js
