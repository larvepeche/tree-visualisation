# Dynamic page Evaluator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

Dynamic page Evaluator is a tool made for PCE developper to enable them to work more efficiently.

this tool can preview which pages are displayed according to their display conditions.

conditions are written with Spring SPEL expression and [spel2js](https://www.npmjs.com/package/spel2js) is used to evaluate this expression in Javascript.

## Get started

you need to run the run the following scripts to run the react project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Documentation

Dynamic page evaluator have 4 main pages

### The tree view

This is where you paste your JSON tree, push the execute button and see what pages are displayed according to your variables

tree json example : https://bitbucket.org/linkeodt/pcetooling/src/master/src/data/presentation.json

### Profile editor (variables)

Speaking of variables, this page integrate a JSON editor where you can change variable value of your current profile or add new ones.

It also display a preview of your active profile JSON file.

profile json example : https://bitbucket.org/linkeodt/pcetooling/src/master/src/data/locals.json

!! : this example is used as your default profile. Once you change it, your changes are saved in a [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)

### Full view

It's a combination of the 2 first pages

### Expression evaluator
As its name suggests, you can write a given expression ( A condition ) and the App will tell you if the condition is true or false according to your current variable

#### for example

`!#isFsOnly` returns `True` if the variable isFsOnly is `False` on your current profile.

This evaluator can handle even more complex conditions like `!(#isAh?:false) and !#isFsOnly and (#nomPack == 'PackPremium' or #nomPack == 'PackEssentiel' or #nomPack == 'PackExpert' or #nomPack == 'PackVisites') and !(#offreVerticalisationAutoAvailable?:false)`.

Try it !
