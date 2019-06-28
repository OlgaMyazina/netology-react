"use strict";

const Article = ({subject, body}) => {
  console.log(`test`, subject);
  return (
    <div className="article">
      <h2>{subject}</h2>
      <p>{body}</p>
    </div>
  )
};
