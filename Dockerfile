FROM node:4.4.7-slim
COPY build/bundle /bundle
RUN (cd /bundle/programs/server && npm install)
ENV PORT 3000
EXPOSE 3000
CMD node /bundle/Main.js
