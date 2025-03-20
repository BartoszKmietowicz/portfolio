'use client';

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`flex justify-evenly items-center gap-4 hover:gap-6 hover:bg-teal-500 text-white font-bold rounded-lg transition-all px-6 py-3 text-lg   ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;