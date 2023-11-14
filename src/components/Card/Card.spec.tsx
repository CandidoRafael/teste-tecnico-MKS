import { render, screen } from "@testing-library/react"
import Card from "./Card"
import { cardPropsMock } from "./mock"

const mock = cardPropsMock

describe('<Card />', () => {
    it('should render Card correctly', () => {
        render(<Card product={mock} />)
        
       expect(screen.getByRole('img', { name: 'imagem produto' })).toHaveAttribute('src', 'img/img.png')
       expect(screen.getByRole('heading', { name: 'Produto 1' })).toBeInTheDocument()
       expect(screen.getByText('Descrição Produto')).toBeInTheDocument()
    })

    it('should match snapshot', () => {
       const { container } = render(<Card product={mock} />)
       expect(container.firstChild).toMatchSnapshot()
    })
})