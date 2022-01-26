import './contect.css'
import { ImPhone, ImLocation2, ImMail } from 'react-icons/im'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contect = () => {
  const formRef = useRef()

  const handelSubmit = (e) => {
    e.preventDefault()
    if (
      e.target[0].value &&
      e.target[1].value &&
      e.target[2].value &&
      e.target[3].value
    ) {
      emailjs
        .sendForm(
          'service_zwlq7lz',
          'template_uclrxis',
          formRef.current,
          'user_W9JQanTNVAcFCw2AXSWNj'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
    e.target.reset()
  }

  return (
    <section className='c'>
      <div className='c-left'>
        <div className='c-bg'></div>
        <div className='c-wraper'>
          <h1 className='c-title'>Let's discuss your project</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <ImPhone className='c-icon' />
              +02 01234556752
            </div>
            <div className='c-info-item'>
              <ImLocation2 className='c-icon' />
              mostafaabbas2902@gmail.com
            </div>
            <div className='c-info-item'>
              <ImMail className='c-icon' />
              Helwan City, Cairo Egypt
            </div>
          </div>
        </div>
      </div>
      <div className='c-right'>
        <p className='c-desc'>
          <b>What’s your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. me.
        </p>
        <form ref={formRef} onSubmit={handelSubmit}>
          <input type='text' placeholder='Name' name='user-name' required />
          <input type='email' placeholder='Email' name='user-email' required />
          <input
            type='text'
            placeholder='Subject'
            name='user-subject'
            required
          />
          <textarea name='user-msg' rows='5' required></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contect
