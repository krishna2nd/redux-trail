function loginUserReq(login) {
  return {
    type: 'USER_LOGIN_POST',
    payload: login
  }
}

const loginUser = (login) => {
  return function(dispatch) {
    dispatch(loginUserReq(login))
    const p = new Promise(function(rs, rj) {
      setTimeout(function() {
        rs({
          message: "Login success " + new Date()
        })
      }, 1000);
    });
    p.then(function(res) {
      dispatch(loginUserSuccess({
        ...res,
        ...login
      }));
    })
  }
}

export const loginUserSuccess = (response) => {
  return {
    type: 'USER_LOGIN_SUCESS',
    payload: {
      ...response
    }
  };
};

export default loginUser;
