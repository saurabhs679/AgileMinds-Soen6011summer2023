 import './stylejob.css'
 import { useParams, useNavigate } from 'react-router-dom';
 import { useEffect, useState } from 'react';
 import { toast } from "react-toastify";
 const Application = () =>{
    let { id } = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        loadCandidates()
    },[])


    const [myID, updateID] = useState(0)
    const [newUser, updateNewUser] = useState(true)
    const [tempSkill, setTempSkill] = useState("");
    const [formData, updateDataForm] = useState({
        id: "",
        user_id: "",
        Name: "",
        email: "",
        age: "",
        gender: "",
        resume: "",
        currentPosition: "",
        skills: [],
        address:"",
        jobsApplied: []
      })
      useEffect(()=>{
        console.log("aaa", formData);
    },[formData])
    function loadCandidates(){
        const username = sessionStorage.getItem('username') != null ? sessionStorage.getItem('username').toString() : '';
        fetch("http://localhost:8000/Candidates/").then(res =>{
            if (!res.ok) {
                navigate('/');
                return false;
            }
            return res.json();
        }).then((res)=>{
            
            const current_profile = res.filter((name)=>{
                return username === name.user_id
            })
            if(current_profile.length === 0){
                console.log(formData + "This is the form data")
                updateID(res.length++)
            }else{
                updateNewUser(false)
                updateDataForm(current_profile[0])
            }
            console.log(current_profile)
            
        })
        
    }
    function submitHandler(event){
        const username = sessionStorage.getItem('username') != null ? sessionStorage.getItem('username').toString() : '';
        event.preventDefault()
        let id_num = parseInt(id)
        const newData = {...formData, jobsApplied:[...formData.jobsApplied, id_num], user_id:username}
        console.log("New data is");
        console.log(newData);
        if(newUser){
            fetch("http://localhost:8000/Candidates/", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newData)
        }).then((res) => {
            console.log("new user form,");
            toast.success('details submitted successfully.')
            navigate('/jobview');
        }).catch((err) => {
            console.log("srikar akela");
            toast.error('Failed :' + err.message);
        });
        }else{
            fetch("http://localhost:8000/Candidates/" + formData.id, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newData)
        }).then((res) => {
            console.log("existing user form");
            toast.success('details updated successfully.')
            navigate('/jobview');
        }).catch((err) => {
            console.log("srikar akela");
            toast.error('Failed :' + err.message);
        });
        }
    }
    const removeSkill = (i) => {
        const newTags = [ ...formData.skills ];
        newTags.splice(i, 1);
    
        // Call the defined function setTags which will replace tags with the new value.
        updateDataForm({...formData, skills: newTags })
      };
    const inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
          if (formData.skills.find(tag => tag.toLowerCase() === val.toLowerCase())) {
            return;
          }
          updateDataForm({...formData, skills: [...formData.skills, val] })
          setTempSkill("");
          //tagInput.value = null;
        } else if (e.key === 'Backspace' && !val) {
          removeSkill(formData.skills.length - 1);
        }
      };
    return <form>
    <div class = "form_container">
    <div class="form_control">
        <label for = "first_name">Name</label>
        <input
        id= "first_name"
        name="first_name"
        placeholder="Enter First Name"
        required
        value={formData.Name}
        onChange={e => {updateDataForm({...formData, Name: e.target.value })}}
        />
    </div>
    {/* <div class="form_control "> 
        <label for = "last_name">Last Name</label>
        <input
        id= "last_name"
        name="last_name"
        placeholder="Enter Last Name"
        required
        defaultValue={formData.Name.split(' ')[1]}
        />
    </div> */}
    <div class="form_control "> 
        <label for = "email">Email</label>
        <input
        type= "email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
        defaultValue={formData.email}
        onChange={e => {updateDataForm({...formData, email: e.target.value })}}
        />
    </div>
    <div class="form_control "> 
        <label for = "skills">Skills</label>
        {/* <input
        type= "text"
        id="skills"
        name="skills"
        placeholder="Enter your skills"
        required
        defaultValue={formData.skills}
        onChange={e => {updateDataForm({...formData, skills: e.target.value })}}
        /> */}
         <div className="input-tag">
            <ul className="input-tag__tags">
                { formData.skills.map((tag, i) => (
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
    <div class="textarea_control"> 
        <label for = "address">Address</label>
        <textarea
            id= "address"
            name="address"
            row="4"
            cols="50"
            placeholder="Enter your address"
            required
            defaultValue={formData.address}
            onChange={e => {updateDataForm({...formData, address: e.target.value })}}>
        </textarea>
    </div>
    
    <div class="form_control"> 
        <label for = "age">Age</label>
        <input defaultValue={formData.age} type="number" id = "age" name="age" onChange={e => {updateDataForm({...formData, age: e.target.value })}}/>
    </div>
    <div class="form_control"> 
        <label for = "upload">Upload your CV</label>
        <input 
        type="file"
        id = "file" name="Upload" 
        />
    </div>
    <div class="button_container"> 
      <div type="submit" onClick={submitHandler}> Apply Now</div> 
    </div>
    </div>
</form>
 }
 export default Application