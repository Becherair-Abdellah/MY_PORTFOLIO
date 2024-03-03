import React from 'react'
import Img from '../assets/send.png'
function Contact() {
  return (
<>
<div class="top-container mb-10 md:mb-14" >
    <main class="flex px-0 flex-col-reverse md:flex-row md:-my-10 md:my-0 md:flex-row-reverse py-10" ><div id="page-header-content" class="md:w-7/12 md:pl-5" ><div ><h2 class="text-2xl md:text-3xl lg:text-4xl pb-3 pt-0 lg:pt-5 font-bold  text-white" >
Send me an email
</h2><h3 class="text-xl md:text-2xl lg:text-3xl pb-5 pt-0 lg:pt-2 leading-relaxed lg:leading-[3rem] text-white" >
I appreciate direct contact, so you can send me an <strong ><a href="mailto:abdellah.becherair04@gmail.com" className='text-red-600 underline font-bold' >email</a></strong>
or send me a message directly on <a href="https://www.linkedin.com/in/abdellahbecherair/" className='text-red-600 underline font-bold' >LinkedIn</a></h3></div></div><div class="w-full mb-5 md:mb-0 md:w-5/12 md:block md:pr-5">
    <img src={Img} class="w-full lg:-my-10 md:-my-10 px-20 md:px-5 lg:px-10" />
</div>
</main>
{/* more info  */}

<main class=" mt-[5rem]" ><div class="contact-container flex flex-col gap-16" ><section><h3 class="text-2xl lg:text-4xl pb-3 text-red-600 font-bold" >Speaking</h3><p className='text-white md:text-2xl text-lg md:leading-[3rem]'>
I give talks in different a lot of events in any locations, if you want me to speak at your event please send email: <strong ><a href="mailto:abdellah.becherair04@gmail.com" className='text-red-600' >abdellah.becherair04@gmail.com</a></strong></p><p className='text-white md:text-2xl mt-[2rem] text-lg md:leading-[3rem]' >
If you are contacting me to speak , please prefix the email with "<strong >Invitation to speak at ...</strong>"
        and the event name.
</p></section>

<section><h3 class="text-2xl lg:text-4xl pb-3 text-red-600 font-bold" >Mentorship/trainings</h3>
<p className='text-white md:text-2xl  text-lg md:leading-[3rem]'>
If you are contacting me to get mentorship, training or even a call for help, I try to help as much as possible, but I would prefer if you use this contact form with as much information about your situation and what you seek from me as possible
</p>

</section>

</div></main>

</div>
</>
  )
}

export default Contact
