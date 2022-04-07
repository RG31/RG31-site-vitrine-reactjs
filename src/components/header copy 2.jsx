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

export const Header = (props) => {
  return (
    <header id='header' className='text-center'>
      <div className='blanc'>  </div>
      <div className='header-color intro-text'> 
                <div>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                </div>
            <Carousel autoPlay 
                      interval={3000}
                      infiniteLoop 
                      thumbWidth={120} 
                      showIndicators={false}
                      showStatus={false}                     
            >
                {datas.map (slide => (
                    <div key={slide.id}>  
                        <img src={slide.img} alt="" />
                        <div className="overlay">
                        <h2 className='overlay_title'>{slide.title}</h2>
                        </div>
                    </div>
                ))}
            </Carousel>
          </div>
  </header>
  )
}
