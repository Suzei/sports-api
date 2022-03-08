# CRUD API com MongoDB/Express.js

### 1 - Necessidade

- O estudo foi feito com base nas minha falta de conhecimento sobre APIs e a maneira com que elas eram feitas. Não sabia as ferramentas, fui atrás e consegui realizar, através de passos simples.
- Sei que provavelmente uma API é mais complicada do que essa em questão, mas é do básico que se começa e estou bem feliz com o resultado.

- Existe uma versão com comentários literais, não muito convencionais, em outra branch deste mesmo projeto.


### 2 - Tecnologias utilizadas
- Postman: para obter um retorno visual das requisições, utilizei os endpoints(falaremos sobre isso mais na frente) no Postman.

- MongoDB: para armazenar os dados dos POSTS feitos na aplicação, além de consultar os dados via GET e atualizar por PATCH. 

- Express.js: para a criação das rotas, onde sigo os padrões de uma REST API. Minha primeira vez usando middlewares para definir o tipo de dado que retorna.

- Mongoose: para conectar diretamente ao MongoDB e realizar a conexão necessária, além de usar funções importantes do próprio.

### 3 - Endpoints

 #### Aqui também, vão as instruções para testar a API localmente
 
  1 - Realize um fork ou clone localmente em sua máquina
  
  2 - Abra o VSCODE e em seguida, o terminal integrado (CTRL + J)
  
  3 - No package.json, irá ter uma área de scripts. Não se preocupe, já existe um script pronto para a ocasião.
  
  4 - Digite no terminal integrado, então, npm run serve.
  
  5 - A aplicação já estará rodando na porta 3000, mas sem nenhum retorno visual; até o momento, não existe front-end.
  
  #### Questão dos Endpoints
  - Aconselho usar o Postman, ferramenta 100% gratuita para os testes em questão.
  - Assumindo completamente que você está na rota estabelecida, no domínio da aplicação (localhost:3000), esses são os endpoints:

  ```
  GET: localhost:3000/player
  Mostra todos os jogadores disponíveis no momento, contendo informações como:
  
  - name: O nome do nosso jogador,
  - team: O time que nosso jogador está atuando
  - approved: Se ele está apto para jogar. Este dado ainda continua bem abstrato, mas quer dizer isso.
  ```
  
  ```
  GET: localhost:3000/player/:id
  Mostra um jogador específico e todos os dados acima, requisitando por ID. 
  Para saber o ID de um jogador a sua preferência, utilize a rota acima para requisitar seu ID e depois, ponha no lugar de :id, vide o exemplo abaixo:
  
  localhost:3000/player/6226d8f8d9fb0dd8b7aff2e0
  
  ```
  
  #### POST E UPDATE
  
  - Você provavelmente irá sentir a necessidade de adicionar novos jogadores, com o tempo. Pela maneira que esse código está escrito, qualquer pessoa pode adicionar um dado nesta API, sem problemas.
  - Futuramente, irei fazer o front-end para a adição e atualização dos jogadores ser mais visual. 
 
