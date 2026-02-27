"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Send,
  Calendar,
  BookOpen,
  Github,
} from "lucide-react";

const integrations = [
  { name: "Slack", icon: MessageSquare },
  { name: "Telegram", icon: Send },
  { name: "Google Calendar", icon: Calendar },
  { name: "Notion", icon: BookOpen },
  { name: "GitHub", icon: Github },
];

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="py-20 lg:py-28 px-5 lg:px-8 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Интегрируется с вашими инструментами
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Подключите сервисы, которые уже используете, и работайте без
            переключений
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 rounded-xl bg-white border border-gray-200 p-6 hover:shadow-lg hover:border-violet/30 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-muted flex items-center justify-center">
                <item.icon size={24} className="text-violet" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
