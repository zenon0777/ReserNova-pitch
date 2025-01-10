import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export const Button = ({ children, onClick, variant = "default", disabled = false, className, icon }:
    { children: React.ReactNode, onClick: () => void, variant?: "default" | "outline" | "text", disabled?: boolean, className?: string, icon?: React.ReactNode }) => {
    const baseClasses =
        "px-4 py-2 rounded-md font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center";
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
        text: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    };
    const disabledClasses = "opacity-50 cursor-not-allowed";

    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            className={classNames(
                baseClasses,
                variants[variant],
                disabled && disabledClasses,
                className
            )}
            whileHover={!disabled ? { scale: 1.05 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </motion.button>
    );
};
