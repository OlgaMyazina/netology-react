"use strict";
const {Link} = ReactRouterDOM;

const Subscrible = () => {
  return (
    <div className="row m-3">
      <div className="col-sm">
        <div className="card">
          <img className="card-img-top" src={`https://picsum.photos/800/180}`} alt="Подписка"/>
          <div className="card-body">
            <p className="card-text">Уникальная возможность — подписаться на издание!</p>
            <Link to="/subscribtion" className="btn btn-primary">Подписаться</Link>
          </div>
        </div>
      </div>
    </div>
  )
}