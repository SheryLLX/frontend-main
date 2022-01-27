import { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http'

import CartContext from './cart-context';

const CartProvider = (props) => {

  const [users, setUsers] = useState([])
  const [bonus, setBonus] = useState([])

  const fetchDataUsers = (users) => {
    setUsers(users)
  }

  const fetchDataBonus = (data) => {
    setBonus(data);
  }

  const addOneUser = (newUser) => {
    setUsers(prevUsers => {
      return [
        ...prevUsers,
        newUser
      ]
    })
  }

  const addOneBonusToList = (data) => {
    setBonus(prevBonus => {
      return [
        ...prevBonus,
        data
      ]
    })
  }

  const { isLoading, error, sendRequest: fetchData } = useHttp();

  useEffect(() => {

    fetchData(
      { url: '/user/getAllUsers' },
      fetchDataUsers
    )

    fetchData(
      { url: '/bonus/getAllBonus' },
      fetchDataBonus
    )

  }, [])

  const addNewUser = (newUser) => {
 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    fetchData(
      {
        url: '/user/createUser',
        method: 'POST',
        body: newUser,
        headers: myHeaders,
      },
      addOneUser
    )
  }

  const addNewBonus = (newBonus) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    fetchData(
      {
        url: '/bonus/createBonus',
        method: 'POST',
        headers: myHeaders,
        body: newBonus
      },
      addOneBonusToList
    )
  }

  const cartContext = {
    users: users,
    bonus : bonus,
    addUser: addNewUser,
    addBonus : addNewBonus,
    isLoading : isLoading, 
    error : error
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
