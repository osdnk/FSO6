const initialState = ''

export const setFilter = content => {
  return {
    type: 'CHANGE_FILTER',
    content
  }
}

const reducer = (store = initialState, action) => {
  if (action.type === 'CHANGE_FILTER') {
    store = action.content
  }

  return store
}

export default reducer
