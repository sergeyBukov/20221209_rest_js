import { useState } from 'react'
import { Form } from './components/classes/Form'
import { Form as FormFunc } from './components/func/Form'
import { Form as FormMessage } from './components/message/Form'

export function App() {
    const [toggle, setToggle] = useState(true)
    const [arr, setArr] = useState([{ name: 'Biba' }, { name: 'Boba' }, { name: 'Giga' }, { name: 'Goga' }])

    return (
        <>
            <Form />
            <hr />
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : 'show'}</button>
            {toggle && <FormFunc title='Function Component' />}
            <ul>
                {arr.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
            <hr />
            {toggle && <FormMessage title='Message Component' />}

        </>
    )
}

// export default App