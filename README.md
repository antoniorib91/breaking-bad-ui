# Breaking Bad Ui

Para rodar esse projeto localmente é necessário ter instalado o NodeJS e o NPM
Esse tutorial parte do ponto que você já tem o NodeJS e o NPM instalados.

### Running local DEV

para rodar localmente o projeto é necessário

instalar as dependencias do npm. então vamos começar 

fazendo o download deste repositório. Após isso

acessar via terminal a pasta onde você fez o Download

e rodar o comando: 

```
npm install
``` 

para instalar as dependencias. Caso ocorra algum problema de 

permissões, rodar como super usuário, caso não tenha permissão

solicitar ao seu administrador .

após instalar as dependências é possível rodar o ambiente de

desenvolvimento com o comando: 

```
npm start
```

então abrir seu navegador e navegar para  `http://localhost:4200/`

caso deseje rodar os testes unitários é só rodar o comando:

```
npm run test
```

### Running Compiled for Production local
É necessario estar via terminal dentro da pasta do projeto

Rodar o comando para buildar o projeto:

```
npm run build:prd
```
e rodar o comando

```
node server.js
```
e acessar o navegado na pagina http://localhost:4000

### Running with Doocker

*É necessario estar via terminal dentro da pasta do projeto.*

Rodar o comando para montar a imagem do docker.

(Caso ocorram problemas, tentar rodar os camando no docker como super usuário o comando)

```
docker build -t braking-bad-ui .
```

A imagem criada apartir do comando se chama blog-ui

caso deseje ver as imagens criadas, rodar o comando

```
docker images
```

para visualizar o nome das imagens criadas.

para rodar o container, rodar com o comando abaixo:

```
docker docker run -p 4000:4000 braking-bad-ui
```
e acessar via navegador a url:

http://localhost:4000

