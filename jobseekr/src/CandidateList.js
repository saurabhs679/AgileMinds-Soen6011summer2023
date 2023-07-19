import { toast } from "react-toastify";

const CandidateList = ({ candidate,  haveedit, haveremove }) => {
    const handleedit = () => {
        if(haveedit){
        toast.success('edited')
        }
        else{
            toast.warning('You are not having access for Edit');
        }
    }

    const handleremove = () => {
        if(haveremove){
        toast.success('removed')
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
        <button onClick={handleedit} className="btn btn-primary">Edit</button> 
        <button onClick={handleremove} className="btn btn-danger">Remove</button>
      </div>
    );
  };

export default CandidateList;