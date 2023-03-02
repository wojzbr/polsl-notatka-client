// import reactHtmlParser from 'html-react-parser';
// import sanitizeHtml from 'sanitize-html';



// THIS FILE CONTAINS ROUTING TO UPDATE

import './table.css'

const Table = ({notes}) => {

    return (
        <div className="table-wrapper">
            <table className="fl-table">
                <thead>
                <tr>
                    <th>L.p.</th>
                    <th>ID notatki</th>
                    <th>Autor</th>
                    <th>Data dodania</th>
                    <th>Data ostatniej edycji</th>
                </tr>
                </thead>
                <tbody>
                    {notes.slice(0).reverse().map((note, index) => {
                    note.key = note.id;
                    return(
                        <tr onClick={()=>{
                            window.open(`./polsl-notatka-client/notatka?id=${note.id}`, '_self')                            
                        }}>
                            <td>{notes.length - index}.</td>
                            <td style={{textAlign: "left"}}>RJO4/{note.id}</td>
                            <td style={{textAlign: "left"}}>
                                {/* {reactHtmlParser(
                                    sanitizeHtml(note.title, {allowedTags: ['sub', 'sup', 'u', 'i']})
                                )} */}
                                {note.author}
                            </td>
                            <td>{note.date_added}</td>
                            <td>{note.date_last_edited}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>        
    )
}

export default Table;