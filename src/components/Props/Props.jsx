import React from 'react'
import "./Props.scss"

const Props = ({subtitle, categories, img, title, desc, btn, cl}) => {
  return ( 
    <div className='container'>
        <div style={{background: `url('${img}')`, backgroundSize: "cover", color: cl, backgroundPosition: "center", backgroundRepeat: "no-repeat"
}} className="props">
            <p className="props__subtitle">
                {subtitle}
            </p>
            <ul className="props__collection">
                {
                    categories?.map((el, inx) => (
                <li key={inx} className="props__item">
                    <a href="#">
                        <span>
                            {el}
                        </span>
                    </a>
                </li>
                    ))
                }
            </ul>
            <p className="props__title">
                {title}
            </p>
            <p className="props__desc">
                {desc}
                {/* Get up $650 instant trade-in credit and double the storage on us with select colors */}
            </p>
            <div className="props__btn">
                <button>
                    <span>
                        {btn}
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Props
