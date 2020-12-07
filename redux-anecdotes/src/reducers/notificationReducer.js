
export const setNotification = content => {
  return {
      type: 'NOTIFICATION',
      content: {
        label: content
      }
    }
}

const initialState = { label: '' }

const reducer = (state = initialState, action) => {
  if (action.type === 'NOTIFICATION') {
    return action.content;
  } else {
    return state;
  }
}


export default reducer;
