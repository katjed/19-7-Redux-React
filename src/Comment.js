import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, edit, remove}) => 
    <li>
        {text}
        <span> votes: {votes}</span>
        <div className="buttons"> 
        	<button onClick={() => thumbUpComment(id)}>Thumb up</button>
        	<button onClick={() => thumbDownComment(id)}>Thumb down</button>
            <button onClick={() => edit(id)}>Edit</button>
            <button onClick={() => remove(id)}>Delete</button>
        </div>
    </li>;

export default Comment;


