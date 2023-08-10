import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Appheader = () => {
    const [displayusername, displayusernameupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();
    const userrole = sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole').toString() : '';

    let access = "/addjobs"
    if (userrole === "candidate"){
        access = "/"
    }
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            showmenuupdateupdate(false);
        } else {
            showmenuupdateupdate(true);
            let username = sessionStorage.getItem('username');
            if (username === '' || username === null) {
                usenavigate('/login');
            } else {
                displayusernameupdate(username);
            }
        }

    }, [location])
    return (
        <div>
            {showmenu &&
                <div className="header">

                    <Link to={'/'}>Home</Link>
                    <span style={{ marginLeft: '1.5%' }}></span>
                    <Link to={userrole === "candidate" ? '/editprofile' : '/candidate'}>{userrole === "candidate" ? 'My Profile': "View Candidates"}</Link>

                    <span style={{ marginLeft: '1.5%' }}></span>
                    <Link to={userrole === "candidate" ? '/assessment' : '/candidate'}>{userrole === "candidate" ? 'Skill Assessment': "View Candidates"}</Link>
                    <span style={{ marginLeft: '1.5%' }}></span>
                    <Link to={(userrole === "candidate" || userrole === "admin") ? "/viewjobs" : "/addjobs"}>{(userrole === "candidate" || userrole === "admin") ? "View Jobs" : "Add Jobs"}</Link>
                    <span style={{ marginLeft: '1.5%' }}></span>
                    <Link ></Link>

                    <Link to={'/jobview'}>Posted Jobs</Link>
                    <span style={{ marginLeft: '55%' }}>Welcome <b>{displayusername}</b></span>
                    <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
                    
                </div>
            }
        </div>
    );
}

export default Appheader;
