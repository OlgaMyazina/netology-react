'use strict';

const List = (props) => (
  <div>
    {props.children(props.items)}
  </div>
);

const ListItem = ({...props}) => {
  const item = props.children;
  switch (item.type) {
    case "unisex":
      return <Item color="black" item={item}/>;
    case "male":
      return <Item color="blue" item={item}/>;
    case "female":
      return <Item color="orange" item={item}/>;
  }
};

const App = ({items}) => (
  <main>
    <List items={items}>
      {items =>
        items.map((item, index) => <ListItem key={index}>{item}</ListItem>)
      }
    </List>
  </main>
);
