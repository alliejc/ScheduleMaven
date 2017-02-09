import React from 'react';

// Todo: Replace card image, title, and description with info from Pinterest card

export default CardItem = () => (
<div>
<div className="row">
    <div className="col s4">
        <div className="card white">
            <div className="card-content black-text">
                <div className="row">
                <img className="responsive-img" src="/img/card_placeholder.jpg"/>
                <span className="card-title">Card Title</span>
                <p>Card description Card description Card description Card description Card description Card description
                    Card description Card description Card description Card description Card description Card description</p>
                </div>
                <div className="divider"></div>
            <div className="row">
                <div className="input-field section">
                    <select>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                    <label>Chose a Pinterest Board</label>
                </div>
            </div>
                <div className="row">
                    <div className="input-field">
                <input type="date" className="datepicker section"/>
                </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="time" className="fc-time"/>
                    </div>
                </div>
                <button className="btn waves-effect teal lighten-2" type="submit" name="action">Schedule
                    <i className="material-icons right">done</i>
                </button>
            </div>
        </div>
    </div>
</div>
</div>
);