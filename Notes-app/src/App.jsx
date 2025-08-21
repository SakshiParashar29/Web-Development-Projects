import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';


function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [showDeleteMsg, setShowDeleteMsg] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const [save, setSave] = useState(false);


  const handleAddNote = async () => {
    if (!title.trim() || !content.trim()) return;

    try {
      const res = await axios.post('http://localhost:3000/api/notes/', {
        title,
        content
      });
      const newNote = res.data.note; // because backend sends: { message, note }

      setNotes([...notes, newNote]);
      setTitle('');
      setContent('');

      setMessage('Note Added Successfully!!');

      setTimeout(() => {
        setMessage('');
      }, 2000);
    } catch (err) {
      console.error("Failed to add note:", err);
    }
  };

  const getNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/notes/");
      setNotes(res.data);
    } catch (error) {
      console.error("Failed to fetch notes:", err);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/notes/${id}`);

      setNotes(prev => prev.filter(note => note._id !== id));

      setShowDeleteMsg(true);

      setTimeout(() => {
        setShowDeleteMsg(false);
      }, 2500);
    } catch (err) {
      console.log("Some error occured while deleting : ", err)
    }
  }
  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditNote(note);  // stores the note being edited
    setSave(true);
  };

  const saveEditedNote = async () => {
    if (!editNote) return;

    await axios.put(`http://localhost:3000/api/notes/${editNote._id}`, {
      title,
      content,
    });

    setNotes(prevNotes =>
      prevNotes.map(note =>
        note._id === editNote._id
          ? { ...note, title, content }
          : note
      )
    );

    // Clear edit state
    setEditNote(null);
    setSave(false);
    setTitle('');
    setContent('');
  };

  return (
    <div className='p-12 flex justify-center bg-gray-400 min-h-screen'>
      <div className='flex flex-col w-full max-w-xl'>
        <h2 className='text-2xl font-bold mt-5 mb-8 text-center'>NotesApp - Organize your thinking!!</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='mb-4 h-10 bg-white text-lg p-3 outline-none border-0 shadow-lg rounded-md'
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='mb-4 h-24 bg-white text-lg p-3 outline-none border-0 shadow-lg rounded-md resize-none'
        ></textarea>

        <button
          onClick={handleAddNote}
          className='bg-green-600 text-white py-2 text-lg font-semibold rounded shadow-md hover:bg-green-700 cursor-pointer'
        >
          Add Note
        </button>
        {
          message && (<p className='text-center mt-5 text-2xl text-blue-700 font-semibold'>
            {message}
          </p>)
        }
        <button
          onClick={getNotes}
          className='bg-green-600 text-white py-2 text-lg font-semibold rounded shadow-md hover:bg-green-700 cursor-pointer mt-5'
        >
          Get Notes
        </button>
        <div className="mt-6 space-y-4">
          {notes.map((note) => (
            <div key={note._id} className="bg-yellow-200 p-4 shadow rounded relative">
              {/* Edit and Delete icons */}
              <div className="absolute top-2 right-2 flex gap-4 items-center ">
                <button onClick={() => handleEdit(note)} className="text-blue-700 cursor-pointer hover:text-blue-900 text-2xl">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(note._id)} className="text-gray-600 cursor-pointer hover:text-red-800 text-2xl">
                  <FaTrashAlt />
                </button>
              </div>
              
              <h3 className="font-bold text-xl mt-4">{note.title}</h3>
              <p className="text-gray-700">{note.content}</p>
              {save && (
                <button className='text-xl px-4 py-1 mt-4 cursor-pointer bg-red-500 rounded'
                onClick={saveEditedNote} 
                > Save </button>
              )}
            </div>
          ))}
        </div>
        {showDeleteMsg && (
          <div className='p-4 shadow-md bg-white rounded relative mt-4 transition-opacity duration-500'>
            <p className='text-2xl text-center text-red-700 font-semibold'>Deleted</p>
            <div
              className='absolute bottom-0 left-0 h-2 bg-red-600 rounded-bl rounded-br shrink-line'
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
