'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

function Transition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}>
            <div>
                <Navigation />
                {children}
            </div>
        </motion.div>
    )
}

export default Transition