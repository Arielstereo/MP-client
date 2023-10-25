import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import LayoutPrivate from '../components/LayoutPrivate'
import Transfer from '../pages/Transfer'
import Movements from '../pages/Movements'
import Account from '../pages/Account'
import Deposit from '../pages/Deposit'
import EditAlias from '../pages/EditAlias'
import Notifications from '../pages/Notifications'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/dashboard',
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: '/dashboard/transfer',
            element: <Transfer />
          },
          {
            path: '/dashboard/movements',
            element: <Movements />
          },
          {
            path: '/dashboard/account',
            element: <Account />
          },
          {
            path: '/dashboard/deposit',
            element: <Deposit />
          },
          {
            path: '/dashboard/editAlias',
            element: <EditAlias />
          },
          {
            path: '/dashboard/notifications',
            element: <Notifications />
          }
        ]
      }
    ]
  }
])
