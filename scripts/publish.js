console.log("--running publish--");

const ghpages = require("gh-pages");
const path = require("path");
const date = new Date();

ghpages.publish(
  path.resolve(__dirname + "/../dist"),
  {
    message: `[ci skip] deployment (${date.getUTCFullYear()}-${date.getUTCMonth() +
      1}-${date.getUTCDate()}-${date.getUTCHours()}-${date.getUTCMinutes()})`,

    /** Branch */
    branch: "master",
    repo:
      "https://" +
      process.env.GH_TOKEN +
      "@github.com/tweenrex/tweenrex.github.io.git",

    /** User */
    user: {
      name: "notoriousb1t",
      email: "christopher.j.wallis@gmail.com"
    }
  },
  err => {
    if (err) {
      console.log("--publish failed!--", err);
      return;
    }
    console.log("--publish done--");
  }
);
