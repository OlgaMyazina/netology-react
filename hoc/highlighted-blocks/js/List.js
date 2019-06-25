'use strict';

const List = props => {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        const VideoItem = withRating(Video, getRating(item.views));
        return (<VideoItem {...item}/>);

      case 'article':
        const ArticleItem = withRating(Article, getRating(item.views));
        return (
          <ArticleItem {...item} />
        );
    }
  });
};

const withRating = (Component, Rating) => {
  return class extends React.Component {
    render() {
      if (Rating) {
        return (
          <Rating><Component {...this.props}/></Rating>
        )
      }
      return <Component {...this.props}/>
    }
  }
};

const getRating = (views) => {
  if (views >= 1000) return Popular;
  if (views < 100) return New;
};


