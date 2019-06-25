'use strict';

const DateTime = props => {
  return (
    <p className="date">{props.date}</p>
  )
};

const dateToText = delta => {
  //минут
  delta = delta / (1000 * 60);
  if (delta < 60) {
    return `${delta.toFixed(0)} минут назад`;
  }
  delta = delta / 60;
  if (delta < 24) {
    return `${delta.toFixed(0)} часов назад`;
  }
  delta = delta / 24;
  if (delta < 30) {
    return `${delta.toFixed(0)} дней назад`;
  }
  delta = delta / 30;
  if (delta < 12) {
    return `${delta.toFixed(0)} месяцев назад`;
  }
  delta = delta / 12;
  return `${delta.toFixed(0)} лет назад`;

};


const withDateTime = Component => {
  return class extends React.Component {
    render() {
      const data = new Date(this.props.date);
      const now = new Date();
      const delta = now - data;
      return <Component {...this.props} date={dateToText(delta)}/>;
    }
  };
};

const DateTimePretty = withDateTime(DateTime);
