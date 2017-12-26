# generator-poi-boilerplate-demo 

> Demo React Component from POI boilerplate generator


## Usage

```bash
yarn add generator-poi-boilerplate-demo
# or 
npm install generator-poi-boilerplate-demo
```

For more details, see [`src/js/components/generator-poi-boilerplate-demo.js`](./src/js/components/generator-poi-boilerplate-demo.js)


## Code Architecture

Check out the [`generator-poi@2.1.1`
docs](https://github.com/willmendesneto/generator-poi/tree/v2.1.1#code-architecture)
for info on the repo layout, structure and meaning.


## Publishing the package

This project is using `np` as publisher helper. For more information, please check [`np` documentation](https://github.com/sindresorhus/np#readme)


## NPM Commands

### Component commands

- `npm run start`:  start component page example using [`react-storybook`](https://github.com/storybooks/storybook);
- `npm run watch`:  start component page in watch mode example using [`react-storybook`](https://github.com/storybooks/storybook),
- `npm run demo:deploy`: Publishing your component page in your Github Page
- `npm run build:page`: Creates your page bundle;
- `npm run build:library`: Creates your component bundle to be published in your NPM repository (public or private). This bundle will NOT include [`react-storybook`](https://github.com/storybooks/storybook) and other development dependencies;
- `npm run serve:dist`: Creates a server based on the component page that will be deployed in your Github Page. This command is used to check the results locally before you deploy your component example page;
- `npm run test`: Running unit tests using MochaJS
- `npm run tdd`: Running unit tests using MochaJS in watch mode. It will help you to create a component using [`Test Driven Development` approach](https://en.wikipedia.org/wiki/Test-driven_development)

## Changes and history

See [CHANGELOG.md](./CHANGELOG.md).
