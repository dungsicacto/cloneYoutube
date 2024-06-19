import React from 'react'

import './Home.css'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Feed from '../../Component/Feed/Feed'
const Home = () => {
    return (
        <div className='home__inner'>
            <Sidebar />
            <Feed />
        </div>
    )
}

export default Home