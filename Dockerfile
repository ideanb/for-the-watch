FROM postgres:latest

ENV POSTGRES_DB test
ENV POSTGRES_PASSWORD=123456

EXPOSE 5432/tcp

COPY release/structure.sql /docker-entrypoint-initdb.d/01-structure.sql
COPY release/data.sql /docker-entrypoint-initdb.d/02-data.sql