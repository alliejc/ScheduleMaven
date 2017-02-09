import React from 'react';

// Todo: dynamically fill options with user pinterest boards

export default SubHeader = () =>(
    <div className=" row grey lighten-3 z-depth-1">
            <div className=" section input-field col s3">
                <select>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Chose a Pinterest Board</label>
            </div>
        <div className="section input-field col s3">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Paste URL http://</label>
        </div>
        </div>
);