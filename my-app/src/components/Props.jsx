import React, { Component } from 'react'

export class Proptest extends Component {

    state = {
        value: 1,
        color: "bg-orange-500",
    }

    decrementValue() {
        this.setState({ value: this.state.value - 1 })

    }

    incrementValue() {
        this.setState({ value: this.state.value + 1 })

    }

    resetValue() {
        this.setState({ value: 1 })

    }

    render() {
        return (
            <>
                <div className='flex'>
                    <div className={`w-[${this.state.value}%]  h-20 text-white flex items-center justify-center text-3xl ${this.state.color}`}>
                        <p className=''>{this.state.value}</p>
                    </div>
                </div>
                <div className='btn btn-primary w-[40%]' onClick={() => this.decrementValue()}>decrement</div>
                <div className='btn btn-primary w-[20%]' onClick={() => this.resetValue()}>reset</div>
                <div className='btn btn-primary w-[40%]' onClick={() => this.incrementValue()}>increment</div>
                {/* <div className='btn btn-primary w-1/2' onClick={() => this.setState({ value: `reds` })} >increment</div> */}
            </>
        )
    }
}

export default Proptest