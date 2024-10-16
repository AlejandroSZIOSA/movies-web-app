import fs from "fs";

const generateRobotsTxt = () => {
  const environment = process.env.NODE_ENV;
  let content = "User-agent: *\n";
  if (environment === "production") {
    //Allows all pages
    content = "User-agent: *\n";
  } else {
    //Block all pages in development
    content += "Disallow:*\n";
  }

  //Can Add more rules Here
  fs.writeFileSync("./public/robots.txt", content);
};
generateRobotsTxt();

//"generate-robots": "node ./src/scripts/robot-txt-generator.js"
