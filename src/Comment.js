import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) => 
    <li>
        {text}
        <span> votes: {votes}</span>
        <div className="buttons"> 
        	<button onClick={() => thumbUpComment(id)}>Thumb up</button>
        	<button onClick={() => thumbDownComment(id)}>Thumb down</button>
        </div>
    </li>;

export default Comment;


