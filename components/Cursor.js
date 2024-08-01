'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

function Cursor({isHovered}) {

    const size = isHovered ? 170 : 30;
    const circle = useRef()
    const mouse = useRef({
        x: 0,
        y: 0
    })

    const delayedMouse = useRef({
        x: 0,
        y: 0
    })

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.current = {
            x: clientX,
            y: clientY
        }

        moveCircle(mouse.current.x, mouse.current.y)
    }

    const lerp = (x, y, a) => x * (1 - a) + y * a

    const moveCircle = (x, y) => {
        gsap.set(circle.current, {x, y, xPercent: -50, yPercent: -50})
    }

    const animate = () => {
        const {x, y} = delayedMouse.current

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.07),
            y: lerp(y, mouse.current.y, 0.07),
        }

        moveCircle(delayedMouse.current.x, mouse.current.y)
        window.requestAnimationFrame(animate);
    }

    useEffect(() => {
        animate()
        window.addEventListener('mousemove', manageMouseMove)
        return () => window.removeEventListener('mousemove', manageMouseMove)
    })

  return (
    <div
        className='z-50 fixed top-0 left-0 bg-cyan-600 rounded-full pointer-events-none mix-blend-difference'
        ref={circle}
        style={{
            width: size,
            height: size,
            filter: `blur(${isHovered ? 10 : 0}px)`,
            transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`
        }}
    />
  )
}

export default Cursor