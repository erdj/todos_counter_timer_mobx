import { useState } from "react"

export default function useCounter() {
    const [value, setValue] = useState(0)
    
    const increment = () => { setValue(prev => prev + 1) }
    const decrement = () => { setValue(prev => prev - 1) }
    
    return [
        increment, 
        decrement, 
        value
    ]
}