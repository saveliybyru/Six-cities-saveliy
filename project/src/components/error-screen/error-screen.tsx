import Header from '../header/header';

function ErrorScreen(): JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <Header />
      <main style= {{textAlign: 'center'}} >
        <h1>404. Not Found</h1>
        <p><a href='/'>Go to main</a></p>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default ErrorScreen;
