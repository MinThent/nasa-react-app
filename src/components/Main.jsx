import React from 'react'

export default function Main(props) {
    const { data } = props

    return (
        <div>

            {data.media_type === "image" ? (
                <div className='imgContainer'>
                    <img src={data.hdurl} alt={data.title || 'bg-img'} className='cool-img' />
                </div>)
                : data.media_type === "video" ? (
                    <div className='videoWrapper'>
                        <iframe
                            src={data.url}
                            title={data.tile}
                            frameborder="0"
                            allow='accelerometer; autoplay'
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                ) : (<p>Unsupported media type</p>)

            }
        </div>
    )
}
