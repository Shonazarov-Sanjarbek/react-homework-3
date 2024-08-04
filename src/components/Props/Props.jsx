import React from 'react'
import "./Props.scss"

const Props = ({subtitle, categories, img}) => {
  return ( 
    <div className='container'>
        <div style={{background: `url('${img}')`
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
            
            {/* <img className='props__img' src={img} alt="" /> */}
        </div>
    </div>
  )
}

export default Props
