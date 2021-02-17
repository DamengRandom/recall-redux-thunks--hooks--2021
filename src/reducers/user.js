const initialState = {
  name: 'damon',
  loggedIn: false,
};

export function userReducer(state = initialState, action) {
  return state;
}

export const getUserName = state => state.user.name;
