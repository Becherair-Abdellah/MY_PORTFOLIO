import SocialMedia from './home/SocialMedia'
function Footer({year,name}) {

  return (
    <div className='text-center text-white p-4'>
      <div className='w-fit text-center mx-auto mb-5 '><SocialMedia/></div>
      © {year} <strong className='text-TextredColor'>{name}</strong>. All Rights Reserved.
    </div>
  )
}
export default Footer
