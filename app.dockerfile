FROM node:6.11.2

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY . $HOME/test
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/test

RUN npm cache clean && npm install --silent --progress=false

CMD ["npm", "start"]