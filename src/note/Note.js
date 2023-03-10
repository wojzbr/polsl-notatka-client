import Page from "./page/Page"
import { useEffect } from "react";
import Dropdown from 'react-dropdown';
import {AiOutlineCopy} from 'react-icons/ai'
import Toolbar from "../toolbar/Toolbar";


const myObserver = new ResizeObserver(() => {
    if (document.querySelectorAll(".inner")[1]?.children.length!=0) {
        document.querySelectorAll(".page")[1].style.display="block"
    }
    else document.querySelectorAll(".page")[1].style.display="none"

    if (document.querySelector(".inner").offsetHeight > 820) {
        let movedElem = document.querySelector(".inner").lastChild
        document.querySelector(".inner").removeChild(movedElem)
        document.querySelectorAll(".inner")[1].insertBefore(movedElem, document.querySelectorAll(".inner")[1].firstChild)
    }
    else if (document.querySelector(".inner").offsetHeight+document.querySelectorAll(".inner")[1].querySelector(".section").offsetHeight <= 820) {
        let movedElem = document.querySelectorAll(".inner")[1].firstChild
        document.querySelector(".inner").appendChild(movedElem)
    }


    if (document.querySelectorAll(".inner")[2]?.children.length!=0) {
        document.querySelectorAll(".page")[2].style.display="block"
    }
    else document.querySelectorAll(".page")[2].style.display="none"

    if (document.querySelectorAll(".inner")[1].offsetHeight > 820) {
        let movedElem = document.querySelectorAll(".inner")[1].lastChild
        document.querySelectorAll(".inner")[1].removeChild(movedElem)
        document.querySelectorAll(".inner")[2].insertBefore(movedElem, document.querySelectorAll(".inner")[2].firstChild)
    }
    else if (document.querySelectorAll(".inner")[1].offsetHeight+document.querySelectorAll(".inner")[2].querySelector(".section").offsetHeight <= 820) {
        let movedElem = document.querySelectorAll(".inner")[2].firstChild
        document.querySelectorAll(".inner")[1].appendChild(movedElem)
    }


});

const Note = () => {

    useEffect(()=>{
        document.querySelectorAll(".inner").forEach(inner => myObserver.observe(inner))
    },[])

    const confirm = element => {
        element.innerText = "SKOPIOWANO"
        var opacity = 1;
        var interval = setInterval(function() {
          if (opacity <= 0) {
            clearInterval(interval)
            element.style.opacity = 1
            element.innerText = "KOPIUJ"
          } else {
            element.style.opacity = opacity;
            opacity -= 0.1;
          }
        }, 100);
      }

    const copyToClipboard = event => {
        confirm(event.target)
        var element = event.target.parentNode.querySelector(".section-content"); // Get the element with id "test"
        var range = document.createRange(); // Create a range object
        range.selectNode(element); // Set the range to the element's contents
        window.getSelection().removeAllRanges(); // Clear any existing selection
        window.getSelection().addRange(range); // Add the range to the selection
        document.execCommand("copy"); // Copy the selected content to clipboard
        window.getSelection().removeAllRanges(); // Clear the selection again
      }

    const content = (
    <>
        <div className='section'>
            <h2 className="subsection-title">1.1 CZ?????? OG??LNA</h2>
            <div className='section-content'></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Charakter spotkania:</h3>
            <Dropdown className="section-select" controlClassName='myControlClassName' arrowClassName='myArrowClassName' placeholderClassName='myPlaceholderClassName' menuClassName='myMenuClassName' options={[
                "Biznesowe - wst??pne",
                "Biznesowe - kontynuacja wsp????pracy",
                "Naukowe - wst??pne",
                "Naukowe - kontynuacja wsp????pracy",
                "Projektowe - wst??pne",
                "Projektowe - kontynuacja wsp????pracy"
            ]} placeholder="Prosz?? wybra??..." />
        </div>
    
        <div className='section'>
            <h3 className="section-title">Tytu?? projektu:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true" id="test"></div>
            <div className="copyButton" onClick={event => copyToClipboard(event)} >KOPIUJ</div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Nazwa programu/konkursu:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Kierownik Projektu:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Imi?? i nazwisko pracownika projektu:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Data spotkania:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Miejsce spotkania:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Nazwa Kontrahenta:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Adres:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">NIP:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">REGON:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">KRS:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Przedstawiciel firmy:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Przedstawiciel CITT:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Zakres dzia??alno??ci firmy:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Bran??a:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Oferta:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>

        <div className='section'>
            <h3 className="section-title">Osoba wykonuj??ca notatk??:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
    
        <div className='section'>
            <h2 className="subsection-title">1.2 CZ?????? SZCZEG????OWA</h2>
            <div className='section-content'></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Spotkanie z przedstawicielami ??rodowiska:</h3>
    
            <Dropdown className="section-select" controlClassName='myControlClassName' arrowClassName='myArrowClassName' placeholderClassName='myPlaceholderClassName' options={[
                "Naukowego",
                "Gospodarczego",
                "Naukowego i Gospodarczego"
            ]} placeholder="Prosz?? wybra??..." />
    
        </div>
    
        <div className='section'>
            <h3 className="section-title">Cel g????wny spotkania:</h3>
    
            <Dropdown className="section-select" controlClassName='myControlClassName' arrowClassName='myArrowClassName' placeholderClassName='myPlaceholderClassName' options={[
                "Realizacja projekt??w B+R",
                "Prezentacja za??o??e?? wsp????pracy z jednostk?? naukow??",
                "Zarz??dzanie portfelem technologii",
                "Prowadzenie prac przewdro??eniowych maj??cych na celu podniesienie poziomu TRL",
                "Dzia??alno???? Broker??w",
                "Om??wienie mo??liwo??ci wsp????dzia??ania w ramach komercjalizacji bezpo??redniej",
                "Om??wienie formalno - prawnych aspekt??w podejmowanej wsp????pracy",
                "Sponsoring",
                'Inne (pro??ba o wype??nienie sekcji "Uwagi")'
            ]} placeholder="Prosz?? wybra??..." />
    
        </div>
    
        <div className='section'>
            <h3 className="section-title">Cele szczeg????owe przedmiotu spotkania:</h3>
    
            <Dropdown className="section-select" controlClassName='myControlClassName' arrowClassName='myArrowClassName' placeholderClassName='myPlaceholderClassName' options={[
                "Doradztwo dla kontrahent??w zainteresowanych podj??ciem wsp????pracy o charakterze naukowo ??? przemys??owym",
                "Wsparcie/doradztwo w zakresie realizacji procesu ofertowania przez pracownik??w jednostki naukowe",
                "Wsparcie zespo????w w organizacji realizacji pracy B+R",
                "Podejmowanie wsp??lnych wysi??k??w w celu pozyskania zewn??trznego ??r??d??a finansowania",
                "Konsultacje wewn??trzne",
                "Dzia??ania zwi??zane z przygotowaniem projektu umowy: wsp????praca, poufnos??, komercjalizacja",
                "Prezentacja przygotowanych ofert technicznych/handlowych",
                "Identyfikowanie kluczowych problem??w decyzyjnych wyst??puj??cych w relacjach z kontrahentami, ograniczaj??cych zdolno???? do absorpcji innowacji",
                "Identyfikowanie potrzeb i oczekiwa?? kontrahent??w w celu doboru rozwi??za?? technologicznych, instrument??w finansowania zewn??trznego",
                "Identyfikowanie potrzeb i oczekiwa?? kontrahent??w w celu realizacji bada?? zleconych",
                "Budowania zespo????w do realizacji projekt??w o charakterze B+R",
                "Selekcja i dob??r zewn??trznych i/lub komercyjnych ??r??de?? finansowania",
                'Inne (pro??ba o wype??nienie sekcji "Uwagi"'
            ]} placeholder="Prosz?? wybra??..." />
    
        </div>
    
        <div className='section'>
            <h3 className="section-title">Podsumowanie poczynionych ustale??:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    
        <div className='section' id="overflowing">
            <h3 className="section-title">Ocena szans na kontynuacj?? wsp????pracy:</h3>
    
            <Dropdown className="section-select" controlClassName='myControlClassName' arrowClassName='myArrowClassName' placeholderClassName='myPlaceholderClassName' options={[
                "Podj??cie ponownego kontaktu",
                "Akceptacja przyj??tych ustale??",
                "Akceptacja przyj??tych ustale??",
                "Wyra??ne zainteresowanie przedmiotem spotkania",
                "Odrzucenie propozycji wsp????pracy",
                "Uwagi do poczynionych ustale??"
            ]} placeholder="Prosz?? wybra??..." />
    
        </div>

        <div className='section'>
            <h3 className="section-title">Uwagi:</h3>
            <div className="section-content"  placeholder="Prosz?? wpisa??..." contentEditable="true"></div>
        </div>
    </>
    )

    return (
        <>
        <Toolbar />
        <div className="no-print" style={{height: "50px"}}></div>
        <Page content={content}/>
        <Page />
        <Page />
        </>
    )
}

export default Note