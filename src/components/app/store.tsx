import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../../screens/counter/counterSlice';
//'../com/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
