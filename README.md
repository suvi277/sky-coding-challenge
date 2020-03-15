This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Sky Coding Test

This is a small app to demonstrate the below points

```
 Time Chart with Chart.js
 React Router
 Redux workflow
 Basic Animation
 Content Loader

```

### About

The App consists of two routers

1. Home Page - Dashboard of Time Range Data

   - Using Chart.js and timeseries restful API plotted graph

2. Stream Page - Loaded List of Video Streams

   - Used react-content-loader for PWA
   - Rendered list of video streams with metat data
   - on Hover added little animation tweaks

More Details

1. App is responsive
2. Added test specs for some files
3. Used rail-style folder structure

### TODO

Incomplete test , as there were some error due to the following, hence deleted the spec files for now

```
Test suite failed to run

Cannot find module 'react' from 'Provider.js'

However, Jest was able to find:
    	'components/Provider.js'
```

## Editor Project

This editor is setup with

```
.eslintrc
.prettier
.jsconfig
```

## Project Commands

#### Start App in Development Mode

> Note: Only First time

```
yarn install

```

> Note: Run the Project

```
yarn start

```

#### Linting

```
yarn lint

```

#### Test

```
yarn test

```

#### Build Project in Production Mode

```
yarn build

```
