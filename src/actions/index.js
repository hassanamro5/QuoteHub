import {todosRef} from '../config/firebase';
import {FETCH_TODOS, OPEN_MODAL, CLOSE_MODAL} from './types';




export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};


export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).update(

    {'viewed': 'true'}
   
    
    );
};

// export const completeToDo = completeToDoId => async dispatch => {
//   todosRef.child(completeToDoId).remove();
// };

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};



// Modal Actions:
export const openModalAction = () => ({
  type: OPEN_MODAL,
  payload: true
});

export const closeModalAction = () => ({
  type: CLOSE_MODAL,
  payload: false
});