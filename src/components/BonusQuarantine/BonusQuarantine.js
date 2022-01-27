import React, { useContext } from 'react'

//import components
import TableBQ from './TableBQ';

import CartContext from '../../store/cart-context'

const BonusQuarantine = () => {

    const cartCtx = useContext(CartContext);

    let content = (
        < TableBQ bonus={cartCtx.bonus} />
    )

    if (cartCtx.error) {
        content = ( <p style={{fontWeight: 'bold'}}>Error to found bonus filter!!!</p>)
    }

    if (cartCtx.loading) {
        content = 'Loading bonus filter...';
    }

    return (
        <div style={{ marginTop: 40 }}>
            <h2>Cuota Total</h2>
            {content}
        </div>
    )
}

export default BonusQuarantine
