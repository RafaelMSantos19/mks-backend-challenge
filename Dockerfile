# Stage 1: PostgreSQL
FROM postgres AS postgres_stage
ENV POSTGRES_USER=adminUser
ENV POSTGRES_PASSWORD=adminUser
ENV POSTGRES_DB=MKSdb

# Stage 2: Redis
FROM redis AS redis_stage

# Stage 3: Node.js Application
FROM node:20.12.2 AS node_app

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia o código fonte da aplicação para o contêiner
COPY . .

# Instala as dependências do Node.js
RUN npm install

# Exponha a porta da aplicação
EXPOSE 3090

# Define as variáveis de ambiente
ENV DATABASE_URL=postgres://adminUser:adminUser@postgres:5432/MKSdb
ENV PORT=3090
ENV DB_HOST=postgres
ENV DB_USERNAME=adminUser
ENV DB_PASSWORD=adminUser
ENV DB_DATABASE=MKSdb
ENV DB_PORT=5432
ENV JWT_SECRET=fd95b208e56885276e56a8af1d20ea3b202b58320e679296f8fff039a79317f1
ENV REDIS_HOST=redis
ENV REDIS_PORT=6379

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
