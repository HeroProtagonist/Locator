FROM node
RUN mkdir app
Add . /app
WORKDIR /app
RUN npm install -q
EXPOSE 80
CMD ["npm","run","prod"]
