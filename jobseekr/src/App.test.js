import { render, screen } from '@testing-library/react';
import App from './App';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

describe("Jobs Component", () => {

  it("renders without errors", () => {
    render(<App />);
    // The test will pass as long as the component renders without throwing any errors.
    // No need to assert anything further as this is a basic "smoke test."
  });
});
