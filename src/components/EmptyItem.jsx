
import { Link } from 'react-router-dom'
import LinkButton from '../Ui/LinkButton'


const EmptyItem = ({ name, to }) => {

  return (
    <div className='py-3 px-4'>

      <div>
        <LinkButton to={to}> &larr; Back to menu</LinkButton>
      </div>

      {name !== 'Wishlist' &&
        <div className='mt-5'>
          <LinkButton to="/wishlist">wishlist ❤️</LinkButton>
        </div>
      }

      <p className='font-semibold mt-7'>Your {name} is still empty. Start adding some Products </p>
    </div>
  )
}

export default EmptyItem