import { useSelector } from "react-redux";

function Cart(){
  let cart = useSelector((state) => state.items);

  return (
    <div>
      <ul>
        {
          Object.values(cart).map(getCartList)
        }
      </ul>
    </div>
  )

}
function getCartList(item){
  return ( <li key={item.id}> {item.title} </li>)
}
export default Cart;