

export const gameCollectionReducer = (state = [], action) => {
  switch (action.type) {
    //Se dispara con la acción de agregar un todo.
    case 'add':
        return [...state, action.payload];
    case 'delete':
        return state.filter(todo => todo.id !== action.payload);
    case 'complete':
        return state.map(todo => {
            if (todo.id === action.payload) {
                return {
                    ...todo,
                    done: !todo.done
                }
            } else {
                return todo;
            }
        })
    default: 
        break;
}
}