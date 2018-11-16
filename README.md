# Playlish

The fastest way to create Spotify playlists from a list of artists.

## Where does the idea come from
I am huge fan of music festivals. I attend at least 2 festivals a year, up to 5, mostly all during summer. I think what I love the most is listening to ALL the lineup to discover new songs so that I can boast to my friends to know this faaaaaaamous group (let's be honest :) ).

What I was doing for the past few years was searching for all artists on Spotify, then adding their 3 to 5 most famous songs (also known as top tracks in Spotify) to a common playlist. Then, I was able to listened to those curated playlists before each festivals.

I was tired of doing so, so I created a quick React app which creates a playlist with the first 5 top tracks of each artists I looked for.

There's place for tons of improvements but that's still a huge time saver for me!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TODO

As I said, there's place for tons of improvements.

### Technical todos

- refactor main pages to include the header by default
- better handle loader and loading messages
- display a count of tracks with a warning message when above 100
- add the new artist on top of the list
- implement remove artist from playlist
- implement the playlists stats page
- add a link of this page into the header
- redirect the user to the playlists stats page once the playlist has been created
- send an email to myself for each created playlist or any other metrics tool

### New features

- add a view to list all already created playlists with statistics: number of tracks, genres, total duration...
- enter a festival lineup url and let Playlish creates the associated playlist

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
