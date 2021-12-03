import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const getAllPost = async () => {
  try {
    const res = await axios.get(baseURL);
    console.log(res);
    const { data, status } = res;
    console.log(status);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export default { getAllPost };
