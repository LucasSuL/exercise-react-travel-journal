import React from "react"
import './App.css'

import Nav from './components/Nav'
import Content from './components/Content'
import data from './data'

function App() {
    const content = data.map((item) => {
        return <Content
            key={item.id}
            {...item}
        />
    })

    return (
        <div className='App'>
            <Nav />
            {content}
        </div>
    );
}

export default App;