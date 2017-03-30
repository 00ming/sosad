import home from './components/Home/Home'
import menu from './components/Menu/Menu'
import booking from './components/Booking/Booking'
import about from './components/About/About'
import active from './components/Active/Active'
export default[
  {
    path: '/home',
    component: home
  },
  {
    path: '/menu',
    component: menu
  },
  {
    path: '/booking',
    component: booking
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/active',
    component: active
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/home'
  }
]
