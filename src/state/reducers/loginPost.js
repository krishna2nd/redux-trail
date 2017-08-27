export default function (state=null, action) {
  switch(action.type) {
    case 'USER_LOGIN_POST':
        return {
          ...action.payload,
          message: "Login request " + new Date()
        }
        break;
    case 'USER_LOGIN_SUCESS': 
        return {
          ...action.payload,
          message: "Login success " + new Date()
        }
  }
  return state;
}