import React, {useState} from 'react';
import './App.css';
import {Outlet} from 'react-router-dom';
import TopNavComponent from './components/top-nav/top-nav.component';

const App = (): JSX.Element => {
    const [text, setText] = useState('Hi!');

    const getText = async () => {
        await fetch('http://localhost:5500/')
            .then(data => data.json())
            .then(data => {
                setText(data.message);
            })
    }
    return (
        <div className="App">
            <div className="App-header">
                <TopNavComponent/>
                <h2>Welcome to Bonnie's apps</h2>
            </div>
            <Outlet />
            <p className="App-intro">
                {text}
            </p>
            <button onClick={getText} >Get text</button>

        </div>
    );
}

export default App;
