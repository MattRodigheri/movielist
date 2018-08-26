class AddMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.props.inputVal}/>
        <button onClick={this.props.add}>Add</button>
      </div>
    )
  }
}

window.AddMovie = AddMovie;
