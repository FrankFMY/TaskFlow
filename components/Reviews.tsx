"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "TaskFlow полностью изменил нашу работу. Задачи больше не теряются, и вся команда видит прогресс в реальном времени.",
    name: "Алексей Морозов",
    role: "CEO",
    company: "СтартАп Про",
    color: "bg-violet",
  },
  {
    quote:
      "Наконец-то инструмент, который не перегружен функциями. Простой, удобный и делает ровно то, что нужно.",
    name: "Мария Светлова",
    role: "Арт-директор",
    company: "Дизайн Студио",
    color: "bg-amber",
  },
  {
    quote:
      "Интеграция с GitHub и Slack — это то, чего нам не хватало. Теперь разработка и менеджмент в одном окне.",
    name: "Дмитрий Волков",
    role: "CTO",
    company: "ТехноСофт",
    color: "bg-green",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 px-5 lg:px-8 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Нам доверяют команды
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Что говорят о TaskFlow те, кто уже перешёл на него
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-gray-200 p-7"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }, (_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-amber fill-amber"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-sm">
                &ldquo;{review.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span
                  className={`w-10 h-10 rounded-full ${review.color} text-white text-sm font-bold flex items-center justify-center`}
                >
                  {review.company[0]}
                </span>
                <div>
                  <p className="text-sm font-semibold text-dark">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {review.role}, {review.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
