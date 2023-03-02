import './page.css'
import Header from '../header/Header'
import Inner from '../inner/Inner.js'
import Footer from '../footer/Footer'
import { useEffect } from 'react'

const SecondPage = () => {

    // useEffect(()=>{
    //     if (document.querySelectorAll(".inner")[1]?.children.length!=0) {
    //         document.querySelector("#secondPage").style.display="block"
    //     }
    //     else document.querySelector("#secondPage").style.display="none"
    // }, [document.querySelectorAll(".inner")[1]?.children])
    
    return (
    <>
    <div className="page a4" id="secondPage">
        <Header />
        <div className="innerWrapper">
            <div className="inner">

            </div>
        </div>
        <Footer />
    </div>
    </>
    )
}

export default SecondPage