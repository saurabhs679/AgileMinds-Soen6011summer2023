import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditJobs = () => {
    const myobj = useLocation()
    const [title, titlechange] = useState(myobj.state.title);
    const [skills, skillschange] = useState(myobj.state.skills);
    const [jobtype, jobtypechange] = useState(myobj.state.jobtype);
    const [salary, salarychange] = useState(myobj.state.salary);
    const [applicationdeadline, applicationdeadlinechange] = useState(myobj.state.applicationdeadline);
    const [applicants, applicantschange] = useState(myobj.state.applicants);
    const [positionsavailable, positionsavailablechange] = useState(myobj.state.positionsavailable);

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (title === null || title === '') {
            isproceed = false;
            errormessage += ' JobTitle';
        }
        if (skills === null || skills === '') {
            isproceed = false;
            errormessage += ' Skills';
        }
        if (salary === null || salary === '') {
            isproceed = false;
            errormessage += ' Salary';
        }
        if(!isproceed){
            toast.warning(errormessage);
        }
        return isproceed;
    }

    //const deadline = new Date(job.deadline).toLocaleDateString();
    const handlesubmit = (e) => {
            e.preventDefault();
            const employer = sessionStorage.getItem('username') != null ? sessionStorage.getItem('username').toString() : '';
            let regobj = { title, skills, jobtype, salary, applicationdeadline, applicants, positionsavailable, employer, applicantsStatus:[]};
            if (IsValidate()) {
            fetch("http://localhost:8000/jobs/" + myobj.state.id, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('details updated successfully.')
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
                            <h3>Edit Job</h3>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Job Title <span className="errmsg">*</span></label>
                                        <input value={title} placeholder={title} onChange={e => titlechange(e.target.value)} className="form-control"></input>
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
                            <button type="submit" className="btn btn-primary">Change</button> |
                            <Link to={'/jobview'} className="btn btn-danger">Close</Link>
                        </div>
                   </div>
                   </div>
                </form>    
            </div>
        </div>
    );
}

export default EditJobs;