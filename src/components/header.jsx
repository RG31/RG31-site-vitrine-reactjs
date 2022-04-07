export const Header = (props) => {
  return (
    <header id='header' className='text-center'>
      <div className='blanc'>   </div>
      <div className='header-color intro-text'> 
                <div>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                </div>

        <div className='row'>
          <div className='header-picture'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/intro/image-1.jpeg'
                    title=''
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>{props.data ? props.data.title1 : 'Loading'}</h4>
                    </div>
                    <img
                      src={props.data ? props.data.img1 : 'Loading'}
                      className='img-responsive'
                      alt=''
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/intro/image-2.jpeg'
                    title=''
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                    <h4>{props.data ? props.data.title2 : 'Loading'}</h4>
                    </div>
                    <img
                      src={props.data ? props.data.img2 : 'Loading'}
                      className='img-responsive'
                      alt=''
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/intro/image-3.jpeg'
                    title=''
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>{props.data ? props.data.title3 : 'Loading'}</h4>
                    </div>
                    <img
                      src={props.data ? props.data.img3 : 'Loading'}
                      className='img-responsive'
                      alt=''
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='blanc'>  </div>

  </header>
  )
}
