"use client";

import { motion } from "framer-motion";
import { Columns3, Clock, BarChart3 } from "lucide-react";

function MiniKanban() {
  return (
    <div className="flex gap-3 p-4">
      {[
        { color: "bg-violet", heights: ["h-8", "h-12", "h-6"] },
        { color: "bg-amber", heights: ["h-10", "h-6"] },
        { color: "bg-green", heights: ["h-6", "h-10", "h-8"] },
      ].map((col, i) => (
        <div key={i} className="flex-1 flex flex-col gap-2">
          <div className={`h-1.5 rounded-full ${col.color} w-12`} />
          {col.heights.map((h, j) => (
            <div
              key={j}
              className={`${h} rounded-lg bg-white border border-gray-200/50 shadow-sm`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function MiniCalendar() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 21 }, (_, i) => {
          const isHighlighted = [4, 9, 14, 18].includes(i);
          const isToday = i === 9;
          return (
            <div
              key={i}
              className={`h-7 rounded-md flex items-center justify-center text-[10px] font-medium ${
                isToday
                  ? "bg-violet text-white"
                  : isHighlighted
                    ? "bg-amber/20 text-amber"
                    : "bg-white text-gray-400"
              }`}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-2 p-2 rounded-lg bg-white">
        <span className="w-2 h-2 rounded-full bg-amber" />
        <span className="text-[10px] text-gray-500">
          Дедлайн: Дизайн-ревью
        </span>
      </div>
    </div>
  );
}

function MiniChart() {
  const bars = [65, 80, 45, 90, 70, 55, 85];
  return (
    <div className="p-4">
      <div className="flex items-end gap-2 h-28">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md bg-violet/70"
              style={{ height: `${h}%` }}
            />
            <span className="text-[8px] text-gray-400">
              {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"][i]}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-green" />
          <span className="text-[10px] text-gray-500">+23% продуктивность</span>
        </div>
        <span className="text-[10px] font-semibold text-violet">↑ 12%</span>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Columns3,
    title: "Канбан-доски",
    description:
      "Визуализируйте рабочий процесс с гибкими канбан-досками. Перетаскивайте задачи, добавляйте метки и приоритеты — управляйте проектами интуитивно.",
    illustration: MiniKanban,
  },
  {
    icon: Clock,
    title: "Дедлайны и напоминания",
    description:
      "Никогда не пропустите срок. Автоматические напоминания, календарь дедлайнов и уведомления в реальном времени для всей команды.",
    illustration: MiniCalendar,
  },
  {
    icon: BarChart3,
    title: "Аналитика команды",
    description:
      "Отслеживайте продуктивность, находите узкие места и принимайте решения на основе данных. Детальные отчёты по каждому участнику.",
    illustration: MiniChart,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Всё для эффективной работы
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Инструменты, которые помогают команде фокусироваться на главном
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {features.map((feat, i) => {
            const Illustration = feat.illustration;
            const reversed = i % 2 !== 0;
            return (
              <motion.div
                key={feat.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-muted mb-5">
                    <feat.icon size={24} className="text-violet" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">{feat.title}</h3>
                  <p className="mt-3 text-gray-500 leading-relaxed max-w-md">
                    {feat.description}
                  </p>
                </div>
                <div
                  className={`rounded-2xl bg-violet-light p-2 ${reversed ? "lg:order-1" : ""}`}
                >
                  <Illustration />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
