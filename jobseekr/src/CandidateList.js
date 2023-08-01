import { toast } from "react-toastify";

const CandidateList = ({ candidate,  haveedit, haveremove, onAccept, onReject, applicantStatus }) => {
  
  let value = applicantStatus
  if(applicantStatus !== ""){
    
    value = applicantStatus.filter(e =>{  return e[`${candidate.user_id}`]})[0]
    if(value !== undefined){
      console.log(value)
      value = Object.values(value)[0]
      console.log(value)
    }
    
  }
const handleedit = () => {
        if(haveedit){
          onAccept(candidate.user_id)
        toast.success('Email notification has been sent to candidate')
        }
        else{
            toast.warning('You are not having access for Edit');
        }
    }

    const handleremove = () => {
        if(haveremove){
          onReject(candidate.user_id)
        toast.error('Rejected')
        }else{
            toast.warning('You are not having access for remove');
        }
    }

    let buttons = <>
    <button onClick={handleedit} className="btn btn-primary btn-spaces">Invite</button>
    <button onClick={handleremove} className="btn btn-danger">Reject</button>
    </> 
    if(value === 1){
      buttons = <button className="btn btn-primary btn-spaces">Invite</button>
    }
    if(value === 2){
      buttons = <button className="btn btn-danger">Already rejected</button> 
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
        {buttons} 
      </div>
    );
  };

export default CandidateList;