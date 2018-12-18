FROM centos

RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
RUN yum -y --skip-broken install nodejs

COPY package.json /src/package.json
WORKDIR /src
RUN npm install

COPY . /src
RUN npm run build:clean

EXPOSE  3000

CMD ["node", "/src/server/bin/www"]