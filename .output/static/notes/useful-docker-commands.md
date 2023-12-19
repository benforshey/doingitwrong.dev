---
title: Useful Docker Commands
description: A collection of Docker commands that I regularly run.
tags: [Docker, Docker Compose, Reference]

publishedOn: "2022-12-19"
updatedOn: null
isDraft: false
---

# Docker (Compose) Commands that I Find Useful

## Burn it All to the Ground

`docker compose up` will take a long time after this, but you're here because nothing is working anyway.

```bash
docker system prune --volumes --all
```

## Run an interactive shell inside of a running docker container

```bash
docker ps # get the container ID / name of the service you're interested in
docker exec -it {container ID or name} /bin/bash # or /bin/sh
```

## Run a Docker container and start an interactive shell inside of it

```bash
docker run -it {image name, like nginx:alpine} /bin/sh # or maybe bin/bash?
```

## Build a Docker image

```bash
docker build -t {image name, like transfer-suite} . # I think this assumes the default Dockerfile name
docker build -t {image name, like transfer-suite} . -f {image name, like transfer-suite}
```

## Run a Docker image by name

```bash
docker run -p 80:80 {image name, like transfer-suite}
```
