import React, {Component} from 'react';

class ClassCounterOne extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
        console.log("componenet Did mount executed.")
    }

    componentDidUpdate(preProps,preState){
        document.title = ` Clicked ${this.state.count} times`
        console.log("compoenet did update executed.")
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
                {console.log("dom executed")}
            </div>
        )
    }
}

export default ClassCounterOne;