import React, { useCallback } from 'react'

import { useKeycloak } from '@react-keycloak/web'

import { useAxios } from '../utils/hooks'

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const HELLO = gql`{hello}`;

export default () => {
  const { keycloak } = useKeycloak()
  const axiosInstance = useAxios('http://localhost:5000') // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  
  const callApi = useCallback(() => {
    axiosInstance.get('/jwt/decode')
  }, [axiosInstance])

  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.debug({data})

  return (
    <div>
      <h1>{`${data.hello}`}</h1>
      <div>User is {!keycloak.authenticated ? 'NOT ' : ''} authenticated</div>

      {!!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}

      <button type="button" onClick={callApi}>
        Call API
      </button>
    </div>
  )
}