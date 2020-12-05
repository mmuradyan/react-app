import React from 'react'

const Test = () => {
    const [draft, setDraft] = React.useState("")
    return (
        <div>
            <div>
                <input type="text" value={draft} />
                <button onClick={
                    function () {
                        setDraft("😍")
                    }
                }>😍</button>
            </div>
        </div>
    )
}

export default Test