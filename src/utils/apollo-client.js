import { useState, useEffect } from 'react'
import ApolloClient from 'apollo-boost';

import { useKeycloak } from '@react-keycloak/web'

export const useApollo = (baseURL) => {
    const [keycloak, initialized] = useKeycloak()
    const [client, setClient] = useState({});
    
    useEffect(() => {
        const instance = new ApolloClient({
            uri: baseURL,
            headers: { authorization: initialized ? `Bearer ${keycloak.token}` : "", }
        })
    
        setClient({ instance })
    
        return () => {
          setClient({})
        }
      }, [baseURL, initialized, keycloak, keycloak.token])

    return client.instance
};
