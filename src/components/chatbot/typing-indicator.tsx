import { motion } from 'framer-motion';

const dotVariants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%',
  },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};

export const TypingIndicator = () => (
  <motion.div
    variants={containerVariants}
    initial="initial"
    animate="animate"
    style={{
      display: 'flex',
      alignItems: 'flex-end',
      gap: '4px',
      height: '16px',
    }}
  >
    <motion.span
      style={{
        width: '6px',
        height: '6px',
        backgroundColor: 'currentColor',
        borderRadius: '50%',
      }}
      variants={dotVariants}
    />
    <motion.span
      style={{
        width: '6px',
        height: '6px',
        backgroundColor: 'currentColor',
        borderRadius: '50%',
      }}
      variants={dotVariants}
    />
    <motion.span
      style={{
        width: '6px',
        height: '6px',
        backgroundColor: 'currentColor',
        borderRadius: '50%',
      }}
      variants={dotVariants}
    />
  </motion.div>
);