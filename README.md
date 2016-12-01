# MobileChatApp
A mobile chat app powered by Framework7, VueJS, Cordova and API.AI

## Getting started:

```
cp app/config/prod.env.js.template app/config/prod.env.js
# edit app/config/prod.env.js and put your API.AI token in there ..
```

**Now you're ready to run with it:**

```
cd app
npm run dev
```

Open [localhost:8080](http://localhost:8080)

Check the readme in `app` for more info

## Build

For dev we work with the typical VueJS build system. I've made some small tweaks to the config so that it will build to a cordova app.

To test on a phone.

1. Build the app:

```
npm run build
```

This will create a `www` folder in the top level directory. This is your compiled Cordova app.