import React from 'react'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import {Container} from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import './Screens/HomeScreen/app.scss'

export default function App() {
  return (
    <div>
        <Header />
        <div className="app_container">
          <Sidebar />
          <Container fluid className='app_main'>
            <HomeScreen />
          </Container>
        </div>
    </div>
  )
}
