import React, { useState } from 'react'
import Header from './Header'
import "./AddContacts.css"

function AddContacts() {
    const [name, setName] = useState(''); //hooks in react
    const [phone, setPhone] = useState('');
    const inputChangeHandler = (e) => {
        // console.log("Target:", e.target.name);
        // console.log("Value:", e.target.value);
        if (e.target.name == "name") {
            setName(e.target.value);
        } else if (e.target.name == "phone") {
            setPhone(e.target.value);
        }
    }
    return (
        <div>
            <Header headerName="Add: Phone Contacts" />
            <div className='component-body-container'>
                <button className='custom-btn'>Back</button>
                <form action="" className='add-form'>
                    <label htmlFor="name" className='label-control'>Name:</label><br />
                    <input type="text" id='name' className='input-control' name="name" onChange={inputChangeHandler} /><br /><br />
                    <label htmlFor="phone" className='label-control'>Mob No:</label><br />
                    <input type="text" id='phone' className='input-control' name="phone" onChange={inputChangeHandler} /><br /><br />
                    <div className='add-info-container'>
                        <span className='add-to-add-heading'>Contacts to be added:</span><br />
                        <span className='add-info'>Name:{name}</span><br />
                        <span className='add-info'>Mob No:{phone}</span><br />
                    </div>
                    <button type='submit' className='custom-btn add-btn'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddContacts