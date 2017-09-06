FROM            fedora:latest

RUN             curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
RUN             dnf install -y git nodejs
RUN             mkdir /home/docker-container-user
RUN             mkdir /workspace
RUN             useradd -d /home/docker-container-user -s /bin/bash docker-container-user
RUN             npm install --global grunt-cli
RUN             npm install --global bower

COPY            ./init-container.sh /root/init-container.sh
WORKDIR         /workspace
