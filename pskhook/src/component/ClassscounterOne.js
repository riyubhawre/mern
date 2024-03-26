import React,{ Component } from 'react';

 class ClassscounterOne extends Component {
    constructor(props){
        super(props)
    this.state={
        count:0
    }
}
componentDidMount(){
    document.title=`clicked times ${this.state.count}`
}
componentDidUpdate(prevProps,prevState){
    document.title=`clicked times ${this.state.count}`
}
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({count:this.state.count+1})}>
        Click{this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassscounterOne;
