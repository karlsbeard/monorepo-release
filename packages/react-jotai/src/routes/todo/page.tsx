import { useEffect, type FormEvent } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { a, useTransition } from "@react-spring/web";
import "./index.css";
import { atom, PrimitiveAtom, Provider, useAtom, useSetAtom } from "jotai";
import { Radio } from "antd";

type Todo = {
  title: string;
  completed: boolean;
};

type RemoveFn = (item: PrimitiveAtom<Todo>) => void;

type FilteredType = {
  remove: RemoveFn;
};
type TodoItemProps = {
  atom: PrimitiveAtom<Todo>;
  remove: RemoveFn;
};

const filterAtom = atom("all");
const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);
const filteredAtom = atom<PrimitiveAtom<Todo>[]>((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);
  if (filter === "all") {
    return todos;
  } else if (filter === "completed") {
    return todos.filter((atom) => get(atom).completed);
  } else {
    return todos.filter((atom) => !get(atom).completed);
  }
});

const TodoItem = ({ atom, remove }: TodoItemProps) => {
  const [item, setItem] = useAtom(atom);
  const toggleCompleted = () => {
    setItem((props) => ({ ...props, completed: !props.completed }));
  };

  return (
    <>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleCompleted}
      />
      <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
        {item.title}
      </span>
      <CloseOutlined onClick={() => remove(atom)} />
    </>
  );
};

const Filtered = (props: FilteredType) => {
  const [todos] = useAtom(filteredAtom);
  const transitions = useTransition(todos, {
    keys: (todo) => todo.toString(),
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 40 },
    leave: { opacity: 0, height: 0 },
  });

  return transitions((style, atom) => (
    <a.div className="item" style={style}>
      <TodoItem atom={atom} {...props}></TodoItem>
    </a.div>
  ));
};

const Filter = () => {
  const [filter, set] = useAtom(filterAtom);

  return (
    <Radio.Group onChange={(e) => set(e.target.value)} value={filter}>
      <Radio value={"all"}>All</Radio>
      <Radio value={"completed"}>completed</Radio>
      <Radio value={"incompleted"}>Incompleted</Radio>
    </Radio.Group>
  );
};


const TodoList = () => {
  const setTodos = useSetAtom(todosAtom);
  const remove: RemoveFn = (todo) => {
    setTodos((prev) => prev.filter((item) => item !== todo));
  };
  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.inputTitle.value;
    e.currentTarget.inputTitle.value = "";
    setTodos((prev) => [...prev, atom<Todo>({title, completed: false})])
  };

  return (
    <form onSubmit={add}>
      <Filter></Filter>
      <input name="inputTitle" placeholder="Type ..."></input>
      <Filtered remove={remove}></Filtered>
    </form>
  );
};

export default function Todo() {
  return (
    <Provider>
      <h1>Jōtai</h1>
      <TodoList></TodoList>
    </Provider>
  );
}
