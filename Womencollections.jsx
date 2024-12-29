import React from 'react'

const Womencollections = (props) => {
    const{title, image1, image2, image3, image4, image5, image6} = props.LadiesFashion
  return (
    <div className='collectionSection'>

      <h2>LadiesFashion</h2>
       <div className="BannerBox">
         <img src='pics/girlbanner.avif'/>
       </div>
  

     <div className='menImages'>
        <img src={image1} alt={title}/>
        <img src={image2} alt={title}/>
        <img src={image3} alt={title}/>
        <img src={image4} alt={title}/>
        <img src={image5} alt={title}/>
        <img src={image6} alt={title}/>
      </div>
      
    </div>
  )
}

export default Womencollections
