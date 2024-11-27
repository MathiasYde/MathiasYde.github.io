# Run Docker without sudo
Original: [sindresorhus/guides/docker-without-sudo.md](https://github.com/sindresorhus/guides/blob/main/docker-without-sudo.md)

Add the current user (`$USER`) to the docker group.
Optionally, change the username to the preferred user.

```console
sudo groupadd docker
sudo gpasswd -a $USER docker
```

Relog so group membership is re-evaluated.

Restart Docker service and change the context to Engine

```console
sudo service docker restart
# For Ubuntu 14.04-15.10, use docker.io instead
sudo service docker.io restart

docker context use default
```
