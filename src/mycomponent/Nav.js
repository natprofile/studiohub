import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Nav(){
   
    return(
        <aside class="sidebar">
            <div class="toggle">
              <a href="#" class="burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
                    <span></span>
                  </a>
            </div>
            <div class="side-inner">
            
              <div class="nav-menu">
                <ul>
                  <li><a href="#">Explore</a></li>
                  <li><a href="#">Notifications</a></li>
                  <li><a href="#">Direct</a></li>
                  <li><a href="#">Stats</a></li>
                  <li><a href="#">Sign out</a></li>
                </ul>
              </div>
            </div>
        </aside>
    );
}

export default Nav;