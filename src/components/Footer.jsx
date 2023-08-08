import SocialMedia from './home/SocialMedia'
function Footer() {
  const currentYear = new Date().getFullYear();
  const name = 'Abdellah';
  return (
    <div className='text-center bg-gray-800 text-white p-4'>
      <div className='w-fit text-center mx-auto mb-5 '><SocialMedia/></div>
      © {currentYear} <strong className='text-TextredColor'>{name}</strong>. All Rights Reserved.
    </div>
  )
}
export default Footer
