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
    );
}

export default Jobs;