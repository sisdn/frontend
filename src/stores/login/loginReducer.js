import config from 'config'
import { BEGIN_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, TOKEN_FAILURE, TOKEN_SUCCESS } from './actions'
var entityUpdateWorker = require('shared-worker!../../workers/entityUpdateWorker.js')
const entityWorker = new entityUpdateWorker()

export function loginReducer(state = {authenticated: false, pending: true}, action){
  switch (action.type) {
    case BEGIN_LOGIN:
      return Object.assign({}, state, {authenticated: false, pending: true})
    case LOGIN_SUCCESS:
      const user = parseToken()
      entityWorker.port.postMessage({username: user.username})
      entityWorker.port.postMessage({token: user.token})
      return Object.assign({}, state, user, { authenticated: true, pending: false})
    case LOGIN_FAILURE:
      return Object.assign({}, state, {authenticated: false, pending: false})
    case TOKEN_SUCCESS:
      entityWorker.port.postMessage({token: action.token})
      return Object.assign({}, state, {token: action.token})
    case TOKEN_FAILURE:
      entityWorker.port.postMessage({token: undefined})
      return Object.assign({}, state, {token: ''})
    default:
      return state
  }
}

function parseToken(){
  // //TODO this is not the way to go
  if(config.appEnv === 'dist') // || config.appEnv === 'dev')
    return {
      groups: global.keycloak.tokenParsed.groups.slice(),
      username: global.keycloak.tokenParsed.username,
      departments: global.keycloak.tokenParsed.departments.slice(),
      token: global.keycloak.token
  }
  else{
    global.keycloak = { token: 'TOKEN'}
    return{
      username: 'FAKE_USER',
      departments: ['math', 'bio'],
      token: '',
      groups: ['admin', 'dean', 'professor', 'report', 'admitter']
    }
  }
}
