"use client"
export default function Page(){
    function handleButtonClick(){
        var age = 1 + 12;
        alert(age)

        age = 45
        alert(age)

        age -= 20 * 2
        alert(age)
    }
    return (
        <div>
            <button onClick={handleButtonClick}>Click Me</button>
            <p>This will output the number of times the button was clicked </p>
        </div>
    )
}