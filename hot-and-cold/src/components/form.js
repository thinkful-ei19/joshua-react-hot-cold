import React from 'react';
import './form.css';

export default function Form() {
    return (
        <div> 
             <form className="form"> 
                    <input type="text" value="Enter your Guess" />
                    <br />
                    <input type="button" value="Guess" />
                    <h2> Guess #0!</h2>
                </form>
        </div>
    );
}