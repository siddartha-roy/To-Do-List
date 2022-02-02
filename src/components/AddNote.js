import { useState } from "react"

const AddNote=({handleAddNote})=>{
    const [noteText,setNoteText]=useState('');
    const charLimit=200;
const handleChange=(e)=>{
    if(charLimit-e.target.value.length>=0){
        setNoteText(e.target.value);

    }
    

}

const handleSave=()=>{
    if(noteText.trim().length>0){
        handleAddNote(noteText);
        setNoteText('');
    }
    
    
}

    return(
        <div className="note new">
            <textarea onChange={handleChange} value={noteText} rows="8" cols="10" placeholder="Type to add a note..."></textarea>
            <div className="note-footer">
                <small>{charLimit-noteText.length} remaining</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>

        </div>
    )
}

export default AddNote