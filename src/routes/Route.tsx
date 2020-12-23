import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  logged?:boolean
}

const Route: React.FC<RouteProps> = ({
  logged,
  isPrivate = false,
  component: Component,

  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        // return isPrivate === !!user ? (
        //   <Component />
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: isPrivate ? '/' : '/dashboard',
        //       state: { from: location },
        //     }}
        //   />
        // );

        if(isPrivate && !!user){
          return <Component/>
        }

        if(isPrivate && !!!user){
          return <Redirect to={{pathname:'/signin'}}/>
        }

        if(!logged && !!user){
          return <Redirect to={{pathname:'/dashboard'}}/>
        }

        if(logged){
          return <Component/>
        }         


        return <Component/>

      }}
    />
  );
};

export default Route;