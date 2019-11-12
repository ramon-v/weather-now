# Weather Now

Weather Now is a ReactJS application that looks up for the current weather in Urubici (BR), Nuuk (GL) and Nairobi (KE) cities.

### Tech

Weather Now uses a number of open source projects to work properly:

* [ReactJS] - for building user interface.
* [Axios] - promise based HTTP client to handle api requests
* [Normalize] - A modern, HTML5-ready alternative to CSS resets


## Installation

Weather Now requires [Node.js](https://nodejs.org/) v10.16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd weather-now
$ npm install
```

### Start server

```sh
$ npm start
```

### Production build

```sh
$ npm run build
```

## How it works
Inside `App` component, there's an `async` function that fetches data from [Open Weather Api](https://openweathermap.org/current). All data is retrieved by using [axios](https://github.com/axios/axios) and passing cities IDs as parameters along with the `api key`, stored in `.env` file located in the root of the project. You can find axios' setup file inside `src/api/` along with the cities IDs file.
If the data retrieving is sucessfull, the response data will be attached to `citiesData` using `setCitiesData` and also adds it to the browser's `localStorage` by invoking `setLocalStorage()` and passing the fetched data as argument (this is a setup function for `localStorage` data), otherwise it will run `.catch(error)`. 
Notice that all state management is made using [React Hooks](https://reactjs.org/docs/hooks-intro.html).
  
`useEffect()` handles the localStorage timestamp. It retrieves data from localStorage and, after 10 minutes, it updates the data by invoking `fetchData()`.

`buildCards()` is called when `App` component is rendered. It checks the cities IDs array, `.map()` through it and returns `Card` components for each city id passing its data.

As the data fetching is not returned yet, it will render a `Loader` component as placeholder, but if there's some error it will render `TryAgain` component instead that has an `onClick` function that will call `fetchData()`.

`Card` component also has a function `displayCelsius()` to add a class according to the temperature number and will apply a color to it (`cold` or `hot`).

## Diagrams
  
#### App Diagram
![App Diagram](https://i.ibb.co/YkMd4j9/app-diagram.jpg)
  
#### Axios Diagram
![Axios Diagram](https://i.ibb.co/VgdTn5P/axios.jpg)