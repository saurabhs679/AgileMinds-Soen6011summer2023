import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Addjobs = () => {

    const [title, titlechange] = useState("");
    const [skills, skillschange] = useState("");
    const [jobtype, jobtypechange] = useState("");
    const [salary, salarychange] = useState("");
    const [applicationdeadline, applicationdeadlinechange] = useState("");
    const [applicants, applicantschange] = useState("");
    const [positionsavailable, positionsavailablechange] = useState("");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        /* let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }
        */
        if(!isproceed){
            toast.warning("error")
        }
        return isproceed;
    }

    //const deadline = new Date(job.deadline).toLocaleDateString();
    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = { title, skills, jobtype, salary, applicationdeadline, applicants, positionsavailable};
            if (IsValidate) {
            console.log(regobj);
            fetch("http://localhost:8000/jobs", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('job added successfully.')
                navigate('/jobview');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h3>ADD JOBS</h3>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Job Title <span className="errmsg">*</span></label>
                                        <input value={title} onChange={e => titlechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Skills <span className="errmsg">*</span></label>
                                        <input value={skills} onChange={e => skillschange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Job Type</label>
                                        <br></br>
                                        <input type="radio" checked={jobtype === 'fulltime'} onChange={e => jobtypechange(e.target.value)} name="jobtype" value="fulltime" className="app-check"></input>
                                        <label>Full Time</label>
                                        <span style={{ marginLeft: '5%' }}></span>
                                        <input type="radio" checked={jobtype === 'parttime'} onChange={e => jobtypechange(e.target.value)} name="jobtype" value="parttime" className="app-check"></input>
                                        <label>Part Time</label>
                                    </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Salary <span className="errmsg">*</span></label>
                                        <input value={salary} onChange={e => salarychange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Application Deadline<span className="errmsg"></span></label>
                                        <input type = "datetime-local" onChange={e => applicationdeadlinechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Maximum number of Applicants</label>
                                        <textarea value={applicants} onChange={e => applicantschange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Positions Available</label>
                                        <textarea value={positionsavailable} onChange={e => positionsavailablechange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                                

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Add</button> |
                            <Link to={'/home'} className="btn btn-danger">Close</Link>
                        </div>
                   </div>
                   </div>
                </form>    
            </div>
        </div>
    );
}

export default Addjobs;