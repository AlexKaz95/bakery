import React from 'react'



class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            counter: 0
        }
    }
    componentDidMount () {  // called when component rendered in DOM (set timer)
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }

    componentWillUnmount () {
        clearInterval(this.timerID); // called when component deleted in DOM (delete timer)
    }

    tick () {
        this.setState({
            date: new Date()
        });
        this.setState((state)=>{
            return {counter: state.counter+1};
        })
    }

    render (props) {
        return (
            <div>
                <p>What's time is it? It's {this.state.date.toLocaleTimeString()}.</p>
                <p>You loose your life second's right now ({this.state.counter})</p>
            </div>
        )
    }
}

export default Clock