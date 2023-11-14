import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

describe('<Footer />', () => {

    it('should contain the footer text', () => {
        render(<Footer />)

       expect(screen.getByText('MKS sistemas © Todos os direitos reservados')).toBeInTheDocument()
    })
})