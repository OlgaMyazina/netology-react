"use strict";
const withRouter = window.ReactRouterDOM.withRouter;


const HeaderComponent = ({match, location}) => {
  const article =
    location.pathname.match(/^\/article\/(\d+)\/?$/i);
  const articleId = article ? article[1] : '';

  return (
    <nav className="navbar navbar-light bg-light">
      {articleId
        ? <p className="navbar-brand">Уникальный идентификатор статьи: {articleId}</p>
        : <p className="navbar-brand">Статья не выбрана</p>
      }
    </nav>
  )
};

const Header = withRouter(HeaderComponent);
