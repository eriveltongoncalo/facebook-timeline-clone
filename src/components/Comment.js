import React from "react";

function Comment({ data }) {
  return (
    <div className="comment">
      <div className="avatar-of-comment">
        <img src={data.author.avatar} width="36px" height="36px" />
      </div>
      <div className="comment-of-txt">
        <div>
          <span>
            {data.content}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
