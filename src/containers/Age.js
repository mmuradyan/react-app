import React, {useState, useEffect} from 'react'

function Age() {
    const [age, setAge] = useState(19);
    const handleClick = () => setAge(age + 1)

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(response => response.json())
            .then(data => {
                console.log('data', data)
                //setAge(data); // set users in state
            });
    }, []); // empty array because we only run once

    return(
        <div>
            I am {age} Years Old
            <div>
                <button onClick={handleClick}>Increase my age! </button>
            </div>
        </div>
    )
}

export default Age
