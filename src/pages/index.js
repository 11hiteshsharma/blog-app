import Home from "@/components/Home";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <div>
      <Head>
        <title>RiseBlog</title>
      </Head>
      <Home />
    </div>
  );
};

export default index;
