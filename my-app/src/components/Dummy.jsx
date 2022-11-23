import React, { Component } from 'react'

export class Dummy extends Component {

    state = {
        data: [],
    }

    getName() {
        let dummy = [
            { id: 1, name: "abcd" },
            { id: 2, name: "efgh" },
            { id: 3, name: "ijkl" }
        ]
        this.setState({ data: dummy });
    }

    componentDidMount() {
        this.getName()
    }

    render() {
        const result = this.state.data;
        return (
            <div className="">
                {
                    result.map((item) => {
                        return (
                            <>
                                <div className=''>
                                    {item.id}
                                </div>
                                <div className=''>
                                    {item.name}
                                </div>
                            </>
                        )
                    }
                    )
                }
            </div>
        )
    }
}

export default Dummy