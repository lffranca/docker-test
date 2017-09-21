FROM mysql:5.7

ENV MYSQL_DATABASE=test
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_USER=test
ENV MYSQL_PASSWORD=test

# HEALTHCHECK --interval=5s --timeout=5s --retries=60 CMD "nc -z localhost 3306"

# EXPOSE 3306:3306