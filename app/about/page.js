'use client'
import { useEffect } from 'react';
import '../gradientStyles.scss'
import { DocumentArrowDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

const socials = [
  { label: 'EMAIL', text: 'mckinsleyapollon@hotmail.com', link: 'mailto:mckinsleyapollon@hotmail.com' },
  { label: 'LINKEDIN', text: 'www.linkedin.com/in/mcapollon', link: 'https://linkedin.com/in/mcapollon' },
  { label: 'GITHUB', text: 'www.github.com/mcapollon', link: 'https://github.com/mcapollon' },
]

export default function About() {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const interBubble = document.querySelector('.interactive');
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
          move();
        });
      }

      window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });

      move();
    });
  })

  return (
    <div className="relative h-screen">
      <div className=" absolute w-full py-6">
        <div className='mx-auto max-w-7xl pt-12 px-6 lg:px-8 py-24'>
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img
                  alt=""
                  src="/assets/profilepic.jpeg"
                  className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                />
                <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                >
                  <div
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#a8d5ff] to-[#317cfc] opacity-40"
                  />
                </div>
                <ul role="list" className="relative divide-y divide-gray-200">
                  {socials.map((social, i) => (
                    <li key={i} className="py-4">
                      <h1 className="text-lg tracking-widest font-semibold leading-7 text-white capitalize">{social.label}</h1>
                      <a href={social.link}><p className="text-md leading-7 text-white">{social.text}</p></a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="my-auto">
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Hi I'm Mckinsley
                </h1>
                <div className="max-w-xl">
                  <p className="mt-6">
                    An experienced Fullstack Developer with 5 years of expertise, dedicated to delivering high-quality software solutions to users. Focused on successful project completion and ensuring timely delivery. Passionate about creating exceptional software solutions that exceed client expectations. Committed to providing an outstanding user experience.
                  </p>

                  <div className='grid grid-cols-1 w-1/2'>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-x-1.5 border-2 border-gray-200 rounded-md bg-white/50 px-3 py-2 text-sm font-semibold text-black drop-shadow-lg shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                    >
                      <DocumentArrowDownIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
                      <Link href='/cv/CV_2024_AUG_ENG.pdf'>
                      Download Resume
                      </Link>
                    </button>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-x-1.5 rounded-md border-2 border-gray-200 bg-white/50 px-3 py-2 text-sm font-semibold text-black drop-shadow-lg shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                    >
                      <DocumentArrowDownIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
                      <Link href='/cv/CV_2024_AUG_FR.pdf'>
                      Télécharger CV
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="mt-10 gap-8 border-t border-gray-900/10 pt-4">
            <p className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">Education</p>
            <p className="text-sm font-semibold leading-6 text-gray-600">AEC - College Rosemont</p>
          </div>
          <div className="mt-10 gap-8 grid grid-cols-1 border-t border-gray-900/10 pt-4 sm:grid-cols-3">
            <div>
              <p className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">Languages</p>
              <p className="text-sm font-semibold leading-6 text-gray-600">Java, PHP, HTML5, CSS3 and JavaScript</p>
            </div>
            <div>
              <p className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">Technologies</p>
              <p className="text-sm font-semibold leading-6 text-gray-600">Git, CI/CD, SQL, NoSQL, WordPress and Supabase</p>
            </div>
            <div>
              <p className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">Frameworks</p>
              <p className="text-sm font-semibold leading-6 text-gray-600">React, MySQL, SCSS/SASS and Tailwind</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-bg-about">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </div>
  )
}
