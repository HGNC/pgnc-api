FROM ubuntu/apache2
LABEL Author="Kristian Gray <kag56@cam.ac.uk>"
WORKDIR /var/www/

RUN apt-get update -y && apt-get upgrade -y;
RUN apt-get install -y curl;
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash;
RUN nvm install --lts && nvm use --lts;