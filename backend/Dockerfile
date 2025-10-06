# Étape 1 : construire l'application
FROM maven:3.9.3-eclipse-temurin-17 AS build
WORKDIR /app

# Copier le pom.xml et installer les dépendances
COPY pom.xml .
RUN mvn dependency:go-offline

# Copier le code source
COPY src ./src

# Construire le JAR
RUN mvn clean package -DskipTests

# Étape 2 : image finale pour exécuter l'application
FROM openjdk:17-jdk-alpine
WORKDIR /app

# Copier le JAR depuis l'étape de build
COPY --from=build /app/target/*.jar app.jar

# Exposer le port utilisé par Spring Boot
EXPOSE 8080

# Démarrer l'application
ENTRYPOINT ["java", "-jar", "app.jar"]
