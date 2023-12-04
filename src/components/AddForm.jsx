import React from 'react'
import "./AddForm.css"
const AddForm = () => {
    return (
        <div className='addForm'>
            <div className='h1'>
                <h1>Dada Redux <span className='p'>Note</span>Pad</h1>
            </div>
            <div className='addInput'>
                <input type='text' placeholder="Note Title" className='addInp' />
            </div>
            <div className='addText'>
                <textarea className='textarea' cols='30' rows='10' placeholder="Write Note..."></textarea>
            </div>
            <div className='colorSection'>
                <div className='color'>
                    <div className='pink'></div>
                    <div className='purple'></div>
                    <div className='blue'></div>
                    <div className='yellow'></div>
                    <div className='green'></div>
                </div>
                <div>
                    <button className='saveBtn'>Save ✓</button>
                </div>
            </div>
        </div>
    )
}

export default AddForm