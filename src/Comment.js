import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, edit, remove}) => 
    <li>
        <span>{text}</span>
        <span>Votes: {votes}</span>
        <div> 
        	<button onClick={() => thumbUpComment(id)}>Thumb up</button>
        	<button onClick={() => thumbDownComment(id)}>Thumb down</button>
        	<button onClick={() => edit(id)}>Edit</button>
           	<button onClick={() => remove(id)}>Delete</button>
        </div>
    </li>;

export default Comment;


