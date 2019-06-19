class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this._canvas = null;
  }

  componentWillReceiveProps(newProps) {
    this.updateCanvas(newProps.completed);
  }

  getCanvasRef = (node) => {
    this._canvas = node;
  };

  componentDidMount() {
    this.createCanvas();
  }

  createCanvas() {

    this.ctx = this._canvas.getContext('2d');
    this.ctx.fillRect(0, 0, 300, 200);
    // центр по горизонтали и вертикали
    this.xc = this._canvas.width / 2;
    this.yc = this._canvas.height / 2;

    this.optionsSection = {
      color: '#96d6f4',
      step: this.getRadians(360 / this.props.total),
      width: 7,
      r: 45,
    };

    this.optionsCycle = {
      color: '#4ca89a',
      width: 7,
      r: 52,
    };


    this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this.updateCanvas(this.props.completed);
    this.drawText((this.props.completed * 100 / this.props.total).toFixed(0));
  }

  updateCanvas(completed) {
    // очищаем canvas
    this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    const inc = this.optionsSection.step * completed;
    this.drawText((100 * completed / this.props.total).toFixed(0));
    this.drawSector(this.optionsSection, inc);
    this.drawCycle(this.optionsCycle);
  }

  drawSector(options, inc) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = options.color;
    this.ctx.lineWidth = options.width;
    this.ctx.arc(this.xc, this.yc, options.r, 0, inc);
    this.ctx.stroke();
  }

  drawCycle(options) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = options.color;
    this.ctx.lineWidth = options.width;
    this.ctx.arc(this.xc, this.yc, options.r, 0, 2 * Math.PI);
    this.ctx.stroke();
  }

  drawText(text) {
    this.ctx.fillStyle = "gray";
    this.ctx.strokeStyle = "gray";
    this.ctx.font = "20pt Arial";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "center";
    this.ctx.fillText(`${text}%`, this.xc, this.yc);
  }


  getRadians(degree) {
    // переводим градусы в радианы
    return Math.PI / 180 * degree;
  }


  render() {
    return (
      <canvas id="progressCanvas" className="progress" ref={this.getCanvasRef} width="300" height="200"/>
    );
  }
}

/*
* рассчитывать процент выполненного при обновлении props в ProgressBar
* на canvas рисовать круговой прогресс бар в соотвествии с расчитанным значением процента выполненного,
* прогресс бар должен выглядеть как двойное кольцо,
* внешняя часть которого всегда заполнена (цвет #4ca89a),
* внутренняя заполняется по мере прочтения книги (цвет #96d6f4),
* толщина каждого кольца — 7 пикселей. Радиусы колец – 45 и 52 пикселя соотвественно.
* Пожалуйста, не удаляйте идентификатор progressCanvas и класс progress у canvas.
*/