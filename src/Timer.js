import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);
    //constructor is where you declare default state. Will mount is for loaders
    this.state = {
      clock: 0
    };
    this.ticker = this.ticker.bind(this); //when you can't use onclick binding used in the constructor
  }
  ticker(){
    console.log(this.props.start)
    this.setState({
      clock: Math.round((new Date() - this.props.start)/1000)
    })
  }
  componentDidMount(){
    this.timer = setInterval(this.ticker,1000);
  }
  render() {
    console.log(this.props);
    return (
      <div className="Timer">

        <p onClick={()=>this.ticker()}>You have been on this site since:</p>
        <p className='time'>{this.state.clock}</p>
        <p>Seconds</p>
      </div>
    );
  }
}

export default Timer;
