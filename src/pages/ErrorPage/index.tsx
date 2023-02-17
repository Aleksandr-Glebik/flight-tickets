import React from 'react';
import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom';
import '../../scss/app.scss';
import styles from './ErrorPage.module.scss';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <p>
        {error.status} {error.statusText}
      </p>
    );
  }

  return (
    <div className="wrapper">
      <div className={styles.containerErrorPage}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{'Unknown Error'}</p>
        <div className={styles.linkReturn}>
          <Link to="/">
            <button className={styles.button}>ПЕРЕХОД НА СТАРТОВУЮ СТРАНИЦУ</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
