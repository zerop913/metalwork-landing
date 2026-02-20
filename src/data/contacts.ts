import type { ContactInfo, NavLink } from "@/types";

export const contactInfo: ContactInfo = {
  phone: ["+7 (900) 000-00-00", "+7 (900) 000-00-01"],
  email: "info@metalwork.ru",
  address: "г. Москва, ул. Промышленная, д. 1, стр. 2",
  workingHours: "Пн–Пт: 9:00–19:00, Сб: 10:00–16:00",
  mapUrl: "https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755814&z=12",
};

export const navLinks: NavLink[] = [
  { label: "Услуги", href: "#services" },
  { label: "Как мы работаем", href: "#process" },
  { label: "Наши работы", href: "#portfolio" },
  { label: "Контакты", href: "#contacts" },
];

export const portfolioCategories = [
  { id: "all", label: "Все работы" },
  { id: "stairs", label: "Лестницы" },
  { id: "canopy", label: "Навесы" },
  { id: "frame", label: "Каркасы" },
  { id: "fence", label: "Заборы и ворота" },
  { id: "decor", label: "Декор" },
] as const;
