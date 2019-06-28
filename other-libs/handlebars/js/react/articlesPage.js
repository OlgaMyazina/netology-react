"use strict";

const ArticlesPage = () => {
  return (
    <main className="container">
      {articles.map((a, index) => {
        console.log(index, a)
        return (
          <Article subject={a.subject} body={a.body} key={index}/>
        )
      })}
    </main>
  )
};
