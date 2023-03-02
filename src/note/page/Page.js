import './page.css'
import Header from '../header/Header'
import Inner from '../inner/Inner.js'
import Footer from '../footer/Footer'

const Page = ({content}) => {
    return (
    <div className="page a4">
        <Header />
        <Inner content={content}/>
        <Footer />
    </div>
    )
}

export default Page