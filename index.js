const darkBackgroundColor = '#002b36'
const darkForegroundColor = '#839496'
const lightBackgroundColor = '#fdf6e3'
const lightForegroundColor = '#839496'
const darkNavColor = '#001f27'
const lightNavColor = '#e6dfcb'
const cursorColor = 'rgba(181, 137, 0, 0.6)'
const borderColor = 'transparent'

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
}

function getUserOptions(configObj) {
  return Object.assign({}, {
    get backgroundColor() {
      if (configObj.hyper_solarized.background === 'dark')
        return darkBackgroundColor;
      else if (configObj.hyper_solarized.background === 'light')
        return lightBackgroundColor;
    },
    get foregroundColor() {
      if (configObj.hyper_solarized.background === 'dark')
        return darkForegroundColor;
      else if (configObj.hyper_solarized.background === 'light')
        return lightForegroundColor;
    },
    get tabNavBackgroundColor() {
      if (configObj.hyper_solarized.unibody === 'false') {
        if (configObj.hyper_solarized.background === 'dark') {
          return darkNavColor;
        } else if (configObj.hyper_solarized.background === 'light') {
          return lightNavColor;
        }
      } else if (configObj.hyper_solarized.unibody === 'true') {
        return this.backgroundColor;
      }
    }
  });
}

exports.decorateConfig = config => {

  // Get user options
  const options = getUserOptions(config);
  const backgroundColor = options.backgroundColor;
  const foregroundColor = options.foregroundColor;
  const navBackground = options.tabNavBackgroundColor;

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
        background-color: ${navBackground};
      }
      .tab_tab {
        color: ${foregroundColor};
        background-color: #001f27;
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
        background-color: #001f27;
      }
    `
  })
}
