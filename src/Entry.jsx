import { useContext } from "react";
import { TodoContext } from "./Todo-context";

const Entry = (props) => {
  const { handleDelete } = useContext(TodoContext);
  return (
    <div >
      <li>
        {props.entry.description}{" "}
        <button onClick={() => handleDelete(props.entry.id)}>Delete</button>
      </li>
    </div>
  );
};
export default Entry;
