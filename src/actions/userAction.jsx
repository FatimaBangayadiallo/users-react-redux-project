{
  /* action to add new user*/
}
export const addUser = (newUser) => {
  newUser.id = Math.random().toString(36).slice(2);
  return {
    type: "ADD_USER",
    payload: newUser,
  };
};
// action to delete a user

export const deleteUser = (id) => {
  console.log("id from user ", id);
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
// action to edit a user

export const editUser = (id, updatedUser) => {
  return {
    type: "EDIT_USER",
    payload: { id, updatedUser },
  };
};
