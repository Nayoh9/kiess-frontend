/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "jost": "Jost"
      },
      colors: {
        "kiessColor": "#CE3273",
        "secondKiessColor": "#F60F24",
        "blackTextColor": "#262626",
        "inputColor": "#EEEEEE",
        "pinkKiess": "#E3364A"
      },
      gap: {
        "40%": "40%",

      },
      padding: {
        "40%": "40%",
        "50%": "50%"
      },
      margin: {
        "40%": "40%",
        "800px": "800px",
        "78%": "78%"

      },

      width: {
        "mainPhoneWidth": "40%",
        "mainBadgesWidth": "60%",
        "mainScreensWidth": "60%",
        "mainBaseline2000pxWidth": "600px",
        "mainAssets2000pxWidth": "500px",
        "tendencyScreensWidth": "400px",
        "tendencyBadgesWidth": "300px",
        "tendencyTendencyWidth": "500px",
        "tendencyTextWidth": "450px",
        "tendencyTextMobile": "200px",


      },

      minHeight: {
        "mainHeight": 'calc(100vh - 112px)'
      },


      fontSize: {
        "conditionsFontSize": "13px"
      },

      screens: {
        "screen1260px": "1260px",
        "screen2000px": "2000px",
        "tablet820px": "820px",
        "mobile": "500px"
      }
    },

  },
  plugins: [nextui()],
}

