'use strict';

const isFunction = input => typeof input === 'function';
const renderIf = predicate => elemOrThunk =>
  predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;

const Stars = props => (
  <fragment>
    {renderIf(props.count)(
      <ul className="card-body-stars u-clearfix">
        {Array.from({length: Math.min(props.count, 5)}, (elem, index) =>
          <li key={index}><Star/></li>
        )}
      </ul>
    )
    }
  </fragment>
)


Stars.defaultProps = {
  count: 0,
};

