import React, { useEffect} from "react";

function Assessment(){

return (
    <div className="card-footer">
        <h2>Wanted to test your skills ?</h2>
        <button onClick={() => {window.location.href = "https://talentscope.work/product";}}>Try Me</button>
    </div>
)
}

export default Assessment;