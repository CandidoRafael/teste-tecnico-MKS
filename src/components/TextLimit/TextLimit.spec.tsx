
import { render } from '@testing-library/react';
import { TextLimit } from './TextLimit'; // Ajuste o caminho conforme necessário

describe('<TextLimit />', () => {

  it('should render the full text when within the limit', () => {
    const { getByText } = render(<TextLimit text="Hello, World!" limit={20} />);
    
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });

  it('must separate the text and add ellipsis when it exceeds the limit', () => {
    const { getByText } = render(<TextLimit text="Este é um texto longo que excede o limite." limit={10} />);
    
    expect(getByText('Este é um ...')).toBeInTheDocument();
  });


});