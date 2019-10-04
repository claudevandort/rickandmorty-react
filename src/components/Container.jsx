import React from 'react'

const Container = ({ title, children }) => (
    <div className={`container #{title.toLowerCase()}`}>
        <h2>{ title }</h2>
        { children }
    </div>
)

export default Container