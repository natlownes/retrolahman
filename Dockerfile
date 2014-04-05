FROM narf/retrolahman-db
MAINTAINER Nat Lownes <nat.lownes@gmail.com>

RUN apt-get update
RUN apt-get install -y software-properties-common python-software-properties
RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install -y nodejs

ADD proxy.js /opt/proxy.js
ADD run.sh /opt/run.sh

RUN chmod +x /opt/run.sh

CMD ["/opt/run.sh"]
EXPOSE 8081
EXPOSE 5984
