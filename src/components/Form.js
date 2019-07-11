import React from 'react'

export default (props) => (
    <form onSubmit={props.getWeather}>
        <input type="text" name='city' placeholder='city...' />
        <input type="text" name='country' placeholder='country...' />
        <button>Get Weather</button>
    </form>
)