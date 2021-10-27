const initialState = {
  utilisateur: [],
};

const usersReduser = (state = initialState, action) => {
  // case for adding a user
  switch (action.type) {
    case "ADD_USER":
      return { ...state, utilisateur: [...state.utilisateur, action.payload] };
    // --------------------------------------------------------------------------------
    // another case for deleting a user
    case "DELETE_USER":
      const filteredUsers = state.utilisateur.filter(
        (user) => user.id !== action.payload
      );
      return { ...state, utilisateur: filteredUsers };

    // end of deleteUser
    // -----------------------------------------------------------------------------
    // case to edit a user
    case "EDIT_USER":
      const updatedUsers = state.utilisateur.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload.updatedUser;
        }
        return user;
      });
      return { ...state, utilisateur: updatedUsers };
    default:
      return state;
  }
};
export default usersReduser;
