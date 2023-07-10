
export const ValidarEmail = (email) => {
  if (email.length > 8 && email.length < 50 && email.includes('@')) {
    return true
  }else{
    return false
  }
}

export function ValidarPassword (password){
    if (password.length >= 8 && password.length < 20 ) {
        return true
      }else{
        return false
      }
}