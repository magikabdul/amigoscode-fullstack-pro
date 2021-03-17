FROM maven:3.6.3-openjdk-15 AS builder
WORKDIR /code
COPY pom.xml /code/pom.xml
RUN mvn dependency:go-offline

COPY src /code/src
RUN mvn install
RUN mkdir -p target/dependency
WORKDIR /code/target/dependency
RUN jar -xf ../*.jar

FROM openjdk:15.0-jdk-slim
EXPOSE 8080
VOLUME /tmp
ARG DEPENDENCY=/code/target/dependency
COPY --from=builder ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=builder ${DEPENDENCY}/META-INF /app.META-INF
COPY --from=builder ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java", "-cp", "app:app/lib/*", "cloud.cholewa.amigoscode.fullstack.pro/ProApplication"]