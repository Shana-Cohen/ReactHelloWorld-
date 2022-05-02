import React from 'react';

class PersonForm extends React.Component {
    render() {
        const { firstName, lastName, weight, onChangeFirstName, onChangeLastName, onChangeWeight, onAddClick, onClearClick } = this.props
        
        return (
            <div className='row mt-5'>
                <div className='col-md-3 md-offset-2'>
                    <input value={firstName} onChange={onChangeFirstName} className='form-control' placeholder='Enter First Name' />
                </div>
                <div className='col-md-3 md-offset-2'>
                    <input value={lastName} onChange={onChangeLastName} className='form-control' placeholder='Enter Last Name' />
                </div>
                <div className='col-md-2 md-offset-2'>
                    <input value={weight} onChange={onChangeWeight} className='form-control' placeholder='Enter Weight' />
                </div>
                <div className='col-md-2'>
                    <button onClick={onAddClick} className='btn btn-primary btn-block'>Add</button>
                </div>
                <div className='col-md-2'>
                    <button onClick={onClearClick} className='btn btn-info btn-block'>Clear All</button>
                </div>
            </div>
            )
    }
}
export default PersonForm;