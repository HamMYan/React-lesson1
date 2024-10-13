import { useState } from "react"

function LessText({ max=55, text }) {
    const [showLess, setShowLess] = useState(true)

    if (text.length <= max) {
        return <span>{text}</span>
    }

    return (
        <span>
            {showLess ? `${text.substring(0, max)}  ... ` : text}
            <a href="#" onClick={(evt) => {
                evt.preventDefault()
                setShowLess(!showLess)
            }}> {showLess ? "more" : "less"}</a>
        </span>
    )
}

export default LessText