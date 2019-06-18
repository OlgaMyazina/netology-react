"use strict"

/*
* <div class="tabs">
  <nav class="tabs__items">
    <a class="tabs__item" href="#/">Рефераты</a>
    <a class="tabs__item" href="#/creator">Криэйтор</a>
    <a class="tabs__item" href="#/fortune">Гадалка</a>
  </nav>
  <div class="tabs__content">
    ...
  </div>
</div>
Активная вкладка помечается классом tabs__item-active
*/

const App = (props) => {

  return (
    <Router>
      <div className="tabs">
        <nav className="tabs__items">
          <NavLink exact to="/" className="tabs__item" activeClassName="tabs__item-active">
            Рефераты
          </NavLink>
          <NavLink to="/creator" className="tabs__item" activeClassName="tabs__item-active">
            Криэйтор
          </NavLink>
          <NavLink to="/fortune" className="tabs__item" activeClassName="tabs__item-active">
            Гадалка
          </NavLink>

        </nav>
        <div className="tabs__content">
          <Route exact path="/creator" component={Creator}/>
          <Route exact path="/" component={Essay}/>
          <Route exact path="/fortune" component={Fortune}/>
        </div>
      </div>
    </Router>
  )

};
