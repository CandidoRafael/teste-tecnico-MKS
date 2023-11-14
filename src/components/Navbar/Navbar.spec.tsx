import {  fireEvent, render } from '@testing-library/react'
import Navbar from './Navbar'
import useStore from '../../store/store';

jest.mock('../../store/store');

describe('<Navbar />', () => {

   it('the sidebar should open when clicking on the cart', () => {
    
    const mockToggleSidebar = jest.fn();
    const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;
    mockUseStore.mockReturnValueOnce({
      toggleSidebar: mockToggleSidebar,
      cart: [],
    });

    const { getByTestId } = render(<Navbar />);
    const icon = getByTestId('cart-icon');

    fireEvent.click(icon);

    // Verifica se a função toggleSidebar foi chamada
    expect(mockToggleSidebar).toHaveBeenCalled();
  });
})