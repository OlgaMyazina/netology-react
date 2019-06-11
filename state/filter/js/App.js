'use strict'

/*
const App = props => (
  <div>
    <Toolbar
      filters={props.filters}
      selected={'All'}
      onSelectFilter={(filter) => console.log(filter)} />
    <Portfolio projects={props.projects} />
  </div>
);
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterState: 'All'
    }
  }

  getProjects = () => {
    if (this.state.filterState === 'All') return this.props.projects;
    return this.props.projects.filter((card) => card.category == this.state.filterState)
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.filterState}
          onSelectFilter={(filter) => this.setState({filterState: filter})}/>
        <Portfolio projects={this.getProjects()}/>
      </div>
    )
  }

}