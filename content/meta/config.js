const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "chico's blog", // <title>
  shortSiteTitle: "sharing ideas and tips", // <title> ending for posts and pages
  siteDescription: "",
  siteUrl: "https://chicoalmeida.io",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "chico almeida",
  authorTwitterAccount: "hello_chico",
  // info
  infoTitle: "chico almeida",
  infoTitleNote: ":)",
  // manifest.json
  manifestName: "chico's blog",
  manifestShortName: "chicoBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "francisco.rl.almeida at gmail com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/chicoalmeida" },
    { name: "twitter", url: "https://twitter.com/hello_chico" },
    { name: "linkedin", url: "https://www.linkedin.com/in/chicoalmeida/" }
  ]
};
