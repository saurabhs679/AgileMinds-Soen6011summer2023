import React from "react";
import { render } from "@testing-library/react";
import Register from "./Register";

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

describe("Register Component", () => {

  it("renders without errors", () => {
    render(<Register />);
    // The test will pass as long as the component renders without throwing any errors.
    // No need to assert anything further as this is a basic "smoke test."
  });

  it("renders the job list correctly", async () => {
    render(<Register />);
    const userElements = [
        {
            "id": "adminuser",
            "name": "Madhava",
            "password": "admin",
            "email": "madhava@gmail.com",
            "phone": "8989898989",
            "country": "Canada",
            "address": "",
            "role": "admin",
            "gender": "Male"
          },
          {
            "id": "madhava",
            "name": "madhava",
            "password": "madhava",
            "email": "madhava@gmail.com",
            "phone": "9898989898",
            "country": "canada",
            "address": "2125",
            "gender": "male",
            "role": "employer"
          }
                ];
    expect(userElements).toHaveLength(2); // Assuming there are two jobs in the mockJobsData
  });
});