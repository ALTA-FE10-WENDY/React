import React from 'react'

function Maptest() {
    const film = [
        { title: "John", image: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`, desc: "" },
        { title: "Bob", image: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png`, desc: "" },
        { title: "Mercy", image: `https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png`, desc: "" },
    ]
    return (
        <div className="flex flex-row w-4/5">
            {
                film.map((item) => {
                    return (
                        <div className=' pl-20 img-'>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={item.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default Maptest