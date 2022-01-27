import React, { useState } from 'react'


import Button from '../../UI/Button'
const UserForm = ( props ) => {

    const options = [
        { value: '1' , label : 'Equipo Celular'},
        { value: '2' , label : 'Laptop'},
        { value: '3' , label : 'Equipo Informatico'},
    ]

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [department, setDepartment] = useState('')

    const onHandlerSubmit = (event) => {
        event.preventDefault();
        
        props.addNewUser( {
            'firstname' : firstname,
            'lastname' : lastname,
            'deparment' : department
        })

        setFirstName('');
        setLastName('');
        setDepartment('');
    }

    const selectChooseOption = Object.values(options).map( item => {
        return (
            <option value={item.label}>{item.label}</option>
        )
    })

    return (
        <div>
            <form onSubmit={onHandlerSubmit}>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Firstname</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={firstname}
                        onChange={({ target: { value } }) => setFirstName(value)}
                    />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Lastname</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={lastname}
                        onChange={({ target: { value } }) => setLastName(value)}
                    />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Equipos</label>
                    <select 
                        className="form-control" 
                        value={department} onChange={({ target: { value } }) => setDepartment(value) }>
                            <option value="" >...</option>
                            {selectChooseOption}
                    </select>
                </div>
                
                <Button
                    type="submit"
                >
                    Save
                </Button>
            </form>

        </div>
    )
}

export default UserForm;
