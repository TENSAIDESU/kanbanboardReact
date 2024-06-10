import { configureStore } from "@reduxjs/toolkit";
import taskLoc from './taskloc'

export default configureStore({
  reducer: {
   tasks:taskLoc
  },
});
