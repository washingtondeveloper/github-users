# Desafio Dasa Front-End

## GitUser

## O que foi utilizado no desenvolvimento

- React - Crianção dos componetes
- Redux - Tratamento de Estados
- Redux-Thunk - Para fazer meus Fetchs
- Jest - Para meus Test Units
- Reduxsauce - Organizar meus Actions Reducers e Actions Types
- [Duck](https://github.com/erikras/ducks-modular-redux) - Pattern para Unificar minhas Actions e Reducers
- Bootstrap - Para estilizar meus componentes
- Font-Awsome - Para os icones.
- react-app-rewired - Faciliando os paths da aplicação, onde eu posso configurar apartir da pasta `src` um simbolo, escolhi o `@`, exemplo: Desejo importar um componente que esta da pasta `src/component/Header`, não preciso voltar para entrar nessa pasta `../../components/Header` e sim `@/components/Header` [mais detalhes](https://github.com/timarney/react-app-rewired).

## Inciar aplicação

### Usando NPM ou Yarn

- Fazendo o clone ou download do zip, depois executando o `npm i` ou caso tenha o yarn `yarn` para baixar as dependencias.
- Depois execute `npm start` ou `yarn start` para iniciar a aplicação.

### Usando Docker

- Logo apos fazer o download ou clone do projeto, execute o comando dentro da pasta do projeto `docker image build -t "escolha_um_nome" .`, lembrando que é necessario vc esta dentro da pasta do projeto, e no final desse comando não esqueça do ' ponto `.` ' logo no final.
- Depois execute o comando `docker run -p 8000:80 "o_nome_que_vc_escolheu"`.
- Agora abra seu browser em `http://localhost:8000`.
