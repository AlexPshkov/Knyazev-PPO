#!/bin/bash

docker build -t app-2048:1.0 -t app-2048:latest .

docker run -d -p 1440:8080 --name app-2048-container-1 app-2048:1.0
docker run -d -p 1441:8080 --name app-2048-container-2 app-2048:1.0