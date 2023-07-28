import * as React from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ( {i} ) => {
  const {nameEle,topath,color,icon} = i;
  // const style = `border-[${color}]`
  return (
    <motion.li className={color}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={topath}>
      <div className="text-placeholder">
        {icon}
      {nameEle}
      </div>
      </Link>
    </motion.li>
  );
};
