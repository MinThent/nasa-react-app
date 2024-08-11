import React from 'react'

export default function Sidebar(props) {
    const { children } = props
    return (

        <div className='sidebar'>
            <div className='bgOverlay'></div>
            <div className='sidebarContents'>
                <h2>
                    The Brutal HALO Guy
                </h2>
                <div>
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi rem, quibusdam, sapiente perferendis pariatur porro tempora laboriosam sunt molestias ea et eius maxime odit voluptatum, praesentium rerum exercitationem repudiandae ullam.</p>
                </div>
                <button>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
    )
}
