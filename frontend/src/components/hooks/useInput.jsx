import { useState } from "react";

export function useInput(myInputs) {
    const [input, setInput] = useState(myInputs)

    function change(e) {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return {input, change}
}