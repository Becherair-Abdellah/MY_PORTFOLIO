import { Link } from "react-router-dom";
// import img from "../assets/p2.jpg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import Footer from "./Footer";
import SocialMedia from "./SocialMedia";
import Img from "../assets/profile.jpg";
function About() {
  scrollTo(0,0)
  return (
    <>
      <main
        class="flex px-0 flex-col md:-my-10 md:my-0 md:flex-row border-b-2 pb-6"
        data-astro-cid-wu5dj4rx=""
      >
        <div
          id="page-header-content"
          class="md:w-7/12 md:pr-5"
          data-astro-cid-wu5dj4rx=""
        >
          <div className="text-white">
            <h1 class="text-3xl md:text-4xl lg:text-5xl md:mt-5 pb-5 text-gray-dark text-white">
              Hi, I'm <strong data-astro-cid-kh7btl4r="">Abdellah</strong>.
            </h1>
            <h2
              class="text-xl sm:text-2xl md:leading-[2.7rem] md:text-3xl pb-5 text-gray-dark leading-relaxed"
              data-astro-cid-kh7btl4r=""
            >
              <strong>Frontend Engineer</strong> at{" "}
              <strong data-astro-cid-kh7btl4r="">
                <a
                  href="https://ayrime.com"
                  target="_blank"
                  data-astro-cid-kh7btl4r=""
                >
                  Ayrime
                </a>
              </strong>
              , React Developer, Public{" "}
              <strong data-astro-cid-kh7btl4r="">Speaker</strong>, Video Courses{" "}
              <strong data-astro-cid-kh7btl4r="">Author</strong>,and{" "}
              <strong data-astro-cid-kh7btl4r="">
                Interested in web performance
              </strong>
              .
            </h2>
            <h2
              class="text-xl md:text-2xl pb-5 text-gray-dark leading-relaxed"
              data-astro-cid-kh7btl4r=""
            >
              Becides Web development, I like 🏋️{" "}
              <em data-astro-cid-kh7btl4r="">GYM</em>, 📚{" "}
              <em data-astro-cid-kh7btl4r="">Reading</em>,
            </h2>
            <div
              class="pt-0 md:pt-10 pb-5 md:pb-0 flex gap-6 md:gap-10 align-middle flex-wrap justify-center sm:justify-start"
              data-astro-cid-kh7btl4r=""
            >
              <SocialMedia />
            </div>
          </div>
        </div>
        <div class="w-full hidden mb-5 mt-12 md:mb-0 md:w-5/12 md:block md:pl-5">
          <img src={Img} class="hidden md:block" className="rounded-md" />
        </div>
      </main>
      <main
        class="flex px-0 flex-col md:-my-10 md:my-0 md:flex-row-reverse md:gap-[4rem]"
        data-astro-cid-wu5dj4rx=""
      >
        <div
          id="page-header-content"
          class="md:w-7/12 md:pr-5"
          data-astro-cid-wu5dj4rx=""
        >
          <div className="text-white">
            <div>
              <p className="mt-[3rem] text-white md:text-2xl text-xl md:leading-[2.4rem] leading-[1.9rem]">
                I am{" "}
                <strong className="text-red-600">Abdellah Becherair</strong> , a
                student at the Faculty of{" "}
                <strong className="text-red-600">Computer Science</strong> in
                Algeria (University Kasdi Merbah) in my second year of
                university. Currently, I work as a
                <strong className="text-red-600"> front-end developer</strong>{" "}
                in the field of web development, thanks to my self-directed
                learning. My journey in web development began in 2019 when I
                started learning the basics of the web: HTML, CSS, and{" "}
                <strong className="text-red-600">JavaScript</strong>
              </p>
              <p className="mt-10 text-white text-lg leading-[1.9rem] md:text-2xl ">
                I'm originally from Algeria 🇩🇿 living with my lovely family, a
                fantastic Mother 🧕 and Father 👨🏻‍💼{" "}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full mb-5 mt-12 md:mb-0 md:w-5/12 md:block md:pl-5">
          <img src={Img} class="hidden md:block" className="rounded-md" />
        </div>
      </main>

      <div
        class="flex gap-6 md:gap-10 flex-col flex-wrap mt-[5rem]  md:flex-nowrap md:flex-row"
        data-astro-cid-kh7btl4r=""
      >
        <section class="md:w-1/2" data-astro-cid-kh7btl4r="">
          <h3 class="pb-3 md:pb-5 text-3xl text-red-500 font-bold">
            Public Speaking
          </h3>
          <p  className="mt-[3rem] text-white md:text-2xl text-xl md:leading-[2.4rem] leading-[1.9rem]">
          I love to share and simplify things to people, and worked for a bit early in my career as a tutor, so I find public speaking to be the best way to utilize my skills
          I really love to give lectures in front of the audience, which allows me the opportunity to enhance my technical skills. If there is any event or conference, do not hesitate to <strong><a href="mailto:abdellah.becherair04@gmail.com">contact me</a></strong>
          </p>
        </section>
        <section
          class="md:w-1/2 md:max-h-[470px] flex justify-center"
          data-astro-cid-kh7btl4r=""
        >
          <img
            class="object-cover"
            src={Img}
            alt="a picture of me speaking"
            data-astro-cid-kh7btl4r=""
          />
        </section>
      </div>

      <div
        class="flex gap-6 md:gap-10 flex-col flex-wrap mt-[5rem]  md:flex-nowrap md:flex-row"
        data-astro-cid-kh7btl4r=""
      >
        <section class="md:w-1/2" data-astro-cid-kh7btl4r="">
          <h3 class="pb-3 md:pb-5 text-3xl text-red-500 font-bold">
            My Life
          </h3>
          <p  className="mt-[3rem] text-white md:text-2xl text-xl md:leading-[2.4rem] leading-[1.9rem]">
          Great to know more about me! Besides my passion for creating fast websites .reading 📚, and running 🏃‍♂️. Additionally, I love hitting the gym, delving into history books, and continuing my running journey.
          </p>
        </section>
        <section
          class="md:w-1/2 md:max-h-[470px] mt-8 flex justify-center"
          data-astro-cid-kh7btl4r=""
        >
          <img
            class="object-cover"
            src={Img}
            alt="a picture of me speaking"
            data-astro-cid-kh7btl4r=""
          />
        </section>
      </div>

    </>
  );
}

export default About;
