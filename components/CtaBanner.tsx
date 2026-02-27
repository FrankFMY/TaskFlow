"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="cta" className="py-20 lg:py-28 px-5 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(124,58,237,0.15), transparent)",
            "radial-gradient(ellipse 60% 80% at 80% 60%, rgba(109,40,217,0.12), transparent)",
            "radial-gradient(ellipse 50% 50% at 50% 20%, rgba(124,58,237,0.08), transparent)",
          ].join(", "),
        }}
      />

      <div className="absolute top-10 left-[10%] w-64 h-64 rounded-full bg-violet/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-[15%] w-48 h-48 rounded-full bg-violet-dark/8 blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
          Начните бесплатно — без карты
        </h2>
        <p className="mt-5 text-gray-500 text-lg">
          Создайте аккаунт за 30 секунд и убедитесь, что TaskFlow — это то, что
          нужно вашей команде.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-violet text-white font-medium text-lg hover:bg-violet-dark transition-colors shadow-lg shadow-violet/25"
        >
          Попробовать бесплатно
          <ArrowRight size={20} />
        </a>
      </motion.div>
    </section>
  );
}
