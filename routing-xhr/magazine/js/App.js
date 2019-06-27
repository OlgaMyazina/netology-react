"use strict";
const {Route, Switch, BrowserRouter} = ReactRouterDOM;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/react/routing-xhr/magazine/">
        <div>
          <Nav/>

          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/subscribtion" component={SubscribtionPage}/>
            <Route path="/article/:id" component={ArticlePage}/>
            <Route component={Homepage}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

