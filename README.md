# Weather Dash

## Description

A simple weather dashboard.

## Tech Stack

### API

- [OpenWeatherMap](https://openweathermap.org/api/)

### Front End

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/)
- [react-icons](https://www.npmjs.com/package/react-icons)

### State Management

- [Recoil](https://recoiljs.org/)

## Run Locally

In order to run this application locally, you must have node installed on your computer. To check if you already have it installed, enter `node -v` in your terminal. If you do not have node, you can install it here: [https://nodejs.org/en/](https://nodejs.org/en/)

Once you have confirmed that node is installed, `cd` into a folder on your computer and run the following command to clone the repository:

`git clone https://github.com/LucasSilbernagel/weather-dash.git`

Then `cd` into the root folder and open it in your code editor. For Visual Studio Code:

`cd weather-dash`
`code .`

In the root folder of your app, create a new file called `.env` and save your OpenWeatherMap API key in it with a key of `REACT_APP_WEATHER_API_KEY`. The file should now look something like this:

`REACT_APP_WEATHER_API_KEY = 72s1f71bc28cv71ayce63749f6g96b78`

There should be no quotation marks or brackets in this file.

Next, install all of the required dependencies by running `npm install`.

To start up the app, make sure you are in the root folder and then run `npm start` in your terminal. This should launch the app in a new browser tab via [http://localhost:3000/](http://localhost:3000/). You are now running the app locally!
