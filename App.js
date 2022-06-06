import React from "react"
import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke 
            punchLine = "Why did Adele cross the road? To say hello from the other side."
            />
            <hr />
            <Joke 
            question="What's the best thing about Switzerland?" 
            punchLine="I don't know, but the flag is a big plus!"/>
            <hr />
            <Joke 
            question="I invented a new word!" 
            punchLine="Plagiarism!"/>
            <hr />
            <Joke 
            question="Did you hear about the mathematician who’s afraid of negative numbers?"       punchLine="He’ll stop at nothing to avoid them."
            />
            <hr />
            <Joke 
            question="Helvetica and Times New Roman walk into a bar." 
            punchLine="“Get out of here!” shouts the bartender. “We don’t serve your type.”"
            />
            <hr />
            <Joke 
            question="Hear about the new restaurant called Karma?" 
            punchLine="There’s no menu: You get what you deserve."
            />
        </div> 
        
    )
}

export default App