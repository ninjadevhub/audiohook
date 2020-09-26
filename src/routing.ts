import  Dashboard from './pages/dashboard/Dashboard'
import  Information from './pages/information/Information'
import  SignIn from './pages/sign-in/SignIn'
export const urls = {
  info: '/info',
  root: '/',
  signIn: '/sign-in',
}

export const routes = [
  { url: urls.info, content: Information },
  { url: urls.root, content: Dashboard },
  { url: urls.signIn, content: SignIn },
]
