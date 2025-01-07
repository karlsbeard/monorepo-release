import { useState } from "react";
import { atom, useAtom } from "jotai";

// const Component = ({ atom1, atom2 }) => {
//   const [selectedAtom, setSelectedAtom] = useState(atom1);
//   const [value] = useAtom(selectedAtom);
//   return (
//     <div>
//       Selected value: {value}
//       <button onClick={() => setSelectedAtom(atom1)}>Select an atom</button>
//       <button onClick={() => setSelectedAtom(atom2)}>
//         Select another atom
//       </button>
//     </div>
//   );
// };

const firstNameAtom = atom("John");
const lastNameAtom = atom('Doe');
const showingNameAtom = atom(firstNameAtom);


export const Component1 = () => {
    const [currentAtom, setCurrentAtom] = useState(() => atom(0));
    const [count, setCount] = useAtom(currentAtom);
    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <button onClick={() => setCurrentAtom(() => atom(0))}>
          Create new atom
        </button>
      </div>
    );
}

export const Component2 = () => {
  const [nameAtom, setNameAtom] = useAtom(showingNameAtom);
  const [name] = useAtom(nameAtom)

  return (
    <div>
      Name: {name}
      <button onClick={() => setNameAtom(firstNameAtom)}>
        Show first name
      </button>
      <button onClick={() => setNameAtom(lastNameAtom)}>
        Show Last Name
      </button>
    </div>
  )

}