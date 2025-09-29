// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Fix for Ant Design & JSDOM not supporting matchMedia
beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // old API
        removeListener: jest.fn(),
        addEventListener: jest.fn(), // new API
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }),
    });
  });
  try {
    jest.mock("react-router-dom", () => {
      const actual = jest.requireActual("react-router-dom");
      return {
        ...actual,
        useLocation: () => ({ pathname: "/" }),
      };
    });
  } catch (e) {
    console.warn("react-router-dom not available in test env", e);
  }
  