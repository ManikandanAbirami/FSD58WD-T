import React from 'react'
import Header from './Header'
import "./ShowContacts.css"

function ShowContacts(props) {
    const deleteHandler = () => {
        alert("Delete button is clicked!!")
    }
    return (
        <div>
            <Header headerName="Show: Phone Contacts" />
            <div className='component-body-container'>
                <button className='custom-btn add-btn'>Add</button>
                <div className='grid-container heading-container'>
                    <span className='grid-item name-heading'>Name</span>
                    <span className='grid-item phone-heading'>Mob No</span>
                </div>
                {
                    props.contactList.map(contact => (
                        <div key={contact.id} className='grid-container'>
                            <span className='grid-item'>{contact.name}</span>
                            <span className='grid-item'>{contact.phone}</span>
                            <span className='grid-item'>
                                <button className='custom-btn delete-btn' onClick={deleteHandler}>Delete</button>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowContacts