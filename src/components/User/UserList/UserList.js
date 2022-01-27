
import React from 'react'

const UserList = (props) => {

    const count = 1

    const renderedUserList = Object.values(props.users).map(item => {
        return (
            <tr key={item._id}>
                <th scope="row">{count}</th>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.deparment}</td>
            </tr>
        )
    });

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Equipos</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedUserList}
                </tbody>
            </table>
        </div>
    )
}

export default UserList
