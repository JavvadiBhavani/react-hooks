const { createContext, useState } = require("react");

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [count, setCount] = useState(4);
  const [task, setTask] = useState();
  const [item, setitem] = useState([
    {
      id: 1,
      description: "Yoga"
    },
    {
      id: 2,
      description: "Workout"
    },
    {
      id: 3,
      description: "Assignments"
    },
    {
      id: 4,
      description: "Dance"
    },
    {
      id: 5,
      description: "Works"
    }
  ]);
  const handleAdd = (event) => {
    event.preventDefault();
    if (task === "") return;
    setCount(count + 1);
    setitem([...item, { id: count, description: task }]);
    setTask("");
  };
  const handleDelete = (id) => {
    setitem(item.filter((entry) => entry.id !== id));
  };
  return (
    <TodoContext.Provider
      value={{ item, task, setTask, handleAdd, handleDelete }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
