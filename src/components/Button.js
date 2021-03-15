import {useState} from 'react'

function Button() {
    const [value,setValue] = useState("click")
    const handleClick = () => {
        setValue('Click 2')
    }
    return (
        <div>
            <button onClick={handleClick} title="buttonTest">{value}</button>
        </div>
    )
}

export default Button
