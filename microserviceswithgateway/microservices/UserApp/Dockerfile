FROM openjdk

WORKDIR usr/lib

ADD ./target/UserApp-0.0.1-SNAPSHOT.jar /usr/lib/UserApp-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java","-jar","UserApp-0.0.1-SNAPSHOT.jar"]