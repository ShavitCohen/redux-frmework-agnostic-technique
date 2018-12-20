This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Redux Middleware pattern

In this project I attempt to introduce a pattern inspired by [Nir Kaufman's book - Thinking in Redux](https://leanpub.com/thinking-in-Redux)
### This pattern has few ground rules:

- All the logic should be in middlewares
- Devide redux from your UI - to be able to framework agnostic.
- Every feature <b>write</b> to it's own state
- Any feature can <b>read</b> the state and use it 
- Actions are in a single file

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:4444](http://localhost:4444) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## About the app

The app is pretty stupid, Created just to introduce this pattern, it basically 
uses [TvMaze API](http://www.tvmaze.com/) to search and present data about tv-shows

Don't be lazy, Run it !
