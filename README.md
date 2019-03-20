## Redux Middleware pattern

In this project I attempt to introduce a pattern inspired by [Nir Kaufman's book - Thinking in Redux](https://leanpub.com/thinking-in-Redux)
### This pattern has few ground rules:

- Split redux folder from your UI - to be able to replace your framework easily.
- Reducers are pure functions which has no logic
- Actions creators are pure functions which has no logic
- All the logic should be placed in a redux middlewares
- Features can only change their feature-state.
- All features can <b>read</b> the complete app state and use it 
- Actions Types are in a single file

### Installation
```$js
yarn install // only from the root folder (this is a yarn-workspaces monorepo)
```

### `yarn run react`

Runs the app in the development mode react implementation.<br>
Open [http://localhost:4444](http://localhost:4444) to view it in the browser.

### `yarn run vue`

Runs the app in the development mode vue implementation.<br>
Open [http://localhost:5555](http://localhost:5555) to view it in the browser.


### `yarn run angular`

Runs the app in the development mode angular implementation.<br>
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

### `yarn run slimjs`

Runs the app in the development mode slimjs implementation.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.


## About the app

The app is pretty stupid, Created just to introduce this pattern, it basically 
uses [TvMaze API](http://www.tvmaze.com/) to search and present data about tv-shows

Don't be lazy, Run it !
