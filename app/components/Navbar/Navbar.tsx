'use client'

import { motion } from "framer-motion";
import styles from './Navbar.module.scss'
import { useState } from "react";
import { ToggleBtn } from "./ToggleBtn";
import cn from 'classnames'
import { MenuItems } from "./MenuItems";
import ProgressBar from 'next-nprogress-bar';

export const Navbar = () => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      <ProgressBar
          height="4px"
          color="#bbfd5e"
          shallowRouting
          appDirectory
        />
      <div>
      <ToggleBtn 
        toggle={toggleOpen}
        active={isOpen}
      />
      <motion.nav
        className={styles.wrapper}
        initial={{ width: 0, height: 0, borderRadius: 50 }}
        animate={isOpen ? { width: 300, height: '100vh', borderRadius: 0 } : { width: 0, height: 0 }}
        transition={{ type: 'tween' }}
        >
        {isOpen && <MenuItems 
          toggle={toggleOpen}
          active={isOpen}
        />}
      </motion.nav>
    </div>
    </>
  )  
};
