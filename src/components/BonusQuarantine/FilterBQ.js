import React, { useState } from 'react'

const FilterBQ = () => {

    const [dateBegin, setDateBegin] = useState('')
    const [dateFinal, setDateFinal] = useState('')

    return (
        <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6 ">
                <label 
                    class="form-label" 
                    style={{ fontWeight :'bold'}}
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
                    style={{ fontWeight :'bold'}}
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
    )
}

export default FilterBQ;
