'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useForm } from "react-hook-form"
import axios from 'axios'
import '../gradientStyles.scss'

export default function Contact() {
    const [isSending, setIsSending] = useState()
    const [sent, setIsSent] = useState()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {

        setIsSending(true)

        axios.post("/api/send/",
            {
                firstName: data.firstName,
                lastName: data.lastName,
                company: data.company,
                email: data.email,
                phoneNumber: data.phoneNumber,
                message: data.message
            }
        ).then((response) => {
            setIsSending(false)
            setIsSent(true)
            setTimeout(() => {
                setIsSent(false)
                reset()
            }, 3000)
            console.log(response.data, 'data')

        }).catch((error) => {
            setIsSending(false)
            console.log(error, 'error')
        });
    }

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
        <div className='relative h-screen'>
            <div className='absolute items-center w-full grid grid-cols-1 py-24'>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let's get in touch</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Have a project idea ? Let's make it happen.
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    {...register("firstName", { required: true })}
                                    id="firstName"
                                    type="text"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.firstName?.type === "required" && (
                                    <p className='block text-xs font-light leading-6 text-red-600'>Please enter your first name</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    {...register("lastName", { required: true })}
                                    id="lastName"
                                    type="text"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.lastName?.type === "required" && (
                                    <p className='block text-xs font-light leading-6 text-red-600'>Please enter your last name</p>
                                )}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                Company
                            </label>
                            <div className="mt-2.5">
                                <input
                                    {...register("company")}
                                    id="company"
                                    name="company"
                                    type="text"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    {...register("email", { required: true })}
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email?.type === "required" && (
                                    <p className='block text-xs font-light leading-6 text-red-600'>Please enter your email</p>
                                )}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone number
                            </label>
                            <div className="relative mt-2.5">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="country" className="sr-only">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm appearance-none"
                                    >
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                    />
                                </div>
                                <input
                                    {...register("phoneNumber")}
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    {...register("message", { required: true })}
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                                {errors.message?.type === "required" && (
                                    <p className='block text-xs font-light leading-6 text-red-600'>Please enter your message</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="flex w-full justify-center items-center gap-2 rounded-md bg-cyan-700 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >

                            {!sent && !isSending && (
                                <span>Let's talk</span>
                            )}


                            {isSending && !sent && (
                                <>
                                    Sending
                                    <svg className='flex animate-spin h-10' viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="400" cy="400" fill="none"
                                            r="200" stroke-width="45" stroke="#b9c2e0"
                                            strokeDasharray="863 1400"
                                            strokeLinecap="round" />
                                    </svg>
                                </>

                            )}

                            {sent && (
                                <>
                                    Sent
                                    <svg className='h-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,300,150">
                                        <g fill="#b9c2e0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(4.53333,4.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21.707,12.707l-7.56,7.56c-0.188,0.188 -0.442,0.293 -0.707,0.293c-0.265,0 -0.52,-0.105 -0.707,-0.293l-3.453,-3.453c-0.391,-0.391 -0.391,-1.023 0,-1.414c0.391,-0.391 1.023,-0.391 1.414,0l2.746,2.746l6.853,-6.853c0.391,-0.391 1.023,-0.391 1.414,0c0.391,0.391 0.391,1.023 0,1.414z"></path></g></g>
                                    </svg>
                                </>

                            )}

                        </button>
                    </div>
                </form>
            </div>
            <div className="gradient-bg">
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
