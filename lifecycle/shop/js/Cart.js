class Cart extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    const {isOpen, items} = {...this.props},
      {newIsOpen, newItems} = {...nextProps};
    return isOpen !== newIsOpen || isOpen && (items.length !== newItems.length)
  }


  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
