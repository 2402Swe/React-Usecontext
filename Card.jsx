import { useContext } from "react";
import { TotalContext } from "../Context/TotalContextProvider";


export const Cart = () => {

  const [total, setTotal] = useContext(TotalContext);

  return (
    <div className="cart-container">
      <div className="cart">
        <p> Total $ {total}</p>
        <button onClick={() => { setTotal(0) }}>Border</button>
      </div>
    </div>
  )
}