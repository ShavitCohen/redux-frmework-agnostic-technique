## Redux Middleware pattern

In this project I attempt to introduce a pattern inspired by [Nir Kaufman's book - Thinking in Redux](https://leanpub.com/thinking-in-Redux) <br />

In this practice the application business logic is being driven by redux as an [exportable package](./redux-logic-layer/index.js) that can be imported from any ui implementation. <br />

In this repo there are 4 different implementation which all use the same redux driven business logic to fetch data and update the state. 

### This pattern has few simple ground rules:

- Split redux folder from your UI - to be able to replace your framework easily.
- Reducers are pure functions which has no logic
- Actions creators are pure functions which has no logic
- All the logic should be placed in a redux middlewares
- Features can only change their feature-state.
- All features can <b>read</b> the complete app state and use it 
- Actions Types are in a single file


## About the app

The app is pretty stupid, Created just to introduce this pattern, it basically 
uses [TvMaze API](http://www.tvmaze.com/) to search and present data about tv-shows

Don't be lazy, Run it !

### Installation
```$js
yarn install // only from the root folder (this is a yarn-workspaces monorepo)
```

### React
```
yarn run react
```

Runs the app in the development mode [React](https://reactjs.org/) implementation.<br>
Open [http://localhost:4444](http://localhost:4444) to view it in the browser.

### VueJS
```
yarn run vue
```

Runs the app in the development mode [VueJS](https://vuejs.org/) implementation.<br>
Open [http://localhost:5555](http://localhost:5555) to view it in the browser.


### Angular
```
yarn run angular
```

Runs the app in the development mode [Angular](https://angular.io/) implementation.<br>
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

### SlimJS
```
yarn run slimjs
```

Runs the app in the development mode [SlimJS](http://slimjs.com) implementation.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.


