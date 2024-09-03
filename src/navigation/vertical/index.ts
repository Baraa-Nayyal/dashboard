// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Main',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Users',
      icon: AccountCogOutline,
      path: '/users'
    }
  ]
}

export default navigation
