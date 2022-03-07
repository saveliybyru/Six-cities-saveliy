import { Link } from 'react-router-dom';
import Header from '../header/header';


function ErrorScreen(): JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <Header />
      <main style= {{textAlign: 'center'}} >
        <h1>404. Not Found</h1>
        <p><Link to='/'>Go to main</Link></p>
      </main>
      <footer className="footer">
        <Link className="footer__logo-link" to="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default ErrorScreen;
