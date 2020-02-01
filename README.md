# Webkit Practice

Creating a React/Redux application entirely from scratch, using Webpack. 

## Why?

Having used `create-react-app` and `nano-react-app` so frequently to scaffold my react projects. I thought it was a good idea to learn what those CLI tools were doign for us. This is a simple "Hello World" app that was constructed without use of either of those CLI tools. All dependencies were added manually and configuration files typed by hand.  

## What's included?

- webpack configuration
  - with babel loader and style/css loader
  - with hot-loading dev server
  - script to minify and bundle a production-ready build
- babel configuration (with presets for react and es6)
- ESLint/Prettier configuration
  - using Airbnb Javascript Style Guide rules
- Redux boilerplate
  - including thunk
  - Chrome devtools and redux-logger
      - only in dev environment
  - One demo action to update the store