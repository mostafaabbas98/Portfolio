import './product.css'

function Product({ img, link }) {
  return (
    <section className='p'>
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className='p-img' />
      </a>
    </section>
  )
}

export default Product
