import './intro.css'
import { CgPentagonDown } from 'react-icons/cg'
import Me from '../../img/me.png'
//<a href='https://pngtree.com/so/Business'>Business png from pngtree.com/</a>

function intro() {
  return (
    <div className='intro'>
      <div className='intro-left'>
        <div className='left-wraper'>
          <h2 className='intro-welcome'>Hello, My name is</h2>
          <h1 className='intro-name'>Mostafa Abbas</h1>
          <div className='intro-title'>
            <div className='intro-title-wraper'>
              <div className='intro-title-item'>Front-end Developer</div>
              <div className='intro-title-item'>HTML</div>
              <div className='intro-title-item'>CSS</div>
              <div className='intro-title-item'>Java Script</div>
              <div className='intro-title-item'>React</div>
            </div>
          </div>
          <p className='intro-desc'>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>

        <CgPentagonDown color='#1b805e' className='intro-icon' />
      </div>
      <div className='intro-right'>
        <div className='intro-bg'></div>
        <img src={Me} alt='' className='intro-img' />
      </div>
    </div>
  )
}

export default intro
