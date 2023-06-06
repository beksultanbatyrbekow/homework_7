import React, {Component} from "react";

class Example extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    console.log('Компонент определился в DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Компонент Обновился')
  }

  componentWillUnmount(){
    console.log('Компонент Удален')
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return(
        <div className="schet">
          <p>Счетчик: {this.state.count}</p>
          <button onClick={() => this.handleClick()}>Увеличить</button>
        </div>
    )
  }
}

export default Example;