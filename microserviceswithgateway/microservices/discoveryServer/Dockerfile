FROM openjdk

WORKDIR usr/lib

ADD ./target/discoveryServer-0.0.1-SNAPSHOT.jar /usr/lib/discoveryServer-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java","-jar","discoveryServer-0.0.1-SNAPSHOT.jar"]