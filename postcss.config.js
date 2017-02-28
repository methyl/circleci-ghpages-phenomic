module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "75rem",
            colorPrimaryDark: "#107491",
            colorPrimary: "#007acc",
            colorSecondaryDark: "#22846C",
            colorSecondary: "#46BE77",
            colorNeutralDark: "#111",
            colorNeutral: "#8C8D91",
            colorNeutralLight: "#FBFCFC",
            colorText: "#555",
            colorHeading: "#01455f",
            colorLink: "#0d72b9",
            colorRed: "#a7252e",
            colorLight: "#f2f2f2",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
