"use strict";

const ArticlePage = ({match}) => {
  const article = articles.find(a => a.id == match.params.id);
  return (
    <div>
      {article &&
      <article className="container m-5">
        <h1>{article.title}</h1>
        {article.body.split('\n').map(text => <p key={text}>{text}</p>)}
      </article>
      }
    </div>
  );

};

