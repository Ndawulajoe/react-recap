// Accessing props using prop
function Quote(prop){
    return (
        <div className="relative mt-4 border border-black w-auto">
            <h1>{prop.quote.text}</h1>
            <p>{prop.quote.author}</p>
        </div>
    )
}

// Accesiing props by destructuring
// function Quote({quote}){
//     return (
//         <div className="relative mt-4 border border-black w-auto">
//             <h1>{quote.text}</h1>
//             <p>{quote.author}</p>
//         </div>
//     )
// }

export default Quote