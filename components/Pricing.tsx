"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/мес",
    description: "Для небольших команд",
    features: [
      "5 проектов",
      "10 участников",
      "Канбан-доски",
      "Базовые интеграции",
    ],
    highlighted: false,
    cta: "Начать бесплатно",
  },
  {
    name: "Team",
    price: "$12",
    period: "/мес",
    description: "Для растущих команд",
    badge: "Популярный",
    features: [
      "Безлимит проектов",
      "50 участников",
      "Аналитика команды",
      "Приоритетная поддержка",
      "Все интеграции",
    ],
    highlighted: true,
    cta: "Попробовать бесплатно",
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/мес",
    description: "Для крупных организаций",
    features: [
      "Безлимит всего",
      "SSO авторизация",
      "API доступ",
      "Выделенный менеджер",
      "SLA 99.9%",
    ],
    highlighted: false,
    cta: "Связаться с нами",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Простые и прозрачные цены
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Выберите план, который подходит вашей команде
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-white ring-2 ring-violet shadow-xl lg:scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-bold text-dark">{plan.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{plan.description}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-dark">
                  {plan.price}
                </span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckCircle
                      size={18}
                      className={
                        plan.highlighted ? "text-violet" : "text-green"
                      }
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-violet text-white hover:bg-violet-dark"
                    : "border border-gray-200 text-gray-700 hover:border-violet hover:text-violet"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
