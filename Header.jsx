import React from 'react'

const Header = () => {
  return (
    <div className='HeaderSection'>
        <div className='left'>
        <div className='title'>
            <h2>shopping mall</h2>
        </div>
            
        </div>
        <div className='center'>
            <ul>
                <li>women</li>
                <li>men</li>
                <li>childrean</li>
                <li>beauty</li>
            </ul>
        </div>
        <div className='search'>
            <input type="text" placeholder='search' />
        </div>
        <div className='right'>
            <div className='sign in'>
                signin/signup
            </div>
            <div className='cart'>
                cart
            </div>
        </div>
      
    </div>
  )
}

export default Header
