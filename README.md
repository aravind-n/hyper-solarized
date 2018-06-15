Hyper-Solarized
========
  
[![Pipeline Status](https://gitlab.com/aravind-n/hyper-solarized/badges/master/pipeline.svg)](https://gitlab.com/aravind-n/hyper-solarized/commits/master)
[![npm](https://img.shields.io/npm/dm/hyper-solarized.svg?label=DL)](https://www.npmjs.com/package/hyper-solarized)
[![Repo on GitHub](https://img.shields.io/badge/repo-GitHub-3D76C2.svg)](https://github.com/aravind-n/hyper-solarized)
[![Repo on GitLab](https://img.shields.io/badge/repo-GitLab-6C488A.svg)](https://gitlab.com/aravind-n/hyper-solarized)
  
Hyper-Solarized is an implementation of the [Solarized](http://ethanschoonover.com/solarized) theme for the [Hyper terminal](https://hyper.is).

![Hyper Solarized](https://i.imgur.com/JdT64Kc.gif)
  
# Contents
1. [Installation](#installation) 
2. [Configuration](#configuration)
3. [Screenshots](#screenshots)

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
    background: 'light',
    auto: true,
    lightTime: '08:00',
    darkTime: '19:00'
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
|auto|Whether or not to switch color scheme automatically based on time, overriding the `background` setting.|Boolean. Defaults to `false`.|
|lightTime|Time of day to switch to light theme.|String `'HH:MM'` Defaults to `'08:00'`|
|darkTime|Time of day to switch to dark theme.|String `'HH:MM'` Defaults to `'19:00'`|


## Screenshots
![light](https://i.imgur.com/F97GT6K.png)
![dark](https://i.imgur.com/36DdLbA.png)

Avatar made by Ethan Schoonover. All rights to the avatar go to him.
