import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export const Card = ({ children, className, hover = false }: { children: React.ReactNode, className?: string, hover?: boolean }) => {
  return (
    <motion.div
      className={classNames(
        "rounded-lg shadow-lg border bg-white overflow-hidden w-full",
        hover && "transition-all duration-300 hover:shadow-xl",
        className
      )}
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={classNames("p-6 border-b bg-gradient-to-r from-blue-600 to-purple-600", className)}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <h2 className={classNames("text-2xl font-bold text-white", className)}>
      {children}
    </h2>
  );
};

export const CardContent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={classNames("p-8", className)}>
      {children}
    </div>
  );
};
