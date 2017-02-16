# NodeJS Workshop client (Electron + ReactJS)

## Initialization

```
npm install
npm run build
npm start
```

## Development

```
npm run watch
npm run dev
```

## Scripts

|Command|Description|
|---|---|
|```npm start```|Starts Electron application|
|```npm run dev```|Starts Electron application in development mode|
|```npm run web```|Starts web application (macOS + Chrome only)|
|```npm run compile```|Builds webpack (javascript compilation) once|
|```npm run watch```|Starts webpack builder in watch mode|
|```npm run pack```|Generates package folder (for testing purposes)|
|```npm run dist```|Packages project in a distributable for current architecture|
|```npm run distall```|Packages project distributables for Windows, Linux and Mac|

[Required tools for distall](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build)

## Known bugs

Cancel editing twice fails. Check behavior

## Docs and references

[Electron reference docs](http://electron.atom.io/docs)

[Electron API demos](https://github.com/electron/electron-api-demos)

[Webpack reference docs](https://webpack.github.io/docs)

[Material UI reference docs](http://www.material-ui.com/#/components)

[Material icons](https://material.io/icons)
