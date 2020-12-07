
export const setNotification = content => {
  return {
      type: 'NOTIFICATION',
      content: {
        label: content
      }
    }
}

const reducer = (state = { label: '' }, action) => {
  if (action.type === 'NOTIFICATION') {
    return action.content;
  } else {
    return state;
  }
}


export default reducer;
