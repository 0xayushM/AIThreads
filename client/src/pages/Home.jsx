/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {useSnapshot} from 'valtio'
import { CustomButton } from '../components'
import {headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation} from '../config/motion'
import state from '../store'

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img src = './full_logo.png' alt = 'logo' className='h-24 object-contain'/>
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text italic font-extrabold'> DESIGN <br className='xl:block hidden'/> WITH AI</h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Create your unique and exclusive shirt with out brand-new 3D customization tool. <strong> Unleash your imagination</strong>{" "} and define your new style. 
              </p>
            </motion.div>
          </motion.div>
          <CustomButton
            type="filled"
            title="Customize It"
            handleClick = {() => state.intro = false}
            customStyles = 'w-fit px-6 py-2.5 font-bold text-lg'
          />
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
