import myLogo from './logo.jpg';
export const Navigation = (props) => {
  return (

<nav id='menu' className='navbar navbar-default navbar-fixed-top'>
 <div id='seo'>
    <div className=''>
    <div className='row'>
      <div className='social'>
        <ul>
          <li>
            <a href={props.data ? props.data.instagram : '/'}>
              <i className='fa fa-instagram'></i>
            </a>
          </li>
          <li>
            <a href={props.data ? props.data.facebook : '/'}>
              <i className='fa fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href={props.data ? props.data.envelope : '/'}>
              <i className='fa fa-envelope' aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href={props.data ? props.data.youtube : '/'}>
              <i className='fa fa-youtube'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle x collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
        </div>
        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
        
          <a class="navbar-brand page-scroll" href="#page-top">
          <img className="nav navbar-nav logo" src={myLogo} alt="christina grillet logo" />
          </a>
            {/*
               <div className='circle'>hhh</div>
         */}
     
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
              Pratiques
              </a>
            </li>
            <li>
            <a href='#services' className='page-scroll'>
                Soins
              </a>
            </li>
            <li>
            <a href='#portfolio' className='page-scroll'>
                Galerie
              </a>
            </li>
             {/*
            <li>
              <a href='#about' className='page-scroll'>
                Cabinet
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Témoignages
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            */}
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
          </div>
        </div>
    </nav>
  )
}
