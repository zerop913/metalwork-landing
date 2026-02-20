import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Заявка",
    description: "Оставляете заявку на сайте или звоните — мы перезваниваем в течение 15 минут",
    icon: "phone",
  },
  {
    id: 2,
    title: "Замер и расчёт",
    description: "Выезжаем на объект, делаем замеры и готовим точную смету бесплатно",
    icon: "ruler",
  },
  {
    id: 3,
    title: "Изготовление",
    description: "Производим изделие на собственном оборудовании строго по согласованному проекту",
    icon: "settings",
  },
  {
    id: 4,
    title: "Доставка",
    description: "Доставляем и монтируем изделие силами нашей бригады с соблюдением сроков",
    icon: "truck",
  },
  {
    id: 5,
    title: "Гарантия",
    description: "Даём гарантию на все виды работ. Обслуживаем и устраняем замечания бесплатно",
    icon: "shield",
  },
];
