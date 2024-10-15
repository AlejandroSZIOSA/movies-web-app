//5 MetaTag "FN Component" using Helmet, Schemas
import React from "react";
//Import and Destructuring an object (many functions)
import { Helmet } from "react-helmet-async";

const MetaTags = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default MetaTags;
