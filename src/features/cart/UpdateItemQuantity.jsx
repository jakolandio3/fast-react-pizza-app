import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, quantity }) {
  const dispatch = useDispatch();

  function handleIncQuantity() {
    dispatch(increaseItemQuantity(id));
  }

  function handleDecQuantity() {
    dispatch(decreaseItemQuantity(id));
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type={"round"} onClick={handleDecQuantity}>
        -
      </Button>
      <span className="text-sm font-bold">{quantity}</span>
      <Button type={"round"} onClick={handleIncQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
