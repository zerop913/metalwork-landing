import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: `Политика конфиденциальности — ${siteConfig.companyName}`,
  description: "Политика конфиденциальности и обработки персональных данных",
};

export default function PrivacyPage() {
  const dateStr = "10 марта 2026";

  return (
    <main className="min-h-screen bg-bg">
      <div className="max-w-3xl mx-auto px-6 py-24 lg:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted uppercase tracking-widest hover:text-accent transition-colors duration-200 mb-12"
        >
          ← На главную
        </Link>

        <h1 className="font-display text-3xl lg:text-4xl font-black uppercase tracking-wide text-text mb-2">
          Политика конфиденциальности
        </h1>
        <p className="font-mono text-xs text-muted uppercase tracking-widest mb-12">
          Актуальна с 10 марта 2026
        </p>

        <div className="space-y-10 font-body text-[15px] leading-relaxed text-text/80">
          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-text mb-4">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок сбора,
              хранения, использования и защиты персональных данных пользователей
              сайта, принадлежащего компании «{siteConfig.companyName}» (далее —
              Оператор).
            </p>
            <p className="mt-4">
              Используя сайт и оставляя заявку, вы подтверждаете своё согласие с
              условиями настоящей Политики. Если вы не согласны с её
              положениями, пожалуйста, воздержитесь от использования формы
              обратной связи.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-text mb-4">
              2. Какие данные мы собираем
            </h2>
            <p>
              При заполнении формы обратной связи мы можем получать следующие
              персональные данные:
            </p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                "Имя и фамилия",
                "Номер телефона",
                "Адрес электронной почты",
                "Описание проекта или вопроса",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Мы не собираем данные автоматически без вашего ведома, не
              используем сторонние трекеры и не продаём данные третьим лицам.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-text mb-4">
              3. Цели обработки данных
            </h2>
            <p>Ваши данные используются исключительно для:</p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                "Обработки и ответа на заявку",
                "Связи с вами по телефону или электронной почте",
                "Уточнения деталей вашего проекта",
                "Предоставления коммерческого предложения",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-text mb-4">
              4. Передача данных третьим лицам
            </h2>
            <p>
              Мы не передаём ваши персональные данные третьим лицам, за
              исключением случаев, когда это требуется по закону. В процессе
              обработки заявки данные могут передаваться сервису доставки
              электронной почты (Resend) исключительно в целях технической
              отправки уведомления нашему менеджеру. Сервис не хранит ваши
              данные и действует как транспорт.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-text mb-4">
              5. Хранение и защита данных
            </h2>
            <p>
              Данные из формы не хранятся в базе данных сайта. Заявка
              формируется и доставляется в виде письма на почту Оператора, после
              чего копия на стороне сайта не сохраняется.
            </p>
            <p className="mt-4">
              Сайт использует защищённое HTTPS-соединение. Мы принимаем разумные
              технические и организационные меры для защиты ваших данных от
              несанкционированного доступа.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-text mb-4">
              6. Права пользователя
            </h2>
            <p>
              В соответствии с Федеральным законом № 152-ФЗ «О персональных
              данных» вы вправе:
            </p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                "Запросить информацию о том, какие ваши данные обрабатываются",
                "Потребовать исправления неточных данных",
                "Потребовать удаления ваших данных",
                "Отозвать согласие на обработку в любое время",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Для реализации перечисленных прав свяжитесь с нами любым удобным
              способом.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-text mb-4">
              7. Контактная информация
            </h2>
            <p>
              По всем вопросам, связанным с обработкой персональных данных,
              обращайтесь:
            </p>
            <div className="mt-4 space-y-1">
              <p>
                <span className="text-muted">Телефон:</span>{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-accent hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <span className="text-muted">Email:</span>{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="text-muted">Адрес:</span> {siteConfig.address}
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-text mb-4">
              8. Изменения политики
            </h2>
            <p>
              Оператор оставляет за собой право изменять настоящую Политику в
              одностороннем порядке. Актуальная версия всегда доступна на этой
              странице. Продолжение использования сайта после внесения изменений
              означает ваше согласие с обновлённой редакцией.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
