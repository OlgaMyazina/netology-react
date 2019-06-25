'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    format(this.state.list,  'sort');
    return (
      <div id="app">
        <FormatMonthTable list={this.state.list}/>
        <FormatYearTable list={this.state.list}/>
        <FormatSortTable list={this.state.list}/>
      </div>
    );
  }
};

const withDateTable = (Component, formatFunc, group) => {
  return class extends React.Component{
    render(){
      return <Component {...this.props} list = {formatFunc(this.props.list, group)}/>
    }
  }
};

const format = (list, group) => {
  const groupName = ['month', 'year', 'sort'];
  let formatList = [];
  if (group) {
    list.map(data => {
      const date = new Date(data.date);
      switch (group) {
        case groupName[0]:
          if (date.getFullYear() < (new Date()).getFullYear()) return;
          const monthName = ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aut', 'Sep', 'Oct', 'Nov', 'Dec'];
          const dataItem = {
            [groupName[0]]: monthName[date.getMonth()],
            amount: data.amount,
          };
          formatList.push(dataItem);
          break;
        case groupName[1]:
          formatList.push({
            [groupName[1]]: date.getFullYear(),
            amount: data.amount,
          });
          break;
        case groupName[2]:
          formatList = list.slice();
          formatList.sort((a, b) => {
            if (new Date(a.date) < new Date(b.date)) return -1;
            if (new Date(a.date) > new Date(b.date)) return 1;
            if (new Date(a.date) === new Date(b.date)) return 0;
          });
          break;
      }
    });
  }
  return formatList;
};


const FormatMonthTable = withDateTable(MonthTable, format, 'month');
const FormatYearTable = withDateTable(YearTable, format, 'year');
const FormatSortTable = withDateTable(SortTable, format, 'sort');


