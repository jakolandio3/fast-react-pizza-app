import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { removeItem } from "./cartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(removeItem(id));
  }

  return (
    <Button type={"small"} onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteItem;
