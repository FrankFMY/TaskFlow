"use client";

const columns = [
  {
    title: "К выполнению",
    color: "bg-violet",
    cards: [
      {
        title: "Дизайн главной страницы",
        priority: "high",
        assignee: "АМ",
        tag: "Дизайн",
      },
      {
        title: "Настроить CI/CD пайплайн",
        priority: "medium",
        assignee: "ИК",
        tag: "DevOps",
      },
      {
        title: "Написать тесты для API",
        priority: "low",
        assignee: "ОС",
      },
    ],
  },
  {
    title: "В работе",
    color: "bg-amber",
    cards: [
      {
        title: "Интеграция платёжной системы",
        priority: "high",
        assignee: "ДВ",
        tag: "Backend",
      },
      {
        title: "Мобильная адаптация",
        priority: "medium",
        assignee: "АМ",
      },
    ],
  },
  {
    title: "Готово",
    color: "bg-green",
    cards: [
      {
        title: "Авторизация пользователей",
        priority: "medium",
        assignee: "ИК",
        tag: "Backend",
      },
      {
        title: "Онбординг нового сотрудника",
        priority: "low",
        assignee: "ОС",
      },
    ],
  },
];

const priorityStyles: Record<string, { label: string; className: string }> = {
  high: { label: "Высокий", className: "bg-red/10 text-red" },
  medium: { label: "Средний", className: "bg-amber/10 text-amber" },
  low: { label: "Низкий", className: "bg-green/10 text-green" },
};

export default function KanbanMockup() {
  return (
    <div
      className="rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden"
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <span className="w-3 h-3 rounded-full bg-red" />
        <span className="w-3 h-3 rounded-full bg-amber" />
        <span className="w-3 h-3 rounded-full bg-green" />
        <span className="ml-3 text-sm font-medium text-gray-500">
          TaskFlow Board
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 p-4">
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2 mb-1">
              <span className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
              <span className="text-xs font-semibold text-gray-700">
                {col.title}
              </span>
              <span className="ml-auto text-[10px] font-medium text-gray-400 bg-gray-100 rounded-full px-1.5 py-0.5">
                {col.cards.length}
              </span>
            </div>

            {col.cards.map((card) => {
              const prio = priorityStyles[card.priority];
              return (
                <div
                  key={card.title}
                  className="rounded-xl bg-white border border-gray-200 p-2.5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-[11px] font-medium text-gray-900 leading-tight mb-2">
                    {card.title}
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${prio.className}`}
                    >
                      {prio.label}
                    </span>
                    {card.tag && (
                      <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-violet-light text-violet">
                        {card.tag}
                      </span>
                    )}
                    <span className="ml-auto w-5 h-5 rounded-full bg-violet-light text-violet text-[8px] font-bold flex items-center justify-center">
                      {card.assignee}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
