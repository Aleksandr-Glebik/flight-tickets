import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import '../../scss/app.scss'

const ErrorPage: React.FC = () => {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        return <p>{error.status} {error.statusText}</p>
    }

    return (
      <div className="wrapper">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{"Unknown Error"}</p>
      </div>
    );
}

export default ErrorPage