import './toggol.css'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const Toggol = ({ dark, toggol }) => {
  const handelToggol = () => {
    toggol(!dark)
  }

  return (
    <article className='t'>
      <BsMoonFill className='t-icon' />
      <BsSunFill className='t-icon' />
      <button
        className='t-button'
        onClick={handelToggol}
        style={dark ? { left: '0' } : { right: '0' }}
      />
    </article>
  )
}

export default Toggol
