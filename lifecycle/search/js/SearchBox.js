class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fixed: false};
    this._searchBox = null;
  }

  /*
  * когда компонент класса SearchBox появляется на странице,
  * начинать слушать событие scroll и проверять, не пора ли зафиксировать поисковую строку
  * */

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  getInputRef = (node) => {
    this._searchBox = node;
  };

  render() {
    return (
      <div ref={this.getInputRef}>
        <SearchBoxView fixed={this.state.fixed}/>
      </div>
    )
  }

  /*
  * когда компонент класса SearchBox демонтируется,
  * удалять обработчик события scroll
  * **/

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setPosition();
  };

  shouldComponentUpdate(newProps, newState) {
    return this.state.fixed === newState.fixed;
  }

  /*
  * true если от компонента до верхнего края страницы не осталось расстояния
  */

  isFixed() {
    const top = this._searchBox.getBoundingClientRect().top;
    const result = top <= 0;
    return result;
  }

  /*
  * устанавлиает состояние fixed результатом работы функции isFixed
  */

  setPosition() {
    const result = this.isFixed();
    this.setState({
      fixed: result,
    });
  }
};

