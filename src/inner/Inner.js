import './inner.css'
import { useEffect } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {AiOutlineCopy} from 'react-icons/ai'



const Inner = () => {

    return (
        <div className="inner">

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
                <div className="section-content"  placeholder="Proszę wpisać..." contentEditable="true"></div>
                <div className="copyButton" onClick={()=>{
                    
                }} style={{position: "absolute", right: "40px", top: "93px"}}><AiOutlineCopy /></div>
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

            <div className='section'>
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

        </div>
    )
}

export default Inner;