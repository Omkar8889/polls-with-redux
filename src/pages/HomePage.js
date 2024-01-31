import React from 'react'
import PollMenu from '../components/PollMenu'
import '../assets/styles/mainPage.css'
function HomePage() {
  return (
    <div className='main-page'>
      <img src="https://thumbs.dreamstime.com/b/finger-poll-finger-poll-icon-155550346.jpg" alt="polls_logo" />
      <PollMenu/>
    </div>
  )
}

export default HomePage
