
function SignIn(){
    return (
        <form style={{textAlign: "center", flexDirection: "row"}}>
            <h1>Enter Name</h1>
            <br/><br/><br/><br/>
            <input style={{width: "300px", height: "40px", borderWidth: "5px", borderRadius: "10px", border: "solid "}}
                   placeholder={"enter name..."} minLength={4}/>
            <br/><br/><br/><br/>
            <button style={{width: "100px", height: "30px", borderWidth: "3px", borderRadius: "5px"}}>submit</button>
        </form>
    );
}
export default SignIn;