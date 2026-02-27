const footerLinks = {
  product: {
    title: "Продукт",
    links: [
      { label: "Возможности", href: "#features" },
      { label: "Цены", href: "#pricing" },
      { label: "Интеграции", href: "#integrations" },
    ],
  },
  company: {
    title: "Компания",
    links: [
      { label: "О нас", href: "#" },
      { label: "Блог", href: "#" },
      { label: "Карьера", href: "#" },
    ],
  },
  contacts: {
    title: "Контакты",
    links: [
      { label: "hello@taskflow.io", href: "mailto:hello@taskflow.io" },
      { label: "Москва, Россия", href: "#" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-14 lg:py-20 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#" className="text-xl font-bold">
            Task<span className="text-violet">Flow</span>
          </a>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
            Современный инструмент для управления задачами и проектами. Простой,
            быстрый, удобный.
          </p>
        </div>

        {Object.values(footerLinks).map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold text-white mb-4">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-8 border-t border-white/10">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
