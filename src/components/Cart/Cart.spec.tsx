import { render, screen  } from '@testing-library/react';
import { cardPropsMock } from '../Card/mock';
import Cart from './Cart'; 

const mockProduct = cardPropsMock

describe('<Cart />', () => {
  it('should render the Cart correctly', () => {
    render(<Cart product={mockProduct} />);
    
    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByAltText('imagem produto')).toBeInTheDocument()
    expect(screen.getByText('Qtd:')).toBeInTheDocument()
    expect(screen.getByText('R$3000')).toBeInTheDocument()

    expect(screen.getByRole('button', {name: '-'})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: '+'})).toBeInTheDocument()
  });

  it('should match snapshot', () => {
    const { container } = render(<Cart product={mockProduct} />)
    expect(container.firstChild).toMatchSnapshot()
 })

});
