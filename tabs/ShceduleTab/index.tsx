import { motion } from "framer-motion";

const SheduleTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        default: {
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
    >
      <div style={{ padding: "3rem" }}>
        <h1>Schedule Tab</h1>
      </div>
    </motion.div>
  );
};

export default SheduleTab;
