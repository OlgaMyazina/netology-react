"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <Subscrible/>
          <div className="row m-3">
            {articles.map(article =>
              <div className="col-sm" key={article.id}><Article {...article} /></div>
            )}
          </div>
        </div>

      </div>
    );
  }
}

