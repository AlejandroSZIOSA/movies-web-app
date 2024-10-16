//6 Generate a dynamic XML.file
import register from "@babel/register";
//import { Sitemap } from "react-router-sitemap";
import routes from "./sitemap-routes.js";

import pkg from "react-router-sitemap";

console.log("pkg----------", pkg);
const { default: SitemapBuilder } = pkg;

//Passing an object as param to
register({ presets: ["@babel/preset-env", "@babel/preset-react"] });

//FN generate results
function generateSitemap() {
  //"new" operator lets developers create an instance of a user-defined object
  const sitemap = new SitemapBuilder(routes)
    .applyParams({})
    .build("https://example.com")
    .save("./public/sitemap.xml");
  return sitemap;
}
//FN calling
generateSitemap();
