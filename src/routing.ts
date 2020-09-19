import  Dashboard from './pages/dashboard/Dashboard'
import  Information from './pages/information/Information'
export const urls = {
  info: '/info',
  root: '/'
}

export const routes = [
  { url: urls.info, content: Information },
  { url: urls.root, content: Dashboard },
]
