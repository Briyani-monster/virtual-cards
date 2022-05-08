# virtual-cards

Live link of my website [Live Link](https://virtualcardsproject.netlify.app/).

Api used for this Project (mock api created for this project) [Mock api hosted here](https://raw.githubusercontent.com/Briyani-monster/virtual-card/gh-pages/data.json).

# Index

- [Functionality Implemented](#Functionality-Implemented)
- [Setup](#setup)
- [avialable script](#available-Scripts)
- [Typography](#Typography-selected)
- [Setting Up icons](#SettingUp-icon)
- [Setting Up Axios](#SetitingUp-Axios)
- [Tasks](#Task-to-be-done)

## Functionality-Implemented

1. Created a page with [Your, all, blocked] cards tabs.

   1. Handle tab routing through URLs.

2. Cards is of two types ['burner', "subscription"]

   1. burner cards show expiry in card design
   2. subscription card show limit as shown
   3. A card type is displayed on the top right corner of each card, by icon.

3. When a user clicks on **your** tab they should see cards belonging to them `card_holder` `Ashish`(owner Name).

4. Designed the card listing layout as per the design given below.

   1. infinite scroll is feature is added.
   2. Implemented search by card name.
   3. Implemented filter dropdown as shown in the figure below.

5. added some responsiveness.

6. added grid view and table view feature.

## setup

- **PREQUIST**
  - you'll need node js and npm for installation [refer](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
- To use this project in your desktop first you need to clone it in your desktop For cloning [refer](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
- after cloning open cmd window in Project folder install all node module required  
   `npm install` or `npm i`.
- after this to run the stepis completed to run on localhost
  `npm start`

## available-Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Typography-selected

**key points**

1. 1 rem is made equal to 1px
2. by making html font-size 62.5% which is (10/16)\*100
3. this will help us to easily make font-size responsive on zoom in zoom out

- h1

  - font-size: 9.6rem;
  - font-weight: 600;
  - letter-spacing: -1.5px;

- h4

  - font-size: 3.3rem;
  - font-weight: 400;
  - letter-spacing: 0.25px;

- subtitle

  - font-size: 1.3rem;
  - font-weight: 300;
  - letter-spacing: 0.4px;

- tag

  - font-size: 1rem;
  - font-weight: 600;
  - letter-spacing: 1.25px;

- body

  - font-size: 1.5rem;
  - font-weight: 400;
  - letter-spacing: 0.5px;

- button

  - font-size: 1.3rem;
  - font-weight: 400;
  - letter-spacing: 1.25px;

- tabs
  - font-size: 1.3rem;
  - font-weight: 400;
  - letter-spacing: 1.25px;

## SettingUp-icon

    1. use material ui
    2. ` npm install @mui/material@5.6.4 @emotion/react@11.9.0 @emotion/styled@11.8.1 `
    3. `npm install @mui/icons-material@5.6.2`

    after this we can import by searching here from https://mui.com/material-ui/material-icons/#main-content
    like this `import AddIcon from '@mui/icons-material/Add';`

## SetitingUp-Axios

For fetching better way in react
`npm install axios@0.24.0`

import axios
`import axios from 'axios'`

## Task-to-be-done

- [x] creating static layout

  - [x] **PREPARATION** adding reset.scss typography.scss and variable.scss
    - [x] typography is set according to font size,weight and letter spacing
    - [x] variable file colors are defined color selected from reference image as well as open color website
    - [x] reseting cross browser margin padding to website
  - [x] creating Component folder and creating header component
    - [x] installing icons class
    - [x] starting main component
    - [x] styling filter
    - [x] styling cards

- [x] adding functionality to website
  - [x] installing axios
  - [x] setting up context
  - [x] installing react-router and setting up routing
  - [x] tab functionality is completed
  - [x] added search functionality
  - [x] added filter functionality
- [x] adding infinite scrolling
- [x] Adding responsiveness to website
