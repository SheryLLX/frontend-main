import React, { useState, useContext } from 'react'

import BonusForm from './BonusForm/BonusForm'
import BonusList from './BonusList/BonusList'

import CartContext from '../../store/cart-context'

const Bonus = () => {

    const [status, setStatus] = useState(true);
    
    const cartCtx = useContext(CartContext);

    let content = (
        < BonusList bonus={cartCtx.bonus} />
    )

    if (cartCtx.error) {
        content = ( <p style={{fontWeight: 'bold'}}>Error to found bonus!!!</p>)
    }

    if (cartCtx.loading) {
        content = 'Loading bonus...';
    }

    const onHandlderStatus = () => {
        setStatus(!status);
    }

    const addNewBonus = (newBonus) => {
        cartCtx.addBonus(newBonus)
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <h2>Cuota</h2>
                <button
                    type="button"
                    class={`btn ${status ? "btn-danger" : "btn-primary"}`}
                    onClick={onHandlderStatus}
                >
                    {status ? '-' : '+'}
                </button>
            </div>
            {status && (
                <BonusForm users={cartCtx.users} addNewBonus={addNewBonus} />
            )}
            {content}

        </div>
    )
}

export default Bonus
