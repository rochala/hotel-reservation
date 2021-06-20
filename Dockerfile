FROM openjdk:11-jre-slim

WORKDIR /app
COPY ./target/hotel-reservation-0.0.1-SNAPSHOT.jar /app

EXPOSE 8080

CMD ["java", "-jar", "hotel-reservation-0.0.1-SNAPSHOT.jar"]
