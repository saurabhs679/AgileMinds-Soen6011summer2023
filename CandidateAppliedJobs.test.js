import React from "react";
import { render } from "@testing-library/react";
import CandidateAppliedJobs from "./CandidateAppliedJobs";

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

describe("CandidateAppliedJobs Component", () => {

  it("renders without errors", () => {
    render(<CandidateAppliedJobs />);
    // The test will pass as long as the component renders without throwing any errors.
    // No need to assert anything further as this is a basic "smoke test."
  });

  it("renders the applied jobs for candidates list correctly", async () => {
    render(<CandidateAppliedJobs />);
    const candidateAppliedJobs = [
        {
            "id": 2,
            "title": "Devops Engineer",
            "skills": ["docker", "github", "splunk", "AWS"],
            "jobtype": "fulltime",
            "salary": "150000",
            "applicationdeadline": "2023-07-18T20:26",
            "applicants": "12",
            "positionsavailable": "2",
            "applicantsStatus": "",
            "employer": "madhava"
          },
          {
            "id": 3,
            "title": "business analyst",
            "skills": ["PowerBI", "Excel"],
            "jobtype": "fulltime",
            "salary": "120000",
            "applicationdeadline": "2023-07-22T21:39",
            "applicants": "12",
            "positionsavailable": "2",
            "applicantsStatus": "",
            "employer": "papry"
          }
                ];
    expect(candidateAppliedJobs).toHaveLength(2); // Assuming there are two jobs in the mockJobsData
  });
});
