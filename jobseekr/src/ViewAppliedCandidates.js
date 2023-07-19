import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CandidateList from "./CandidateList";

const ViewAppliedCandidates = () => {
     let { id } = useParams();
    const [candlist, candupdate] = useState([]);
    const [haveedit, editchange] = useState(false);
    const [haveview, viewchange] = useState(false);
    const [haveadd, addchange] = useState(false);
    const [haveremove, removechange] = useState(false);

    const navigate=useNavigate();


    useEffect(() => {
       // GetUserAccess();
        loadcandidate();
    }, []);

    const loadcandidate = () => {
        fetch("http://localhost:8000/Candidates").then(res => {
            if (!res.ok) {
                return false
            }
            return res.json();
        }).then(res => {
            id = parseInt(id);
            res = res.filter((data)=>{
                return data.jobsApplied.includes(id);
            })
            console.log("aaa",res,id);
            candupdate(res)
        });
    }

    const GetUserAccess = () => {
        const userrole = sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole').toString() : '';
        fetch("http://localhost:8000/roleaccess?role=" + userrole + "&menu=Candidates").then(res => {
            // if (!res.ok) {
            //     navigate('/');
            // toast.warning('You are not authorized to access');
            //     return false;
            // }
            return res.json();
        }).then(res => {
            console.log(res);
            if (res.length > 0) {
                viewchange(true);
                let userobj = res[0];
                editchange(userobj.haveedit);
                addchange(userobj.haveadd);
                removechange(userobj.havedelete);
            }else{
                navigate('/');
            toast.warning('You are not authorized to access');
            }
        })
    }

    const handleadd = () => {
        if(haveadd){
        toast.success('added')
        }else{
            toast.warning('You are not having access for add');
        }
    }
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


    // const Candidate = ({ candidate }) => {
    //     return (
    //       <div className="card">
            
    //         <h5>{candidate.Name}</h5>
    //         <p><b>NAME</b>: {candidate.Name}</p>
    //         <p><b>EMAIL</b>: {candidate.email}</p>
    //         <p><b>AGE</b>: {candidate.age}</p>
    //         <p><b>GENDER</b>: {candidate.gender}</p>
    //         <p><b>CURRENT POSITION</b>: {candidate.currentPosition}</p>
    //         <p><b>SKILLS</b>: {candidate.skills}</p>
    //         <button onClick={handleedit} className="btn btn-primary">Edit</button> 
    //         <button onClick={handleremove} className="btn btn-danger">Remove</button>
    //       </div>
    //     );
    //   };
      return (
      <div className="App">
      <h1>CANDIDATE LISTING</h1>
      <div className="card-container">
          
          {candlist.map(candidate => (
          <CandidateList key={candidate.id} candidate={candidate} haveedit={haveedit} haveremove={haveremove}/>
        ))}
          
          
        
      </div>
    </div>
  );

    /*
    return (
        <div className="container">

            <div className="card">
                <div className="card-header">
                    <h3>Candidate Listing</h3>
                </div>
                <div className="card-body">
                    
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {candlist &&
                                candlist.map(item => (
                                    <tr key={item.code}>
                                        <td>{item.code}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button onClick={handleedit} className="btn btn-primary">Edit</button> |
                                            <button onClick={handleremove} className="btn btn-danger">Remove</button>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
    */
}

export default ViewAppliedCandidates;