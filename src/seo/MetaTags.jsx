//"FN Component" using Helmet, Schemas
import React from "react";
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
