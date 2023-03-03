# Biobot Kit Finder App

This is a React app that allows a user to look up a Biobot kit by it label ID number.
It is built using the Create React App framework on the frontend and an Express server on the backend.


## How to use
1. *Install packages*: `npm install`

2. *Start the backend server*: `node express-server/index.js`
The console should show `Listening on port 5000` when the server is running.
- The server has one API endpoint, a GET request that returns a list of all kits:
GET `http://localhost:5000/` (no headers required)

3. *Start the frontend server*: `npm start`
The frontend React app is served at `http://localhost:3000`
- The frontend has a text field where a user can start typing a label ID. This text field
autocompletes with label IDs from the set of label IDs in `KITS_SHIPPING_DATA.json`. 
- Upon entering or selecting a label ID and hitting "Submit", a list of kits is displayed with
their corresponding shipping tracking number.


## Engineering decisions
- On initial load of the React app, an API request is made to GET a list of all the kits.
This was done so only one API request would have to be made to the backend while all the
search and autocomplete logic would be handled on the frontend. At larger scale, this could
make the initial load slower, but the alternative (making an API call for each new search) could
create more traffic on the backend when there are a large number of users.
- The autocomplete component was built using the imported material-UI Autocomplete component[https://mui.com/material-ui/react-autocomplete/].
Leveraging this library was a fast way to build the autocomplete feature. The drawback is that
some extra work is needed to make the styling consistent, which I mention in the Additional Work below.


## Additional Work TODO:
With more time, I would make the following improvements:
1. Make the app more readable and accessible. Currently, the autocomplete text field has poor
contrast against the dark background which makes for poor accessibility
standards. 

2. Improve the styling to make it more visually appealing. It would look nicer to have the 
label ID and tracking number appear as a card component instead of an unordered list. 

3. Since the app was made using the Create React App template the styling currently reflects
React's brand (with the logo, favicon, and color scheme), but it should be standardized to use Biobot's if this were to be a Biobot app.

2. Add unit testing. There's currently an App.test.js file that came with the templete Create
React App, but it hasn't been updated with the changes I have made to App.js. I would have liked
to make unit tests for each of the components I created as well as the GET request I made in
express-server.