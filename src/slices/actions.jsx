// actions.js
export const login = (password) => {
  return {
    type: 'LOGIN',
    payload: { password },
  };
};

