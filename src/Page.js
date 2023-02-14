import './page.css'
import Header from './header/Header'
import Inner from './inner/Inner.js'
import Footer from './footer/Footer'

const Page = () => {
    return (
    <page size="A4">
        <Header />
        <Inner />
        <Footer />
    </page>
    )
}

export default Page