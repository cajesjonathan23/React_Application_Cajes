import { useState } from "react";

const BasicFormHandling = () => {

    const [firstname, setFirstName] = useState("Jonathan");
    const [lastname, setLastName] = useState("Cajes");
    const user = [firstname, lastname];
    const [userDetails, setUserDetails] = useState("");

    let showInformation = (e) =>{
        e.preventDefault();
        setUserDetails(user);
    }
    return ( 

        <>
            <div className="container mt-5">
                    <div className="card">
                        <div className="card-body">
                            <form action="" method="">
                                <label>First Name:</label>
                                <input className="form-control" type="text" id="firstName" value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                                <br></br>
                                <label>Last Name:</label>
                                <input className="form-control" type="text" id="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
                                <hr></hr>
                                <button className="btn btn-primary w-100" onClick={showInformation}>
                                    Submit Information
                                </button>
                                <label>Show Results</label>
                                <h3>{userDetails[0]}</h3>
                                <h3>{userDetails[1]}</h3>
                            </form>
                        </div>
                    </div>
            </div>
        </>
     );
}
 
export default BasicFormHandling;