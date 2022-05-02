import React from 'react'
import ReactDOM from 'react-dom'

export default function Graphics() {

    const graphics = [
        './graphics/graphic1.png',
        './graphics/graphic2.png',
        './graphics/graphic3.png',
        './graphics/graphic4.png',
        './graphics/graphic8.png',,
        './graphics/graphic6.png',
        './graphics/graphic7.png',
        './graphics/graphic5.png',
        './graphics/graphic9.png',
    ]

    const graphicsMap = graphics.map(graphic => <img src={graphic}></img>)


    return (
        <div className='graphicsGallery'>
            <div className='graphicsContainer'>
                {graphicsMap}
            </div>
        </div>
    )
}