import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch();
  const timeout = useRef();
  useEffect(() => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => { dispatch(setNotification(''))
    }, 5000)
  }, [notification])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification.label === '') {
    return null
  }

  return (
    <div style={style}>
      {notification.label}
    </div>
  )
}

export default Notification
