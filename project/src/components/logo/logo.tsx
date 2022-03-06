type Logo = {
  isActive: boolean
  }

function Logo({isActive}:Logo):JSX.Element {

  if (isActive){
    return (
      <a className='header__logo-link header__logo-link--active'>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </a> );
  }

  return  (
    <a className='header__logo-link' href='/'>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </a> );
}

export default Logo;
