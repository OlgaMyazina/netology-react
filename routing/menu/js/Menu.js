"use strict"

/*
* <nav class="menu">
  <a class="menu__item" href="#/">Главная</a>
  <a class="menu__item" href="#/drift">Дрифт-такси</a>
  <a class="menu__item" href="#/timeattack">Time Attack</a>
  <a class="menu__item" href="#/forza">Forza Karting</a>
</nav>
Активный пункт меню помечается классом menu__item-active

**/

const Menu = (props) => {
  return (
    <nav className="menu">
      <NavLink exact to="/" className="menu__item" activeClassName="menu__item-active">
        Главная
      </NavLink>
      <NavLink to="/drift" className="menu__item" activeClassName="menu__item-active">
        Дрифт-такси
      </NavLink>
      <NavLink to="/timeattack" className="menu__item" activeClassName="menu__item-active">
        Time Attack
      </NavLink>
      <NavLink to="/forza" className="menu__item" activeClassName="menu__item-active">
        Forza Karting
      </NavLink>
    </nav>
  )
}