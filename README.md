## bcweb
  [![CircleCI](https://circleci.com/gh/begincoffees/bcclient.svg?style=shield)](https://circleci.com/gh/begincoffees/bcclient)
  [![Uptime Robot status](https://img.shields.io/uptimerobot/status/m779426128-6b6e81ed8dc987db17d4cad2.svg)](https://status.bcweb.me)|

An full-stack MVP web-app for an e-commerce platform.

### UI 
Built with react and typescript and uses Apollo to integrate a graphql client

#### Tech Stack
* [react (v16.7.0alpha)](https://facebook.github.io/react/) - View layer
* [apollo-client (v2)](https://www.apollographql.com/docs/react/) - GraphQL client and react integration
* [reach-router (v1.1.0)](https://reach.tech/router) - Client side Routing
* [antd (v3.11.6)](https://ant.design/) - React Component Library
* [sass](http://sass-lang.com/) - CSS preprocessor
* [less](http://lesscss.org/) - CSS preprocessor(for use with Ant Design)
* [babel (v7)](https://babeljs.io/) - ES6/JSX compiler
* [webpack (v4)](https://webpack.github.io/) - Module bundler
* [jest](https://facebook.github.io/jest/) - Test suite
* [react-stripe-elements (v2.0.1)](https://github.com/stripe/react-stripe-elements) - Handles client side tokenization and payment authorizations via stripe.
* [typescript (v2.9.2)](https://www.typescriptlang.org/)

#### Development

You'll need a copy of the .env

Clone the repo:

```sh
$ git clone https://github.com/andrewangelle/bcapp.git
```

Install dependencies:

```sh
$ npm install
```

Start dev server with HMR:

```sh
$ npm start
```

Run production grade build:

```sh
$ npm run build
```

Open up the app at http://localhost:3000


#### Production Build
* react-scripts with node 10 for build stage
* NGINX web server
* Docker container
