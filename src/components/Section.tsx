import { motion } from "framer-motion";

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      <div className="text-gray-300">{children}</div>
    </motion.section>
  );
}
