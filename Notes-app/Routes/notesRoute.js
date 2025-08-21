import express from "express";
import {getNotes, addNote, editNote, deleteNote, getNotesById} from "../Controllers/routes.controllers.js"

const noteRoutes = express.Router();


noteRoutes
  .get("/", getNotes)
  .post('/', addNote)
  .put('/:id', editNote)
  .delete('/:id', deleteNote)
  .get('/:id', getNotesById);

export default noteRoutes;