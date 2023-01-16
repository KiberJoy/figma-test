module.exports = {
  format: {
    customFormat: function ({ dictionary, options }) {
      const hex2rgba = (value, alpha = 0.5) => {
        const [r, g, b] = value.match(/\w\w/g).map((x) => parseInt(x, 16));
        return `rgba(${r},${g},${b},${alpha})`;
      };
      return dictionary.allTokens
        .map((token) => {
          let value = JSON.stringify(token.value);

          return `export const ${token.name} = ${hex2rgba(value, 0.5)};`;
        })
        .join(`\n`);
    },
  },

  source: ["tokens/**/*.json"],
  platforms: {
    js: {
      buildPath: "build/test/",
      transformGroup: "js",
      files: [
        {
          destination: "tokens.js",
          format: "customFormat",
        },
      ],
    },
    scss: {
      transformGroup: "scss",
      buildPath: "build/test/",
      files: [
        {
          destination: "tokens.scss",
          format: "scss/variables",
        },
        {
          destination: "tokens.scss",
          format: "scss/variables",
        },
      ],
    },
  },
};
