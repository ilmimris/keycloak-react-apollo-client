![React Keycloak](https://github.com/react-keycloak/react-keycloak-examples/raw/master/art/react-keycloak-logo.png?raw=true?raw=true 'React Keycloak Logo')
# Keycloak React Apollo Client

> Examples for [@react-keycloak](https://github.com/panz3r/react-keycloak) packages that using [react-router-dom](https://www.npmjs.com/package/react-router-dom) 
and send GraphQL request using [Apollo Client](https://www.npmjs.com/package/apollo-boost)


[![License](https://img.shields.io/github/license/react-keycloak/react-keycloak-examples.svg)](https://github.com/react-keycloak/react-keycloak-examples/blob/master/LICENSE.md)
[![Github Issues](https://img.shields.io/github/issues/react-keycloak/react-keycloak-examples.svg)](https://github.com/react-keycloak/react-keycloak-examples/issues)

---

## Examples Configuration

Keycloak Client `frontend` Configuration:
```
- Access Type : Public
- Standard Flow ON
- Implicit Flow OFF
- Direct Access Grant ON
- Root URL : empty
- Valid Redirect URL : *
- Base URL : empty 
- Admin URL : empty
- Web Origins : *
```

Keycloak Client `backend` Configuration:
```
- Access Type : Confidential
- Standard Flow ON
- Implicit Flow OFF
- Direct Access Grant ON
- Service Accounts Enabled ON
- Authorization Enabled ON
- Root URL : empty
- Valid Redirect URL : *
- Base URL : empty 
- Admin URL : empty
- Web Origins : *
```

Keycloak audience mapper setting:
1. Create new `audience` at `Client Scope` menu
2. Go to tab `mappers`
3. Create new mapper for `frontend` as following:
```
...
Mapper Type : Audience
Included Client Audience : Frontend
...
```
4. Repeat step 3, change `frontend` to `backend` client
5. Save this client scope
6. Add this client scope into default client scopes for each `frontend` and `backend` at tab `Client Scopes`


**Note:** The demo apps are not meant to be **production-ready** nor **starter-kit**s but just a way to show this module components and their usage.

---
