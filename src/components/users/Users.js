import React, { useEffect, useState } from 'react'
import UsersCSS from './users.module.css'

export default function Users({ users }) {
  const [secondsVisible, setSecondsVisible] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsVisible(secondsVisible + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [secondsVisible])

  return (
    <div>
      <p>Componente visível por: {secondsVisible} segundo(s) </p>
      {users.map((user) => {
        const { login, name, picture } = user;
        return (
          <div className={UsersCSS.userContainer} key={login.uuid}>
              <img className={UsersCSS.imgContainer} src={picture.thumbnail}/>
              <span> {name.first} {name.last}</span>
          </div>
        )
      })}
    </div>
  )
}
