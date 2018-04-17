import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpComment, thumbDownComment, editComment, removeComment } from './actions';

const mapDispatchToProps = dispatch => ({
  	thumbUpComment: id => dispatch(thumbUpComment(id)),
  	thumbDownComment: id => dispatch(thumbDownComment(id)),
    edit: id => {
        const content = prompt('Podaj nową treść:');
        dispatch(editComment(id, content)) 
    },
    remove: id => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);



