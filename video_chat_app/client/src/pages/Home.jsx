import React from 'react'

const Home = () => {
    return (
        <div className="homepage-container">
            <div className='input-container'>
                <input type="email" name="email" id="email" placeholder='Enter your email here' />
                <input type="text" name="name" id="name" placeholder='Enter Room code' />
                <button>Join</button>
            </div>
        </div>
    )
}

export default Home;