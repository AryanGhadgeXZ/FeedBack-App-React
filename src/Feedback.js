import {useState, useRef} from "react";

function Feedback(){
    const rName = useRef();
    const [name,setName] = useState("");
    const [feedback,setFeedback]=useState("excellent");
    const [msg,setMsg] = useState("");

    const hName = (event) => {setName(event.target.value);}
    const hFeedback = (event) => {setFeedback(event.target.value);}

    const show = (event) => {
        event.preventDefault();

        if(name == ""){
            alert("U did not Enter Name");
            setMsg("");
            rName.current.focus();
            return;
        }

        let ans = "name = " + name + " Feedback = " + feedback;
        setMsg(ans);
    }

    return(
        <>
        <center>
            <h1>Feedback Please</h1>
            <form onSubmit = {show}>
                <input type="text" placeholder="Enter Your Name" onChange={hName} ref={rName}/>
                <br/><br/>
                <input type="radio" name="f" defaultChecked={true} value="excellent" onChange={hFeedback} /> Excellent
                <input type="radio" name="f" value="Superb" onChange={hFeedback} /> Superb
                <input type="radio" name="f" value="Good" onChange={hFeedback} /> Good
                <br/><br/>
                <input type="submit" class="btn"/>               
            </form>
            <h2>{msg}</h2>
        </center>
        </>
    );
}

export default Feedback;