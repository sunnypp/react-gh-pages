import { DefaultTheme } from 'styled-components'

const defaultColors = {
  ORANGE:  "#fb8500",
  YELLOW:  "#ffb703",
  PINK:    "#fcccdd",
  SKYBLUE: "#8ecae6",
  BLUE:    "#219ebc",
  NIGHT:   "#023047",
  WHITE:   "#fffeee",
  OVERLAY: "rgba(255, 255, 255, 0.9)",
  GOLD:    "#998866",
  BLACK:   "#001021",
  GREY:    "#445043",
}

export const defaultTheme: DefaultTheme = {
  breakpoints: {
    largerThanSE:     "@media only screen and (min-width: 360px)",
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
    bound: "800px",
    font: {
      small:   "12px",
      content: "16px",
      desktop: "20px",
      big:     "24px",
      bigger:  "36px",
      impact:  "88px",
    },
  },
  typography: {
    handwriting: "Noteworthy, Chalkboard, Freestyle Script, Verdana, Arial",
    sansSerif:    "Verdana, Arial",
  },
  palette: {
    common: {
      small:     defaultColors.GOLD,
      secondary: defaultColors.GREY,
      bright:    defaultColors.YELLOW,
      hidden:    defaultColors.NIGHT,
    },
    menu: {
      icon:       defaultColors.BLACK,
      text:       defaultColors.BLACK,
      background: defaultColors.BLUE,
      hover:      defaultColors.SKYBLUE,
    },
    aboutMe: {
      title:      defaultColors.BLACK,
      background: `linear-gradient(45deg, ${defaultColors.YELLOW}, ${defaultColors.ORANGE}, ${defaultColors.YELLOW}, ${defaultColors.ORANGE}, ${defaultColors.YELLOW});`,
      hi:         defaultColors.BLUE,
      hiShadow:   defaultColors.NIGHT,
      content:    defaultColors.BLACK,
      doodle:     defaultColors.BLACK,
      highlight:  defaultColors.OVERLAY,
    },
    experience: {
      title:      defaultColors.BLACK,
      subtitle:   defaultColors.GREY,
      background: "rgb(217, 230, 231)",
      content:    defaultColors.BLACK,
      doodle:     defaultColors.WHITE,
      highlight:  defaultColors.OVERLAY,
      separator:  defaultColors.BLUE,
    },
    passion: {
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
      title:      defaultColors.WHITE,
      background: defaultColors.NIGHT,
      content:    defaultColors.WHITE,
      doodle:     defaultColors.WHITE,
    },
  }
}
