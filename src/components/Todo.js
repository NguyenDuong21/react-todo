import React from 'react'
function Todo(props) {
    const handelClick = () => {
        let id = props.id;
        props.onClick(id);
    }
    return (
        <div className="clear-fix" style={{backgroundColor:'#c1c1c1', padding:"8px", marginTop:'17px', fontWeight:'550'}}>
            {props.content}
            <button onClick={handelClick} className="btn" style={{fontSize:"10px", color:'white', backgroundColor:'red', float:'right'}}><i className="fas fa-trash-alt"></i></button>
        </div>
    )
}

export default Todo
