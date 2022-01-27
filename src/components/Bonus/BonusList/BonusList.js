import React from 'react'

const DeparmentList = (props) => {

    const count = 1

    const rederedBonus = Object.values(props.bonus).map(item => {
        return (
            <tr key={item._id}>
                <th scope="row">{count}</th>
                <td>{item._idUser.deparment}</td>
                <td>{item.date}</td>
                <td>{item.bonus}</td>
                <td>{item.reason}</td>
                <td>{item._idUser.firstname}</td>
            </tr>
        )
    })


    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Equipos</th>
                        <th scope="col">Date</th>
                        <th scope="col">Cuota</th>
                        <th scope="col">Razon</th>
                        <th scope="col">First</th>
                    </tr>
                </thead>
                <tbody>
                    {rederedBonus}
                </tbody>
            </table>
        </div>
    )
}

export default DeparmentList;