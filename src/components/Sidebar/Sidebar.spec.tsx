import { render, screen } from '@testing-library/react';

import Sidebar from './Sidebar'; // Make sure to provide the correct path

describe('Sidebar Component', () => {
  it('renders without crashing', () => {
    render(<Sidebar />);
  });

  it('displays an empty cart message when cart is empty', () => {
     render(<Sidebar />);
    expect(screen.getByText('Carrinho de compras vazio.')).toBeInTheDocument();
  });

  it('should show a button to complete the purchase', () => {
    render(<Sidebar />)

    expect(screen.getByRole('button', { name: 'Finalizar Compra' })).toBeInTheDocument()
  })


});