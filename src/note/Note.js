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
            <h2 className="subsection-title">1.1 CZĘŚĆ OGÓLNA</h2>
            <div className='section-content'></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Charakter spotkania:</h3>
            <Dropdown className="section-select" controlClassName='myControlClassName' arrowClassName='myArrowClassName' placeholderClassName='myPlaceholderClassName' menuClassName='myMenuClassName' options={[
                "Biznesowe - wstępne",
                "Biznesowe - kontynuacja współpracy",
                "Naukowe - wstępne",
                "Naukowe - kontynuacja współpracy",
                "Projektowe - wstępne",
                "Projektowe - kontynuacja współpracy"
            ]} placeholder="Proszę wybrać..." />
        </div>
    
        <div className='section'>
            <h3 className="section-title">Tytuł projektu:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true" id="test"></div>
            <div className="copyButton" onClick={event => copyToClipboard(event)} >KOPIUJ</div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Nazwa programu/konkursu:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Kierownik Projektu:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Imię i nazwisko pracownika projektu:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Data spotkania:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Miejsce spotkania:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Nazwa Kontrahenta:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Adres:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">NIP:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">REGON:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">KRS:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Przedstawiciel firmy:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Przedstawiciel CITT:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Zakres działalności firmy:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Branża:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Oferta:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>

        <div className='section'>
            <h3 className="section-title">Osoba wykonująca notatkę:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
    
        <div className='section'>
            <h2 className="subsection-title">1.2 CZĘŚĆ SZCZEGÓŁOWA</h2>
            <div className='section-content'></div>
        </div>
    
        <div className='section'>
            <h3 className="section-title">Spotkanie z przedstawicielami środowiska:</h3>
    
            <Dropdown className="section-select" controlClassName='myControlClassName' arrowClassName='myArrowClassName' placeholderClassName='myPlaceholderClassName' options={[
                "Naukowego",
                "Gospodarczego",
                "Naukowego i Gospodarczego"
            ]} placeholder="Proszę wybrać..." />
    
        </div>
    
        <div className='section'>
            <h3 className="section-title">Cel główny spotkania:</h3>
    
            <Dropdown className="section-select" controlClassName='myControlClassName' arrowClassName='myArrowClassName' placeholderClassName='myPlaceholderClassName' options={[
                "Realizacja projektów B+R",
                "Prezentacja założeń współpracy z jednostką naukową",
                "Zarządzanie portfelem technologii",
                "Prowadzenie prac przewdrożeniowych mających na celu podniesienie poziomu TRL",
                "Działalność Brokerów",
                "Omówienie możliwości współdziałania w ramach komercjalizacji bezpośredniej",
                "Omówienie formalno - prawnych aspektów podejmowanej współpracy",
                "Sponsoring",
                'Inne (prośba o wypełnienie sekcji "Uwagi")'
            ]} placeholder="Proszę wybrać..." />
    
        </div>
    
        <div className='section'>
            <h3 className="section-title">Cele szczegółowe przedmiotu spotkania:</h3>
    
            <Dropdown className="section-select" controlClassName='myControlClassName' arrowClassName='myArrowClassName' placeholderClassName='myPlaceholderClassName' options={[
                "Doradztwo dla kontrahentów zainteresowanych podjęciem współpracy o charakterze naukowo – przemysłowym",
                "Wsparcie/doradztwo w zakresie realizacji procesu ofertowania przez pracowników jednostki naukowe",
                "Wsparcie zespołów w organizacji realizacji pracy B+R",
                "Podejmowanie wspólnych wysiłków w celu pozyskania zewnętrznego źródła finansowania",
                "Konsultacje wewnętrzne",
                "Działania związane z przygotowaniem projektu umowy: współpraca, poufnosć, komercjalizacja",
                "Prezentacja przygotowanych ofert technicznych/handlowych",
                "Identyfikowanie kluczowych problemów decyzyjnych występujących w relacjach z kontrahentami, ograniczających zdolność do absorpcji innowacji",
                "Identyfikowanie potrzeb i oczekiwań kontrahentów w celu doboru rozwiązań technologicznych, instrumentów finansowania zewnętrznego",
                "Identyfikowanie potrzeb i oczekiwań kontrahentów w celu realizacji badań zleconych",
                "Budowania zespołów do realizacji projektów o charakterze B+R",
                "Selekcja i dobór zewnętrznych i/lub komercyjnych źródeł finansowania",
                'Inne (prośba o wypełnienie sekcji "Uwagi"'
            ]} placeholder="Proszę wybrać..." />
    
        </div>
    
        <div className='section'>
            <h3 className="section-title">Podsumowanie poczynionych ustaleń:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
        </div>
    
        <div className='section' id="overflowing">
            <h3 className="section-title">Ocena szans na kontynuację współpracy:</h3>
    
            <Dropdown className="section-select" controlClassName='myControlClassName' arrowClassName='myArrowClassName' placeholderClassName='myPlaceholderClassName' options={[
                "Podjęcie ponownego kontaktu",
                "Akceptacja przyjętych ustaleń",
                "Akceptacja przyjętych ustaleń",
                "Wyraźne zainteresowanie przedmiotem spotkania",
                "Odrzucenie propozycji współpracy",
                "Uwagi do poczynionych ustaleń"
            ]} placeholder="Proszę wybrać..." />
    
        </div>

        <div className='section'>
            <h3 className="section-title">Uwagi:</h3>
            <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
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