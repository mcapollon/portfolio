"use client"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaceSmileIcon } from '@heroicons/react/20/solid'
import TransitionLink from './TransitionLink'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-white backdrop-blur-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex grow justify-between pr-9">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all ease-in-out duration-1000  hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center">
                  <p className='text-black text-lg font-bold font-mono'>Mckinsley Apollon</p>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {/* <a
                    href="/"
                    className="transition-all ease-in-out duration-1000 inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-mono font-bold text-black hover:border-black/90"
                  >
                    Projects
                  </a> */}
                  <TransitionLink href="/" label="Projects"/>
                  {/* <a
                    href="/about"
                    className="transition-all ease-in-out duration-1000 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-black/90 font-mono"
                  >
                    About
                  </a> */}
                  <TransitionLink href="/about" label="About" />
                  {/* <a
                    href="/blog"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-black/90 font-mono"
                  >
                    Blog
                  </a> */}
                  {/* <a
                    href="/music"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-black/90 font-mono"
                  >
                    Music
                  </a> */}
                  {/* <a
                    href="/contact"
                    className="transition-all ease-in-out duration-1000 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-black/90 font-mono"
                  >
                    Contact
                  </a> */}
                  <TransitionLink href="/contact" label="Contact" />
                </div>
              </div>
              {/* <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-cyan-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-900/70"
                  >
                    <FaceSmileIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    Contact Me
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
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
