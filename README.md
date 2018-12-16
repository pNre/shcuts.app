# shcuts.app

Source code of [shcuts.app](https://shcuts.app), a web app to preview workflows created in [Shortcuts](https://support.apple.com/guide/shortcuts/welcome/ios) on iOS.

This is just a toy project so things might not be implemented the best way possible or work as expected.

## Project structure

- `src/` Frontend part, responsible for presenting  the plist file of each shared shortcut with an (almost) user friendly UI.
- `server/` Server side logic. 
Downloads the plists from iCloud, converts them from their binary representation into an XML, saves it in a local database. Saved plists are then exposed via a couple of endpoints to the frontend.

## Setup
### Frontend
```
npm install

# to build and bug
npm run serve

# to build for production
npm run build
```

### Backend
```
# connection string for the pgsql database
export PG_CONNECTION_STRING="postgresql://pNre:@localhost:5432/pNre"

# compile
make

# run the server serving the static content in the `../dist` folder
./bin/shortcuts ../dist
```
