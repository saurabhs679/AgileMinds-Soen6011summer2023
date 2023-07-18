import React from 'react';
import candidatesData from './assets/candidate.json';

const CandidateCard = ({ candidate }) => {
  return (
    <div className="card">
      <h2>{candidate.Name}</h2>
      <p>ID: {candidate.candidateId}</p>
      <p>Email: {candidate.email}</p>
      <p>Age: {candidate.age}</p>
      <p>Gender: {candidate.gender}</p>
      <p>Current Position: {candidate.currentPosition}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Candidate Information</h1>
      <div className="card-container">
        {candidatesData.map(candidate => (
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default App;
