Your UI Framework Has No Soul! 
==============================
## Isolated, Framework agnostic, Redux driven Business logic layer

In this project I introduce a pattern inspired by [Nir Kaufman's book - Thinking in Redux](https://leanpub.com/thinking-in-Redux) <br />

In this practice the application business logic is being driven by Redux as an [exportable package](./redux-logic-layer/index.js) that can be imported from any UI implementation. <br />

In this repo there are four different implementations which all use the same Redux driven business logic to fetch data and update the state. 

### This pattern has few simple ground rules:

- Split Redux folder from your UI folder - to be able to replace your framework easily.
- Reducers are pure functions which have no logic
- Actions creators are pure functions which have no logic
- All the logic should be placed in Redux middlewares
- Features can only change their feature-state.
- All features can <b>read</b> the complete app state and use it 
- Actions Types are in a single file

## Live demo
- [React](https://redux-dev-pattern-react.netlify.com/)
- [VueJS](https://redux-dev-pattern-vue.netlify.com/)
- [Angular](https://redux-dev-pattern-angular.netlify.com/)
- [SlimJS](https://redux-dev-pattern-slimjs.netlify.com/) (not mobile compatible) 

## About the app

The app is pretty simple, created just to introduce this pattern, it basically 
uses [TvMaze API](http://www.tvmaze.com/) to search and present data about TV shows

Don't be lazy, run it!

### Installation
Should be run once, from the root folder (this is a [yarn-workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) monorepo)
```
yarn install
```

### React
```
yarn react
```

Runs the app in the development mode [React](https://reactjs.org/) implementation.<br>
Open [http://localhost:4444](http://localhost:4444) to view it in the browser.

### VueJS
```
yarn vue
```

Runs the app in the development mode [VueJS](https://vuejs.org/) implementation.<br>
Open [http://localhost:5555](http://localhost:5555) to view it in the browser.


### Angular
```
yarn angular
```

Runs the app in the development mode [Angular](https://angular.io/) implementation.<br>
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

### SlimJS
```
yarn slimjs
```

Runs the app in the development mode [SlimJS](http://slimjs.com) implementation.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.


