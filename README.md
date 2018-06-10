Hyper-Solarized
========

Hyper-Solarized is an implementation of the [Solarized](http://ethanschoonover.com/solarized) theme for the [Hyper terminal](https://hyper.is)

![Hyper Solarized](https://media.giphy.com/media/2zcquVWcOJ2eOlVYmE/giphy.gif)

# Contents
1. [Installation](#installation) 
2. [Configuration](#configuration)

## Installation

### Using the built in Hyper plugin manager
```bash
$ hyper i hyper-solarized
```

### Using the .hyper.js file
Open the `~/.hyper.js` file using your favorite text editor and edit the plugins array to include `hyper-solarized`
```js
plugins['hyper-solarized']
```
Reload Hyper to apply the changes

## Configuration
Hyper-Solarized supports custom configuration parameters. Specify the desired parameters in the config section of your `~/.hyper.js`
```js
config: {     
  hyper_solarized: {
    unibody: 'true',
    background: 'light'
  },
}
```
The following custom configuration options are currently supported

| Parameter | Function | Values |  
|:----------|:---------|-------:|
|background	|The variant of Solarized to be used | `{'dark', 'light'}` Defaults to dark|
|unibody	|Specifies whether the terminal window should have a seamless window or a different colored background for the tab nav bar | `{'true', 'false'}` Defaults to true|
|cursorColor|The color of the caret in the terminal|CSS color value (Hex/rgba)|
|borderColor|The color of the main window border and the tab bar|CSS color value. Defaults to transparent|
|navColor|The color of the nav bar|CSS color value. Overridden by unibody|



