import React from 'react'
import "./Products.scss"


 const data =[
    {
        id: 1,
        url: "../../../public/assets/products-card1.png",
        title: "Galaxy Z Fold6, 512gb (Unlocked) ",
        price: "From $1999"
    },
    {
        id: 2,
        url: "../../../public/assets/products-card2.png",
        title: "Galaxy Buds3 Pro ",
        price: "From $1999"
    },
    {
        id: 3,
        url: "../../../public/assets/products-card3.png",
        title: "Bespoke 5.3 cu. ft. All-in-One AI Laundry Combo Ultra Capacity Washer and Ventless Heat Pump Dryer ",
        price: "From $1999"
    },
    {
        id: 4,
        url: "../../../public/assets/products-card4.png",
        title: "Galaxy Z Flip6, 512GB (Unlocked) ",
        price: "From $1999"
    },
    {
        id: 5,
        url: "../../../public/assets/products-card5.png",
        title: "Jet 60 Pet Cordless Stick Vacuum ",
        price: "From $1999"
    },
    {
        id: 6,
        url: "../../../public/assets/products-card6.png",
        title: "65 'The Frame QLED 4K' ",
        price: "From $1999"
    },
 ]

const Products = ({subtitle, title, categories,}) => {
  return (
    <div className='container'>
        <div className="products">
            <p className="products__subtitle">
                {subtitle}
            </p>
            <p className="products__title">
                {title}
            </p>
            <ul className="products__collection">
                {
                    categories?.map((li, inx) => (
                <li key={inx} className="products__item">
                    <a href="#">
                        <span>
                            {li}
                        </span>
                    </a>
                </li>
                    ))
                }
            </ul>
            <div className="products__wrapper">
                {
                    data?.map((el)=> (
                        <div className="products__card">
                            <img className='products__img' src={el.url} alt="" />
                            <p className='products__desc'>
                                {el.title}
                            </p>
                            <p className="products__price">
                                {el.price}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products
