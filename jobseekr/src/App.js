import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Appheader from './Appheader';
import Candidate from './Candidate';
import Addjobs from './Addjobs';
import Jobs from './Jobview'
import EditJobs from './EditJobs'
import ViewAppliedCandidates from './ViewAppliedCandidates';
import Application from './Application';
import CandidateAppliedJobs from './CandidateAppliedJobs';


function App() {

  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Appheader></Appheader>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/candidate' element={<Candidate/>}></Route>
        <Route path='/addjobs' element={<Addjobs/>}></Route>
        <Route path='/jobview' element={<Jobs/>}></Route>
        <Route path='/editjob' element={<EditJobs/>}></Route>
        <Route path='/viewjobs' element={<CandidateAppliedJobs/>}></Route>
        <Route path='/viewappliedcandidates/:id' element={<ViewAppliedCandidates/>}></Route>
        <Route path='/application/:id' element={<Application/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
};

export default App;
