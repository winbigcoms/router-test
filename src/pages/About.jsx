// @flow
import React from 'react';
import queryString from "query-string"
import { Redirect } from 'react-router-dom';
export function About(props) {
  const {name} = queryString.parse(props.location.search);
  if(name === undefined) {
    return(
      <div>
        어바웃
      </div>
    )
  }
  if(name === 'redirect') {
    return <Redirect to="/"/>
  }
  return (
    <div>
      머바웃{name}
    </div>
  );
};