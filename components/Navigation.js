"use client"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import TransitionLink from './TransitionLink'
import { useState } from 'react'
import Magnetic from '../common/Magnetic';
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [selected, setSelected] = useState('projects')
  const pathName = usePathname()

  return (
    <Disclosure as="nav" className={`${pathName != '/' ? 'lg:bg-transparent' : 'bg-white' } z-40 backdrop-blur-md`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex grow justify-between">
                
                <div className="flex items-center">
                  <p className='text-black text-lg font-bold font-mono'>Mckinsley Apollon</p>
                </div>

                {/* Mobile menu button */}
                <div className="flex md:hidden my-2">
                  <Disclosure.Button className="bg-white inline-flex items-center p-2 rounded-md text-gray-400 transition-all ease-in-out duration-1000  hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Magnetic>
                    <TransitionLink href="/" label="Projects" id="" />
                  </Magnetic>
                  <Magnetic>
                    <TransitionLink href="/about" label="About" id="about" />
                  </Magnetic>
                  <Magnetic>
                    <TransitionLink href="/contact" label="Contact" id="contact" />
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2 bg-white">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className={`block border-l-4 ${pathName == '/' ? 'bg-cyan-700 text-white' : 'bg-white' } py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-cyan-600 hover:text-white transition-all ease-in-out duration-100 sm:pl-5 sm:pr-6`}
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className={`block border-l-4 ${pathName == '/about' ? 'bg-cyan-700 text-white' : 'bg-white' } border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-cyan-600 hover:text-white transition-all ease-in-out duration-100 sm:pl-5 sm:pr-6`}
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className={`block border-l-4 ${pathName == '/contact' ? 'bg-cyan-700 text-white' : 'bg-white' } border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-cyan-600 hover:text-white transition-all ease-in-out duration-100 sm:pl-5 sm:pr-6`}
              >
                Contact
              </Disclosure.Button>            
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
