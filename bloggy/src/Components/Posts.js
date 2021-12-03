import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { usePostState } from "./state/usePostState";

import axios from "axios";

//api
import postAction from "./action/postAction";

const Posts = () => {
  const { PostDispatch } = usePostState();
  const { logoColor, PostState } = usePostState();
  console.log(logoColor);
  const {
    posts: { datas, status },
  } = PostState;

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const postResult = await postAction.getAllPost();
    console.log(postResult);
    const { data, status } = postResult;
    console.log(status);

    PostDispatch({
      type: "SET_POSTS",
      payload: { datas: data, status: status },
    });
  };

  return (
    <div className="post">
      {status != 200 ? console.log("hellow") : console.log("bye")}
      {datas.map((data) => {
        return <PostCard data={data} key={data.id} />;
      })}
    </div>
  );
};

export default Posts;
