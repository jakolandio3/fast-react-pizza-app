import { Link } from "react-router-dom";
import LinkButton from "../ui/LinkButton";
import Button from "../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.username);
  const cart = useSelector(getCart);

  function handleClearCart() {
    if (cart.length < 1) return;
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3 ">
      <LinkButton to={"/menu"}> &larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart,{user}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b ">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to={"/order/new"} type={"primary"}>
          Order pizzas
        </Button>

        <Button type={"secondary"} onClick={handleClearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
