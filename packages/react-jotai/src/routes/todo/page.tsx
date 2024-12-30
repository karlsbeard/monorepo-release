import { useEffect, type FormEvent } from "react";
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

const filterAtom = atom("all");
const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);

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

const add = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const title = e.currentTarget.inputTitle.value;
  e.currentTarget.inputTitle.value = "";
};

const TodoList = () => {
  const setTools = useSetAtom(todosAtom);
  const remove: RemoveFn = (todo) => {};
  const add = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <form onSubmit={add}>
      <Filter></Filter>
      <input name="inputTitle" placeholder="Type ..."></input>
      {/* <Filtered remove={remove}></Filtered> */}
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
