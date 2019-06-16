function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

const ChartsItem = (props) => {
  const color = props.colors[props.itemIndex],
    size = props.item / (props.deliver) * 100;

  const style = {
    backgroundColor: color,
    opacity: props.opacity,
    zIndex: props.item
  };

  if (props.isRight) {
    style.right = ((props.sortedSerie.indexOf(props.item) / (props.length + 1)) * 100) + '%'
  }
  style.opacity = props.isOpasity ? props.item / props.max + .05 : '1';
  style[props.isHorisontal ? 'width' : 'height'] = size + '%';

  const itemChildren = props.children;

  return (
    <div className={props.classItem} style={style} key={props.itemIndex}>
      <b style={{color: color}}>{itemChildren}</b>
    </div>
  )
};

const ChartSerie = (props) => {
  const serie = props.children,
    deliver = props.isMaxDeliver ? props.max : serie.reduce((carry, current) => carry + current, 0);
  const itemProps = {...props},
    sortedSerie = serie.slice(0);
  sortedSerie.sort(compareNumbers);
  itemProps.sortedSerie = sortedSerie;
  itemProps.deliver = deliver;

  return (
    <div className={props.className}
         key={props.id}
         style={props.style}>

      <label>{props.title[props.id]}</label>

      {serie.map((item, itemIndex, array) => {
        return (
          <ChartsItem {...itemProps}
                      item={item}
                      itemIndex={itemIndex}
                      key={itemIndex}
                      length={array.length}>
            {item}
          </ChartsItem>
        )
      })}
    </div>
  );
};

const Charts = ({data, ...props}) => {
  return (
    <div className={props.isHorisontal ? "Charts horizontal" : "Charts"}>
      {data.map((serie, serieIndex) => {
        return (
          <ChartSerie {...props}
                      className={props.classSerie}
                      key={serieIndex}
                      id={serieIndex}
                      max={props.max}
                      labels={props.labels}
                      deliver={props.max}
                      isOpasity={true}
                      classItem={props.classItem}
          >
            {serie}
          </ChartSerie>
        )
      })}
    </div>
  )
};


class App extends React.Component {
  componentWillMount() {
    this.setState({
      data: [],
      series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
      labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    })
  }

  componentDidMount() {
    this.populateArray();
    setInterval(this.populateArray.bind(this), 2000);
  }

  populateArray() {
    const series = 5;
    const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

    this.setState({data});
  }

  render() {
    const {data, colors, labels, series} = this.state;
    const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

    const chartsProps = {...this.state};
    chartsProps.title = labels;
    chartsProps.max = max;
    chartsProps.style =
      {
        height: 250
      };
    chartsProps.isMaxDeliver = true;
    chartsProps.isOpasity = true;
    chartsProps.isHorisontal = false;

    return (

      <section>
        <Charts {...chartsProps}
                classSerie="Charts--serie"
                classItem="Charts--item"
                className="Charts"/>

        <Charts {...chartsProps}
                classSerie="Charts--serie stacked"
                isMaxDeliver={false}
                isOpasity={false}
                classItem="Charts--item stacked"
                className="Charts"/>

        <Charts {...chartsProps}
                classSerie="Charts--serie layered"
                isRight={true}
                classItem="Charts--item layered"
                className="Charts"/>

        <Charts {...chartsProps}
                title={series}
                classSerie="Charts--serie"
                style={{height: 'auto'}}
                classItem="Charts--item"
                className="Charts horizontal"
                isHorisontal={true}/>
                
        <div className="Legend">
          {labels.map((label, labelIndex) => {
            return (
              <div>
                <span className="Legend--color" style={{backgroundColor: colors[labelIndex % colors.length]}}/>
                <span className="Legend--label">{label}</span>
              </div>
            );
          })}
        </div>
      </section>
    )
      ;
  }
}
