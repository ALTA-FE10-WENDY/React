import React, { Component } from 'react'
import { AiFillStar } from "react-icons/ai";

export class Card extends Component {
    render() {
        return (
            <div className="card card-compact w-full bg-base-200 shadow-xl">
                <figure className='h-1/2 h-max-[200px] object-scale-down'><img src={this.props.image} alt="imageee" className='object-scale-down' /></figure>
                <div className="card-body">
                    <p className="card-title text-base truncate h-1/4">{this.props.title}</p>
                    <p className='truncate h-1/4'>{this.props.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">
                            <AiFillStar /><p className='text-sm font-semibold'>Favorite</p>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card