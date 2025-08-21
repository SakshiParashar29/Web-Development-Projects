import Note from "../models/Notes.js";


// getAllNotes
const getNotes = async(req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({message: "Failed to fetch notes", error: err});
    }
}

//GetNotesById
const getNotesById = async(req, res) => {
    try {
        const id = req.params.id;
        const note = await Note.findById(id);

        if(!note)
            res.status(404).json({message: "Note not found!!"});

        res.status(200).json(note);
    } catch (err) {
        res.status(500)
         .json({
            message: "Something Went Wrong!!",
            error: err
        });
    }
}

//addNote
const addNote = async(req, res) => {
    try {
        const title = req.body.title;
        const content = req.body.content;
        const note = await Note.create({title, content})
        res.status(201).json({
            message: "Note added Successfully",
            note: note
        });
    } catch (err) {
        res.status(500)
         .json({
            message: "Something Went Wrong!!",
            error: err
        });
    }
}

//editNote
const editNote = async(req, res) => {
    try {
        const id = req.params.id;
        const content = req.body.content;
        const title = req.body.title;
        const note = await Note.findByIdAndUpdate(id, {title, content}, {new: true});
       //with new: true it send the updated note else old.
        res.status(200).json({message: "Note updated Successfully", note});
        // note.title = title;
        // note.content = content;
        // await note.save()  // alternative is use findbyidandupdate
    } catch (err) {
        res.status(500)
         .json({
            message: "Something Went Wrong!!",
            error: err
        });
    }
}

//deleteNote
const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        await Note.findByIdAndDelete(id);
        return res.status(200).json({message: "Note Deleted Successfully"});
    } catch (err) {
        res.status(500)
         .json({
            message: "Something Went Wrong!!",
            error: err
        });
    }
}

export {
    getNotes,
    getNotesById,
    deleteNote,
    editNote,
    addNote
}