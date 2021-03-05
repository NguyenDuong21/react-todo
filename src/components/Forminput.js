import React,{useState} from 'react'
function Forminput(props) {
    const [text, setText] = useState('');
    const handelChange = (e) => {
        setText(e.target.value)
    }
    const sendTodo = () => {
        let datasend = {
            data:text
        };
        props.onClick(datasend);
        setText('');
    }
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <input style={{marginRight:'10px'}} className="form-control" type="text" onChange={handelChange} value={text}/>
            <button className="btn" style={{fontSize:"10px", color:'white', backgroundColor:'#4A00E0'}} onClick={sendTodo}><i className="fas fa-plus"></i></button>
        </div>
    )
}

export default Forminput
