'use strict';
const defaultDarkNavColor = '#001f27';
const defaultLightNavColor = '#e6dfcb';
const defaultCursorColor = 'rgba(181, 137, 0, 0.6)';
const defaultBorderColor = 'transparent';

const colors = {
  lightBlack:     '#002b36',
  black:          '#073642',
  lightGreen:     '#586e75',
  lightYellow:    '#657b83',
  lightBlue:      '#839496',
  lightCyan:      '#93a1a1',
  white:          '#eee8d5',
  lightWhite:     '#fdf6e3',
  yellow:         '#b58900',
  lightRed:       '#cb4b16',
  red:            '#dc322f',
  magenta:        '#d33682',
  lightMagenta:   '#6c71c4',
  blue:           '#268bd2',
  cyan:           '#2aa198',
  green:          '#859900'
};

function getDefaultConfig() {
  return Object.assign({}, {
    get background() {
      return 'dark';
    },
    get unibody() {
      return true;
    },
    get cursorColor() {
      return defaultCursorColor;
    },
    get borderColor() {
      return defaultBorderColor;
    },
    get navBackground() {
      return defaultDarkNavColor;
    }
  });
}

function getUserOptions(confObj) {
  if (confObj.hyper_solarized === undefined) {
    return getDefaultConfig();
  }

  return Object.assign({}, {
    get background() {
      return confObj.hyper_solarized.background || 'dark';
    },
    get unibody() {
      return (confObj.hyper_solarized.unibody || 'true') !== 'false';
    },
    get cursorColor() {
      return confObj.hyper_solarized.cursorColor || defaultCursorColor;
    },
    get borderColor() {
      return confObj.hyper_solarized.borderColor || defaultBorderColor;
    },
    get navBackground() {
      if (confObj.hyper_solarized.navColor === undefined) {
        return (confObj.hyper_solarized.background === 'dark') ? defaultDarkNavColor : defaultLightNavColor;
      }
      return confObj.hyper_solarized.navColor;
    }
  });
}

function getColors(options) {
  let backgroundColor;
  let navBackgroundColor;

  if (options.background === 'light') {
    backgroundColor = colors.lightWhite;
    if (options.unibody)
      navBackgroundColor = colors.lightWhite;
    else
      navBackgroundColor = options.navBackground;
  }
  else {
    backgroundColor = colors.lightBlack;
    if (options.unibody)
      navBackgroundColor = colors.lightBlack;
    else
      navBackgroundColor = options.navBackground;
  }
  return [backgroundColor, navBackgroundColor, options.cursorColor, options.borderColor];
}

exports.decorateConfig = config => {

  // Get user options
  const options = getUserOptions(config);
  const [backgroundColor, navBackgroundColor, cursorColor, borderColor] = getColors(options);
  const foregroundColor = colors.lightBlue;

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
        text-rendering: optimizeLegibility;
        font-weight: 500;
      }
      .tabs_list {
        border: 0;
      }
      .tabs_nav {
        background-color: ${navBackgroundColor};
      }
      .tab_tab {
        color: ${foregroundColor};
        background-color: ${navBackgroundColor};
        border-color: ${borderColor};
      }
      .tab_tab:before {
        border: 0;
      }
      .tab_tab.tab_active {
        border: transparent;
        font-weight: bold;
        color: #b3b3b3;
        background-color: ${backgroundColor};
      }
      .splitpane_divider {
        background-color: ${navBackgroundColor};
      }
    `
  })
};
