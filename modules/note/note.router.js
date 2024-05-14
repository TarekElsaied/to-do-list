import express from 'express';
import {createNote} from './note.controller.js'
const noteRouter=express.Router();

noteRouter.post('/',createNote);


export default noteRouter;