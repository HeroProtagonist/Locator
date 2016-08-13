FROM node
RUN mkdir app
Add . /app
WORKDIR /app
RUN npm install -q
EXPOSE 3000
CMD ["npm","start"]
