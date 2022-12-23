# Welcome to my NextJS + Typescript + Jest template 🚀

## Lista de tecnologias incorporadas:

- Prettier
- ESLint
- Jest
- Husky
- List-Staged
- Typescript
- Axios
- Testing Library

## Pequena descrição de cada uma:

### Prettier

Um formatador de códigos para deixar seu código mais legível e padronizado.

**OBS:** Se você possui a extensão do Prettier instalada no seu Vistual Studio Code, crie
uma pasta chamada `.vscode` ( caso ainda não tenha ) e coloque o seguinte código:

```json
{
  "prettier.configPath": "./.prettierrc.json"
}
```

[Leia a documentação](https://prettier.io/docs/en/index.html)

### ESLint

Vai analisar seu código para **evitar bugs e erros**. Tem integração com React, Prettier e
as mais diversas tecnologias.

[Leia a documentação](https://eslint.org/)

### Jest

É um framework para criação de **testes unitários** do seu código. Garante melhor
qualidade no código escrito e poupa seu tempo. Inicialmente pensando para rodar no NodeJS,
mas atualmente, também é possível realizar testes para o Browser

[Leia a documentação](https://jestjs.io/)

### Axios

Uma versão melhorada da Fetch API. Entrega varias facilidades para fazer requisição e
funciona tanto no Servidor, quanto no Navegador.

[Leia a documentação](https://axios-http.com/docs/intro)

### Typescript

Uma versão melhorada do nosso bom e velho Javascript. Adiciona a possibilidade de tipagem
estática e outros recursos que normalmente, não chegaram ou existem no Javascript
tradicional.

[Leia a documentação](https://www.typescriptlang.org/)

### Husky

Uma biblioteca que facilita a criação de Git hooks de forma automatizada

[Leia a documentação](https://typicode.github.io/husky/#/)

### Testing Library

Uma família de bibliotecas que vai lhe ajudar a testar seus componentes de interface.

[Leia a documentação](https://testing-library.com/docs/)

---

Todas essas configurações existentes no template são customizáveis. Fique a vontade para
modificar e adaptar ao seu gosto e projeto.

## Installing 👨‍💻

To run the template, open the terminal in the repository you want and run in your terminal

```bash
yarn create next-app [name-of-your-project] -e https://github.com/AugustoTI/template-next-ts
  # or
npx create-next-app [name-of-your-project] -e https://github.com/AugustoTI/template-next-ts
```

> don't forget to rename the project in package.json
