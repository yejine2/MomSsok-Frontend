import { motion } from "framer-motion";
import { DrawerProps } from "./types";

export const Drawer = ({ setDrawerOpen, children, className }: DrawerProps) => {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/70 z-[100]"
        onClick={() => setDrawerOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className={`fixed max-w-custom bottom-0 inset-x-0 mx-auto w-full min-h-10 bg-white rounded-t-2xl p-4 overflow-hidden ${className} z-[100]`}
        initial={{ y: 336 }}
        animate={{ y: 0 }}
        exit={{ y: 336 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        layout
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layout="position"
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};
