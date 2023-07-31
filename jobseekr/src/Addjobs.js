import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Addjobs = () => {

    const [title, titlechange] = useState("");
    const [skills, skillschange] = useState([]);
    const [tempSkill, setTempSkill] = useState("");
    const [jobtype, jobtypechange] = useState("");
    const [salary, salarychange] = useState("");
    const [applicationdeadline, applicationdeadlinechange] = useState("");
    const [applicants, applicantschange] = useState("");
    const [positionsavailable, positionsavailablechange] = useState("");

    const navigate = useNavigate();
   // const tagInput = useRef(null);

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
            console.log("sadsdf");
            e.preventDefault();
            const employer = sessionStorage.getItem('username') != null ? sessionStorage.getItem('username').toString() : '';
            let regobj = { title, skills, jobtype, salary, applicationdeadline, applicants, positionsavailable, employer};
            if (IsValidate()) {
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
    const removeSkill = (i) => {
        const newTags = [ ...skills ];
        newTags.splice(i, 1);
    
        // Call the defined function setTags which will replace tags with the new value.
        skillschange(newTags);
      };
    const inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
          if (skills.find(tag => tag.toLowerCase() === val.toLowerCase())) {
            return;
          }
          skillschange([...skills, val]);
          setTempSkill("");
          //tagInput.value = null;
        } else if (e.key === 'Backspace' && !val) {
          removeSkill(skills.length - 1);
        }
      };
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container">
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
                                        {/* <input value={skills} onChange={e => skillschange(e.target.value)} className="form-control"></input> */}
                                        <div className="input-tag">
                                        <ul className="input-tag__tags">
                                            { skills.map((tag, i) => (
                                            <li key={tag}>
                                                {tag}
                                                <button type="button" onClick={() => { removeSkill(i) }}>+</button>
                                            </li>
                                            ))}
                                            <li className="input-tag__tags__input"><input type="text" onKeyDown={inputKeyDown} 
                                        value={tempSkill} onChange={e => setTempSkill(e.target.value)} /></li>
                                        </ul>
                                        </div>
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
                            <div className="btn btn-primary" onClick={handlesubmit}>Add</div> |
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