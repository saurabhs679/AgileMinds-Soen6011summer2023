import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CandidateList = ({ candidate,  haveedit, haveremove, userrole }) => {
  const [userRole, setUserRole] = useState("");

  useEffect(()=>{
    const userrole = sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole').toString() : '';
    setUserRole(userrole);
  },[])
    const handleedit = () => {
      console.log(userRole);
        if(userRole === "employer"){
        toast.success('Email notification has been sent to candidate')
        }
        else{
            toast.warning('You are not having access for Edit');
        }
    }

    const handleremove = () => {
        if(userRole === "employer"){
        toast.error('Rejected')
        }else{
            toast.warning('You are not having access for remove');
        }
    }
    return (
      <div className="card">
        
        <h5>{candidate.Name}</h5>
        <p><b>NAME</b>: {candidate.Name}</p>
        <p><b>EMAIL</b>: {candidate.email}</p>
        <p><b>AGE</b>: {candidate.age}</p>
        <p><b>GENDER</b>: {candidate.gender}</p>
        <p><b>CURRENT POSITION</b>: {candidate.currentPosition}</p>
        <p><b>SKILLS</b>: {candidate.skills}</p>
        <button onClick={handleedit} className="btn btn-primary btn-spaces">Invite</button> 
        <button onClick={handleremove} className="btn btn-danger">Reject</button>
      </div>
    );
  };

export default CandidateList;