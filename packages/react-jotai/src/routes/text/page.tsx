
import { atom, Provider, useAtom}  from 'jotai'

const textAtom = atom('hello')
const textLenAtom = atom((get) => get(textAtom).length)
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase())

const Input = () => {
    const [text, setText] = useAtom(textAtom)
    return (
        <input value={text} onChange={(e) => setText(e.target.value)} />
    )
}

const CharCount = () => {
    const [len] = useAtom(textLenAtom)
    return <div>Length: {len}</div>
}

const Uppercase = () => {
    const [uppercase] = useAtom(uppercaseAtom)
    return <div>Uppercase: {uppercase || 'silly boy'}</div>
}

export default function TextLength() {
    return (
       <Provider>
        <Input></Input>
        <CharCount></CharCount>
        <Uppercase></Uppercase>
       </Provider>
    )
}