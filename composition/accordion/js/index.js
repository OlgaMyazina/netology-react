'use strict';

const Accordion = (props) => {
  return (
    <main className="main">
      <h2 className="title" >{props.data.title}</h2>
      {props.data.articles.map(article => <Article {...article}/>)}
    </main>
  )
};

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    }
  }

  handlerClick = () => {
    this.setState({isOpen: !this.state.isOpen})
  };

  render() {
    return (
      <section className={this.state.isOpen ? "section open" : "section"}>
        <button onClick={this.handlerClick}>toggle</button>
        <h3 className="sectionhead" onClick={this.handlerClick}>{this.props.title}</h3>
        <div className="articlewrap">
          <div className="article">
            {this.props.text}
          </div>
        </div>
      </section>

    )
  }
}

const data = {
  title: "React",
  articles: [{
    title: "Компоненты",
    text: "Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим\n" +
      "              состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким\n" +
      "              образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе.\n" +
      "              Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между\n" +
      "              собой."
  }, {
    title: "Выучил раз, используй везде!",
    text: "После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке\n" +
      "              мобильных приложений с использованием React Native.",
  }, {
    title: "Использование JSX",
    text: "JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код\n" +
      "            в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода."
  }]
};

ReactDOM.render(<Accordion data={data}/>, document.getElementById('accordian'));