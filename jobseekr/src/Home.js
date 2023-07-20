import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import video from './video.mp4';
const Home = () => {
    const usenavigate = useNavigate();
    const [candidatelist, listupdate] = useState(null);
   
    useEffect(() => {
       

        // let jwttoken = sessionStorage.getItem('jwttoken');
        // fetch("https://localhost:44308/Customer", {
        //     headers: {
        //         'Authorization': 'bearer ' + jwttoken
        //     }
        // }).then((res) => {
        //     return res.json();
        // }).then((resp) => {
        //     listupdate(resp);
        // }).catch((err) => {
        //     console.log(err.messsage)
        // });

    }, []);

    return (
        <div>
            
            <h1 className="text-center">JobSeekr</h1>
            
            <video className='videoTag' autoPlay loop muted 
            style={{minWidth: "100%",minHeight: "100vh",maxWidth: "100%",maxHeight: "100vh",objectFit: "cover",
            zIndex: "-1", boxSizing:"border-box",backgroundColor: "rgba(35,45,57,0.8)"}}>
            <source src={video} type='video/mp4' />
            </video>
            {
            
            /*<table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Credit Limit</td>
                    </tr>
                </thead>
                <tbody>
                    {customerlist &&
                        customerlist.map(item => (
                            <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.creditLimit}</td>
                            </tr>

                        ))
                    }
                </tbody>

            </table> }
                */}
        </div>
    );
}

export default Home;
