const Menu = (props) => {
  const {items, opened} = props;
  if (!opened) {
    return (
      <div className='menu'>
        <div className="menu-toggle"><span></span></div>
      </div>
    );
  };

  return (
    <div className="menu menu-open">
      <div className="menu-toggle"><span></span></div>
      <nav>
        <ul>
          {renderItemMenu(items)}
        </ul>
      </nav>
    </div>
  );
};

const renderItemMenu = (items) => {
  return items.map(item => {
    console.log(item);
    return (
      <li><a href={item.href}>{item.title}</a></li>
    );
  });
};

