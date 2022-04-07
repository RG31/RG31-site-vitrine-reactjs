import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const datas = [
    {
        id: 1,
        img: "../img/intro/image-1.jpeg",
        title: "Nature",
    },
    {
        id: 2,
        img: "../img/intro/image-2.jpeg",
        title: "Indus",
    },
    {
        id: 3,
        img: "../img/intro/image-3.jpeg",
        title: "Abstrait",
    },
]
export const Slider = () => {
  return (
<div id='slider'>
    <h1 className='slider'> Les Nouveautés</h1>
    <Carousel autoPlay 
                interval={3000}
                infiniteLoop 
                thumbWidth={120} 
                showIndicators={false}
                showStatus={false}
                
    >
        {datas.map (slider => (
            <div key={slider.id}>  
                <img src={slider.img} alt="" />
                <div className="overlay">
                <h2 className='overlay_title'>{slider.title}</h2>
                </div>
            </div>
        ))}
    </Carousel>
</div>
  )
}

