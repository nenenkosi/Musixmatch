import lyrics from "./lyrics"


import { combineReducers } from "redux"
/** 
   *  redux combine reducers to create One(1) store for the app
  */
export default combineReducers({
    lyrics,
})