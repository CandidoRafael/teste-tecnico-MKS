export const useStoreMock = jest.fn().mockReturnValue({
  toggleSidebar: jest.fn(),
  cart: [],
});