# standandspeak
A blog on public speaking and presentation at StandAndSpeakConfidently.com .  Built as a portfolio coding project, using React, Typescript, JSON data file, Bootstrap version 5 CSS framework, and Bootstrap Icons.  The articles I wrote from my public speaking and Toastmasters expertise.  Enoy!

Live **Site Demo** ~ [Stand and Speak Confidently](https://standandspeakconfidently.com/) 

![Screenshot of Top of Front Page](https://standandspeakconfidently.com/screens/screen_standandspeak_a1.webp) 


## Steps to Install 
- Run the command below from the command line / terminal / command prompt.
- git clone https://github.com/systemsvanguard/nasadailyphoto.git  
- cd standandspeak
- ensure your have Node & NPM pre-installed. Run commands 'node --version && npm -v'.
- npm install.  (This ensures all dependencies are installed).
- npm run dev 
- Runs on port 5173 ---> http://localhost:5173/  
- Change the web port as needed.


## Features
- React.js
- React Router 
- Bootstrap 5 CSS framework 
- Bootstrap Icons
- Google Fonts



## License
This project is licensed under the terms of the **MIT** license.


## Screenshots 

![Screenshot of Top of Front Page](https://standandspeakconfidently.com/screens/screen_standandspeak_a1.webp)

![Screenshot of Middle of Front Page](https://standandspeakconfidently.com/screens/screen_standandspeak_a2.webp)

![Screenshot of Blog Article](https://standandspeakconfidently.com/screens/screen_standandspeak_a3.webp)

![Screenshot of About Me Page](https://standandspeakconfidently.com/screens/screen_standandspeak_about.webp)

![Screenshot of Top of Contact Me](https://standandspeakconfidently.com/screens/screen_standandspeak_contact.webp)

![Screenshot of Categories Page](https://standandspeakconfidently.com/screens/screen_standandspeak_tags.webp)




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
