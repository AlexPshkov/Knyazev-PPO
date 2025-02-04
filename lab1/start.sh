#!/bin/bash

docker build -t app-2048 .

docker run -d -p 8080:8080 --name app-2048-container-1 app-2048
docker run -d -p 8085:8080 --name app-2048-container-2 app-2048