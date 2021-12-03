import React from "react";

const PostCard = ({ data }) => {
  return (
    <div className="card">
      <h4>Heading</h4>
      <div className="flex-container">
        <p className="flex-item1">{data.title}</p>
        <span className="Flex-item2">
          <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

export default PostCard;
