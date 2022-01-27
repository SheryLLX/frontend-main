import React, { useState , useReducer } from 'react'
import FilterBQ from './FilterBQ';

const TableBQ = (props) => {

    let count = 1

    const [dateBegin, setDateBegin] = useState('')
    const [dateFinal, setDateFinal] = useState('')
    const [cost, setCost] = useState(0)

    /*
    const costCalculator = ( data ) =>{
        var costCalculatorVariable = 0
        Object.values(data).forEach( item => {
            costCalculatorVariable += item.bonus;
        })
        console.log(costCalculatorVariable)
        setCost(0)
    }
    */

    const filterData = () => {
        if (dateBegin == '') {
            return props.bonus
        }
        if (dateBegin.trim().length > 0) {
            const newFilter = Object.values(props.bonus).filter(item => {
                if (dateFinal.trim().length > 0 || dateFinal != '') {
                    return item.date >= dateBegin && item.date <= dateFinal
                }
                return item.date.includes(dateBegin)
            });

            return newFilter;
        }
        return props.bonus
    }

    const costTotal = () => {
        const tempoResult = Object.values(filterData())
        var total = tempoResult.reduce((sum , value) => ( sum + value.bonus ) , 0 )
        return total ;
    }
    
    const renderedBonus = Object.values(filterData()).map(item => {
        return (
            <tr>
                <th scope="row">{count}</th>
                <td>{item._idUser.firstname}</td>
                <td>{item._idUser.lastname}</td>
                <td>{item._idUser.deparment}</td>
                <td>{item.date}</td>
                <td>{item.bonus}</td>
                <td>{item.reason}</td>
            </tr>
        )
    })

    return (
        <>
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-6 ">
                    <label
                        class="form-label"
                        style={{ fontWeight: 'bold' }}
                    >
                        Date Begin </label>
                    <input
                        type="date"
                        class="form-control"
                        value={dateBegin}
                        onChange={({ target: { value } }) => setDateBegin(value)}
                    />
                </div>
                <div className="col-6 ">
                    <label
                        class="form-label"
                        style={{ fontWeight: 'bold' }}
                    >
                        Date Final
                    </label>
                    <input
                        type="date"
                        class="form-control"
                        value={dateFinal}
                        onChange={({ target: { value } }) => setDateFinal(value)}
                    />
                </div>
            </div>

            <div style={{ marginTop: 20 }}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Equipos</th>
                            <th scope="col">Date</th>
                            <th scope="col">Cuota</th>
                            <th scope="col">Razon</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderedBonus}
                        <tr>
                            <th scope="row"></th>
                            <td style={{
                                fontWeight: 'bold'
                            }}>
                                Total
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>{costTotal()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableBQ;