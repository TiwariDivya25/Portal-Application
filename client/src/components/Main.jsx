import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container text-light mt-5 bg-dark p-5 rounded text-center'>
            <h1>Welcome to the Portal App</h1>
            <p>This is a simple portal application built with Django and React.</p>
            <p>Explore the features and functionalities of this app.</p>
            <Button text='Get Started' class='btn-outline-info'/>
        </div>
    </>
  )
}

export default Main
