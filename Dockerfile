# Building on Mac M1 chip causes issues wih linux based instances
# For deploying to ECS from M1 --platform=linux/amd64 is required
# For running it locally on M1 remove it
FROM --platform=linux/amd64 node:20-alpine

ENV ADDRESS=0.0.0.0 PORT=80

WORKDIR /app

COPY package*.json .

RUN npm install

COPY dist ./dist

CMD ["npm", "run", "start-server"]