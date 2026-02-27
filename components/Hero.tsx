"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import KanbanMockup from "./KanbanMockup";

export default function Hero() {
  return (
    <section className="pt-28 lg:pt-36 pb-20 lg:pb-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight">
            Задачи под контролем.{" "}
            <span className="text-violet">Команда в потоке.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
            Канбан-доски, дедлайны, аналитика — всё, что нужно для продуктивной
            работы вашей команды в одном инструменте.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-violet text-white font-medium hover:bg-violet-dark transition-colors"
            >
              Попробовать бесплатно
              <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:border-violet hover:text-violet transition-colors"
            >
              <Play size={18} />
              Смотреть демо
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["bg-violet", "bg-amber", "bg-green", "bg-red"].map((bg, i) => (
                <span
                  key={i}
                  className={`w-8 h-8 rounded-full ${bg} border-2 border-white`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-900">10 000+</span>{" "}
              команд уже используют
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden sm:block lg:scale-100 origin-top lg:origin-center"
        >
          <KanbanMockup />
        </motion.div>
      </div>
    </section>
  );
}
