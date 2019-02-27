export const userDefault = {
  isLoggedIn: false,
  id: '',
  token: '',
  expires: '',
  email: '',
  role: ''
}

export const configureUserResource = () => ({ currentUser: userDefault })