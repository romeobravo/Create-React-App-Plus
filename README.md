# Boilerplate based on Create React App
[Create React App](https://github.com/facebookincubator/create-react-app) with some additional features without using `npm run eject`.

### Additional features
- Redux (+ react bindings)
- React Router (+ redux bindings)
- Hot Module Reloading with persistent redux state
- SASS
- Absolute imports with the use of NODE_ENV
- eslintrc.js file with airbnb defaults and no semicolons
- editorconfig defaults
- run eslint with `npm run lint`
- [bem-classes](https://www.npmjs.com/package/bem-classes) for easier bem classes

### Scripts
```
npm start
npm test
npm run build
npm run lint
```

### Setup
Create local .env file with the correct NODE_PATH

### ENV file
`NODE_PATH` enables absolute imports from the `src` folder
```
NODE_PATH=src
```
