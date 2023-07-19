import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Jobs = () => {
    const [joblist, jobupdate] = useState([]);
    const [jobedit, editchange] = useState(false);
    const [jobview, viewchange] = useState(false);
    const [jobadd, addchange] = useState(false);
    const [jobremove, removechange] = useState(false);

    const navigate=useNavigate();


    useEffect(() => {
        GetUserAccess();
        loadjob();
       
    }, []);

    const loadjob = () => {
        fetch("http://localhost:8000/jobs").then(res => {
            if (!res.ok) {
                return false
            }
            return res.json();
        }).then(res => {
            const username = sessionStorage.getItem('username') != null ? sessionStorage.getItem('username').toString() : '';
            res = res.filter((e)=>{
                return e.employer === username;
            })
            jobupdate(res)
        });
    }

    const GetUserAccess = () => {
        const userrole = sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole').toString() : '';
        fetch("http://localhost:8000/roleaccess?role=" + userrole + "&menu=jobs").then(res => {
            if (!res.ok) {
                navigate('/');
            toast.warning('You are not authorized to access');
                return false;
            }
            return res.json();
        }).then(res => {
            console.log(res);
            if (res.length > 0) {
                viewchange(true);
                let userobj = res[0];
                editchange(userobj.jobedit);
                addchange(userobj.jobadd);
                removechange(userobj.jobdelete);
            }else{
                navigate('/');
            toast.warning('You are not authorized to access');
            }
        })
    }

    const handleadd = () => {
        if(jobadd){
        toast.success('added')
        }else{
            toast.warning('You are not having access for add');
        }
    }
   
    const handleedit = () => {
        if(jobedit){
        toast.success('edited')
        }
        else{
            toast.warning('You are not having access for Edit');
        }
    }

    const handleremove = () => {
        if(jobremove){
        toast.success('removed')
        }else{
            toast.warning('You are not having access for remove');
        }
    }

    const handleViewCandidates = (id) => {
        navigate(`/viewappliedcandidates/${id}`);
    }

    const Job = ({ jobs }) => {
        return (
          <div className="card">
            <h5>{jobs.title}</h5>
            <p><b>ID</b>: {jobs.id}</p>
            <p><b>TITLE</b>: {jobs.title}</p>
            <p><b>SKILLS</b>: {jobs.skills}</p>
            <p><b>JOBTYPE</b>: {jobs.jobtype}</p>
            <p><b>SALARY Position</b>: {jobs.salary}</p>
            <button onClick={(e)=>{handleViewCandidates(jobs.id)}} className="btn btn-primary">View Candidates</button> 
            <button onClick={handleedit} className="btn btn-primary">Edit</button> 
            <button onClick={handleremove} className="btn btn-danger">Remove</button>
          </div>
        );
      };
      return (
      <div className="App">
      <h1>JOB LISTING</h1>
      <div className="card-container">
        {joblist.map(jobs => (
          <Job key={jobs.id} jobs={jobs} />
        ))}
      </div>
    </div>
  );
    /*
    return (
        
        
        <div className="container">

            <div className="card">
                <div className="card-header">
                    <h3>Job Listing</h3>
                </div>
                <div className="card-body">
                    
                    <br></br>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Skills</th>
                                <th>Jobtype</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {joblist &&
                                joblist.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.skills}</td>
                                        <td>{item.jobtype}</td>
                                        <td>{item.salary}</td>
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
        
       
        joblist.map(item => (
        
       <div className="card-container">
         <div className="card">
         <p>ID: {item.id}</p>
         <p>TITLE: {item.title}</p>
         <p>SKILLS: {item.skills}</p>
         <p>JOBTYPE: {item.jobtype}</p>
         <p>SALARY: {item.salary}</p>
         </div>
     </div>
        ))
        /*<div className="App">
            <h1>Candidate Information</h1>
            <div className="card-container">
                {candidatesData.map(candidate => (
                <CandidateCard key={candidate.candidateId} candidate={candidate} />
                ))}
            </div>
        </div>
          
    );
    */
}

export default Jobs;