import React, { Component } from 'react'
import { AiFillStar } from "react-icons/ai";

export class Card extends Component {
    render() {
        return (
            <div className="card card-compact w-full bg-base-200 shadow-xl">
                <figure className='object-scale-down  relative'>
                    <img src={this.props.image} alt="imageee" className='object-scale-down hover:opacity-30' />
                    <button className={`btn btn-primary w-4/5 opacity-0 hover:opacity-100 absolute`}>
                        <AiFillStar /><p className='text-sm font-semibold'>Favorite</p>
                    </button>
                </figure>
                <div className="card-body">
                    <p className="card-title text-base truncate ">{this.props.title}</p>
                    <p className='truncate '>{this.props.description}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">
                            <AiFillStar /><p className='text-sm font-semibold'>Favorite</p>
                        </button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Card

