# Typescript + Prettier + ESlint + Axios

### **Prettier**

It will help you format your code as you develop. The default file that comes with the
template is to my liking, but you are free to change it to your own.😎👍🏻

> If you have the Prettier extension installed. To fix the prettier settings, add this
> setting to the `settings.json` file of your `.vscode` folder located in the root folder

```json
{
  "prettier.configPath": "./.prettierrc.json"
}
```

### **ESLint**

ESLint is your helper in your development 🤖. It will help you to avoid possible bugs in
your code. It has an integration with Prettier to avoid conflicting styles, it will alert
you about some things related to accessibility, better ways of writing and etc... <br>

> If you want to add or disable any rules, feel free.

### **Axios**

It is an "improvement" of the browser's Fetch API. It brings more facilities for you to
handle HTTP requests and much more. I recommend reading the
[Documentation of Axios](https://axios-http.com/docs/intro).

## Installing 👨‍💻

To run the template, open the terminal in the repository you want and run in your terminal

```bash
  yarn create next-app [name-of-your-project] -e https://github.com/AugustoTI/template-next-ts
  # or
  npx create-next-app [name-of-your-project] -e https://github.com/AugustoTI/template-next-ts
```

> don't forget to rename the project in package.json
