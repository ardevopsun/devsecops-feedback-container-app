FROM openjdk:17
WORKDIR /app
COPY target/feedback-app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]