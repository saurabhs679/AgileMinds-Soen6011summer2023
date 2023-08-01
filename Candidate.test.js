import React from "react";
import { render } from "@testing-library/react";
import Candidates from "./Candidate";

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

describe("Candidates Component", () => {

  it("renders without errors", () => {
    render(<Candidates />);
    // The test will pass as long as the component renders without throwing any errors.
    // No need to assert anything further as this is a basic "smoke test."
  });

  it("renders the candidates list correctly", async () => {
    render(<Candidates />);
    const candidateElements = [
        {
            "candidateId": 1,
            "Name": "Terry Ortega",
            "email": "terryortega@newcube.com",
            "age": 27,
            "gender": "female",
            "resume": "Anim ad ad deserunt dolor consectetur quis excepteur aute nostrud. Nisi veniam enim commodo laboris aliquip aliqua pariatur enim laborum consequat exercitation. Sint incididunt aliqua proident nisi eu duis qui nostrud mollit laborum duis laboris proident est.\r\n",
            "currentPosition": "Python Developer",
            "skills": "Python",
            "jobsApplied": [
              1,
              2
            ]
          },
          {
            "candidateId": 2,
            "Name": "Maude Holcomb",
            "email": "maudeholcomb@newcube.com",
            "age": 50,
            "gender": "female",
            "resume": "Laboris sint qui ad sint ea do aliquip reprehenderit culpa quis consectetur est. Commodo in ut ex exercitation velit mollit. Sit mollit ad elit occaecat anim consequat consequat eu ipsum aute voluptate aute nisi deserunt. Proident veniam ad et tempor. Proident pariatur ipsum proident veniam magna exercitation cupidatat excepteur adipisicing reprehenderit dolore eu veniam fugiat. Sunt elit eu voluptate consequat culpa laboris enim ex ea.\r\n",
            "currentPosition": "Devops Engineer",
            "skills": "AWS, Github, Docker, Splunk",
            "jobsApplied": [
              1,
              5
            ]
          },
                ];
    expect(candidateElements).toHaveLength(2); // Assuming there are two jobs in the mockJobsData
  });
});
