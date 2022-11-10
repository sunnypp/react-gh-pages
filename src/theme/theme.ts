import { DefaultTheme } from 'styled-components'

const defaultColors = {
  ORANGE:  "#ff9422",
  YELLOW:  "#ffdf10",
  PINK:    "#fcccdd",
  BLUE:    "#7788ff",
  WHITE:   "#fffeee",
  OVERLAY: "rgba(255, 255, 255, 0.9)",
  GOLD:    "#998866",
  BLACK:   "#001021",
}

export const defaultTheme: DefaultTheme = {
  breakpoints: {
    largerThanPhone:  "@media only screen and (min-width: 481px)",
    largerThanTablet: "@media only screen and (min-width: 769px)",
  },
  size: {
    size1: "4px",
    size2: "8px",
    size3: "16px",
    size4: "24px",
    size5: "36px",
    size6: "48px",
    menu:  "72px",
    font: {
      small: "12px",
      content: "24px",
    },
  },
  palette: {
    common: {
      small: defaultColors.GOLD,
    },
    menu: {
      icon:       defaultColors.BLACK,
      text:       defaultColors.BLACK,
      background: defaultColors.ORANGE,
      hover:      defaultColors.YELLOW,
    },
    aboutMe: {
      title:      defaultColors.BLACK,
      background: defaultColors.YELLOW,
      content:    defaultColors.BLACK,
      doodle:     defaultColors.BLACK,
      highlight:  defaultColors.OVERLAY,
    },
    experience: {
      title:      defaultColors.BLACK,
      background: "rgb(206, 225, 231)",
      content:    defaultColors.BLACK,
      doodle:     defaultColors.WHITE,
      highlight:  defaultColors.OVERLAY,
    },
    nonWork: {
      title:      defaultColors.BLACK,
      background: defaultColors.YELLOW,
      content:    defaultColors.BLACK,
      doodle:     defaultColors.BLACK,
    },
    gears: {
      title:      defaultColors.BLACK,
      background: defaultColors.BLUE,
      content:    defaultColors.BLACK,
      doodle:     defaultColors.BLACK,
    },
    lifeGoals: {
      title:      defaultColors.BLACK,
      background: defaultColors.ORANGE,
      content:    defaultColors.BLACK,
      doodle:     defaultColors.BLACK,
    },
  }
}
