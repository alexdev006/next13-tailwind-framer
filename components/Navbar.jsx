'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion.js';

const Navbar = () => (
  <motion.nav
    className={`${styles.xPaddings} py-8 relative`}
    variants={navVariants}
    initial="hidden"
    whileInView="show"
  >
    <div className="absolte w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" />
    </div>
  </motion.nav>
);
export default Navbar;
