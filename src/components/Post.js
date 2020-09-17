import React from "react";
import Comment from './Comment';

function Post({data}) {
  return (
    <div className="post">
      <div className="header-of-post">
        <div className="avatar-of-post">
          <img src={data.author.avatar} width="36px" height="36px" />
        </div>
        <div className="info-user">
          <span>{data.author.name}</span>
          <span>{data.date}</span>
        </div>
      </div>
      <div className="txt-of-post">
        <span>
          {data.content}
        </span>
      </div>
      <div className="row">
        <hr />
      </div>
      {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
    </div>
  );
}

export default Post;
