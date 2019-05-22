const Calendar = (props) => {
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">Среда</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{props.date.getDate()}</div>
          <div className="ui-datepicker-material-month">{getMonth(props.date)[1]}</div>
          <div className="ui-datepicker-material-year">{props.date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{getMonth(props.date)[0]}</span>&nbsp;<span
          className="ui-datepicker-year">{props.date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
        </thead>
        <tbody>
        {renderMonth(props.date)}
        </tbody>
      </table>
    </div>
  );
}

const getMonth = (date) => {
  switch (date.getMonth()) {
    case 0:
      return ['Январь', 'Января'];
    case 1:
      return ['Февраль', 'Февраля'];
    case 2:
      return ['Март', 'Марта'];
    case 3:
      return ['Апрель', 'Апреля'];
    case 4:
      return ['Май', 'Мая'];
    case 5:
      return ['Июнь', 'Июня'];
    case 6:
      return ['Июль', 'Июля'];
    case 7:
      return ['Август', 'Августа'];
    case 8:
      return ['Сентябрь', 'Сентября'];
    case 9:
      return ['Октябрь', 'Октября'];
    case 10:
      return ['Ноябрь', 'Ноября'];
    case 11:
      return ['Декабрь', 'Декабря'];
  }
};

const daysInMonth = (date) => {
  return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
};

const getWeeks = (year, month) => {
  const l = new Date(year, month + 1, 0);
  return Math.ceil((l.getDate() - (l.getDay() ? l.getDay() : 7)) / 7) + 1;
};

const firstDayInMonth = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const firstDay = new Date(year, month, 1);
  return firstDay;
};

const renderMonth = (date) => {
  const weeks = getWeeks(date.getFullYear(), date.getMonth());
  const renderArray = [];
  //renderArray.push(renderFirstWeek(date));
  for (let i = 0; i < weeks; i++) {
    renderArray.push(
      <tr>
        {renderWeek(date, i, i == weeks - 1)}
      </tr>
    )
  }
  return renderArray;
}

const renderWeek = (date, weekNumber, last) => {
  const firstDay = firstDayInMonth(date);
  const numberDay = date.getDate();

  let nextWeek = 1 + (6 - firstDay.getDay()) + 1 + 7 * (weekNumber - 1);
  const arrayRenderWeek = [];
  if (last) {
    const lastDayInMonth = new Date(date.getFullYear(), date.getMonth(), daysInMonth(date));
    for (let i = 0; i <= lastDayInMonth.getDay(); i++) {
      arrayRenderWeek.push((numberDay == nextWeek) ? <td className='ui-datepicker-today'>{nextWeek}</td> :
        <td>{nextWeek}</td>);
      nextWeek++;
    }
    ;
    let numberNewMonth = 1;
    for (let i = lastDayInMonth.getDay() + 1; i <= 6; i++) {
      arrayRenderWeek.push(<td className='ui-datepicker-other-month'>{numberNewMonth}</td>);
      numberNewMonth++
    }
    return arrayRenderWeek;
  }
  if (weekNumber == 0) {
    const lastDayLastMonth = daysInMonth(new Date(date.getFullYear(), date.getMonth() - 1));
    const dateLastDayLastMonth = new Date(date.getFullYear(), date.getMonth() - 1, lastDayLastMonth);
    const firstDayToFirstWeek = lastDayLastMonth - dateLastDayLastMonth.getDay();
    for (let i = firstDayToFirstWeek; i <= lastDayLastMonth; i++) {
      arrayRenderWeek.push(<td className='ui-datepicker-other-month'>{i}</td>);
    }
    let number = 1;
    for (let i = firstDay.getDay(); i <= 6; i++) {
      arrayRenderWeek.push((numberDay == number) ? <td className='ui-datepicker-today'>{number}</td> :
        <td>{number}</td>);
      number++;
    }
    return arrayRenderWeek;
  }
  for (let i = 0; i <= 6; i++) {
    arrayRenderWeek.push((numberDay == nextWeek) ? <td className='ui-datepicker-today'>{nextWeek}</td> : <td>{nextWeek}</td>);
    nextWeek++;
  }
  return arrayRenderWeek;

}

