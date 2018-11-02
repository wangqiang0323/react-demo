import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import paginate from './paginate'
import { combineReducers } from 'redux'
import RouteConfig from '../routeConfig'


// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, repos: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

const tabItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, {
        id: action.id,
        name: action.name
      }]
    default:
      return state
  }
}


const routeConfig = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ROUTE':
      return [...state, ...RouteConfig]
    default:
      return state
  }
}

const carouselImages = (state = [], action) => {
  switch (action.type) {
    case 'INIT_CAROUSEL':
      if (state.length === 0) {
        return [...state, '/image/tupuna-safari.jpg', '/image/mountain.jpg']
      } else {
        return state
      }
    default:
      return state
  }
}



// Updates the pagination data for different actions.
const pagination = combineReducers({
  starredByUser: paginate({
    mapActionToKey: action => action.login,
    types: [
      ActionTypes.STARRED_REQUEST,
      ActionTypes.STARRED_SUCCESS,
      ActionTypes.STARRED_FAILURE
    ]
  }),
  stargazersByRepo: paginate({
    mapActionToKey: action => action.fullName,
    types: [
      ActionTypes.STARGAZERS_REQUEST,
      ActionTypes.STARGAZERS_SUCCESS,
      ActionTypes.STARGAZERS_FAILURE
    ]
  })
})

const rootReducer = combineReducers({
  entities,
  pagination,
  errorMessage,
  routeConfig,
  tabItems,
  carouselImages
})

export default rootReducer
