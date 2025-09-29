import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  variants?: Variants;
  duration?: number;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const PageTransition = ({
  children,
  variants = defaultVariants,
  duration = 0.5,
}: PageTransitionProps) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
