import React from 'react';

import './board.css';

import NavBar from './navbar';
import Form from './form';
import Header from './header';
import Results from './results';

export default class Board extends React.Component {
    render() {
        return (
            <section className="board"> 
                <NavBar />
                <div className="title">
                    <h1>HOT or COLD</h1>
                </div>
                <Header />
                <Form />
                <Results />
            </section>
        )
    }
}

