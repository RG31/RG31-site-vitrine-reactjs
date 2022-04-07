export const Seo = (props) => {
  return (
    <div id='seo'>
    <div className='col-md-12'>
    <div className='row'>
      <div className='social'>
        <ul>
          <li>
            <a href={props.data ? props.data.facebook : '/'}>
              <i className='fa fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href={props.data ? props.data.twitter : '/'}>
              <i className='fa fa-twitter'></i>
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
  )
}

