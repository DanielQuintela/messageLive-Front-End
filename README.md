# MessageLive

MessageLive é uma aplicação web de chat em tempo real, onde usuários podem se cadastrar, fazer login, criar salas e conversar com outras pessoas.

## Funcionalidades

- Cadastro e login de usuários
- Criação e listagem de salas de chat
- Interface moderna com TailwindCSS e animações
- Integração com WebSocket via Socket.IO para comunicação em tempo real
- Notificações e feedbacks com React Toastify

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Socket.IO Client](https://socket.io/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Flowbite](https://flowbite.com/)

## Estrutura de Pastas
```
/src
    /components      # Componentes reutilizáveis da interface
    /pages           # Páginas principais da aplicação
    /services        # Serviços de API e WebSocket
    /contexts        # Contextos de autenticação e chat
    /hooks           # Hooks customizados
    /utils           # Funções utilitárias
    /assets          # Imagens e outros recursos estáticos
```

## Como Rodar o Projeto

1. Clone o repositório:
     ```bash
     git clone https://github.com/seu-usuario/messageLive-Front-End.git
     ```
2. Instale as dependências:
     ```bash
     npm install
     ```
3. Inicie o servidor de desenvolvimento:
     ```bash
     npm run dev
     ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.