import { Search } from 'lucide-react'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div>
            <img src="/ecolive-logo.png" alt="ecolive-logo" />
        </div>
        <div>
            <div>
                <img src="/call.png" alt="phone" />
                <p className='font-bold'>1-800-234-123</p>
            </div>
            <div>
                <input type="text" />
                <Search />
            </div>
        </div>
        <div>
            <div>
                <img src="/profile.png" alt="" />
            </div>
            <div>
                <p>Hello</p>
                <p><span>Sign-In</span> or <span>Register</span></p>
            </div>
            <div>
                <img src="/heart.png" alt="" />
            </div>
            <div>
                <img src="/basket.png" alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default NavBar