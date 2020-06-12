import React from 'react'
import { HashRouter as Router, Redirect, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks';
import { useKeycloak } from '@react-keycloak/web'

import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import { PrivateRoute } from './utils'
import { useApollo } from '../utils/apollo-client'

export const AppRouter = () => {
  const [keycloak, initialized] = useKeycloak()
  const client = useApollo('https://gtw.flowqount.com/graphql');

  if (!initialized) {
    (keycloak.token) && localStorage.setItem('token',keycloak.token)
    return <div>Loading...</div>
  }

  return (
    <Router>
      <ApolloProvider client={client}>
        <Redirect from="/" to="/home" />
        <PrivateRoute path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </ApolloProvider>
    </Router>
  )
}