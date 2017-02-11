#Running with docker

docker run --name linkerd -v `pwd`/config.yaml:/config.yaml buoyantio/linkerd:0.8.6 /config.yaml