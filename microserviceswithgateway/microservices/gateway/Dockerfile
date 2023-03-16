FROM openjdk

WORKDIR usr/lib

ADD ./target/gateway-0.0.1-SNAPSHOT.jar /usr/lib/gateway-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java","-jar","gateway-0.0.1-SNAPSHOT.jar"]