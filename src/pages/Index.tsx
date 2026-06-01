import Icon from "@/components/ui/icon";

const TG_LINK = "https://t.me/julia_rumyantceva";
const PHOTO = "https://cdn.poehali.dev/projects/2aa2bacf-8484-4ffc-b714-e46beee1989c/bucket/94773d6b-64f8-435d-85ef-0b97a1ee3d52.jpg";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md" style={{ backgroundColor: "rgba(248,244,236,0.88)", borderBottom: "1px solid var(--green-pale)" }}>
        <div className="flex items-center gap-2">
          <span className="text-xl">🌿</span>
          <span className="font-semibold text-sm tracking-wide" style={{ fontFamily: "'Golos Text', sans-serif", color: "var(--green-deep)" }}>
            Юлия Румянцева
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: "var(--green-deep)" }}>
          <a href="#about" className="hover:opacity-60 transition-opacity">Обо мне</a>
          <a href="#services" className="hover:opacity-60 transition-opacity">Услуги</a>
          <a href="#consultation" className="hover:opacity-60 transition-opacity">Консультация</a>
          <a href="#contacts" className="hover:opacity-60 transition-opacity">Контакты</a>
        </div>
        <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="tg-btn text-sm font-medium px-4 py-2 rounded-full">
          Написать
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 opacity-20 organic-blob" style={{ backgroundColor: "var(--green-light)", transform: "translate(30%, -10%)" }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 opacity-15 organic-blob" style={{ backgroundColor: "var(--green-pale)", transform: "translate(-20%, 20%)" }} />
        </div>

        <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <p className="fade-up text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green-mid)" }}>
              Нутрициолог
            </p>
            <h1 className="fade-up fade-up-delay-1 section-title text-5xl md:text-6xl lg:text-7xl leading-none mb-6" style={{ color: "var(--green-deep)" }}>
              Питание,<br />
              <em className="not-italic" style={{ color: "var(--green-mid)" }}>которое</em><br />
              меняет жизнь
            </h1>
            <p className="fade-up fade-up-delay-2 text-base leading-relaxed mb-8 max-w-md" style={{ color: "var(--brown-warm)", fontFamily: "'Golos Text', sans-serif" }}>
              Индивидуальный подход к вашему здоровью. Без жёстких диет и стресса — только гармония с собой и природой.
            </p>
            <div className="fade-up fade-up-delay-3 flex flex-col sm:flex-row gap-4">
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="tg-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base">
                <Icon name="Send" size={18} />
                Записаться в Telegram
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base border transition-all hover:opacity-70" style={{ borderColor: "var(--green-light)", color: "var(--green-deep)" }}>
                Узнать больше
                <Icon name="ArrowDown" size={18} />
              </a>
            </div>

            <div className="fade-up fade-up-delay-4 flex gap-8 mt-12 pt-8" style={{ borderTop: "1px solid var(--green-pale)" }}>
              <div>
                <div className="section-title text-3xl" style={{ color: "var(--green-deep)" }}>800+</div>
                <div className="text-sm mt-1" style={{ color: "var(--brown-warm)" }}>клиентов</div>
              </div>
              <div>
                <div className="section-title text-3xl" style={{ color: "var(--green-deep)" }}>15 лет</div>
                <div className="text-sm mt-1" style={{ color: "var(--brown-warm)" }}>практики</div>
              </div>
              <div>
                <div className="section-title text-3xl" style={{ color: "var(--green-deep)" }}>95%</div>
                <div className="text-sm mt-1" style={{ color: "var(--brown-warm)" }}>достигают цели</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
              <div className="absolute inset-0 organic-blob overflow-hidden" style={{ backgroundColor: "var(--green-pale)" }}>
                <img
                  src={PHOTO}
                  alt="Юлия Румянцева — нутрициолог"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3" style={{ border: "1px solid var(--green-pale)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: "var(--green-pale)" }}>🥗</div>
                <div>
                  <div className="text-xs font-medium" style={{ color: "var(--green-deep)" }}>Сертифицированный</div>
                  <div className="text-xs" style={{ color: "var(--brown-warm)" }}>нутрициолог</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg" style={{ border: "1px solid var(--green-pale)" }}>
                <div className="text-xl mb-1">🌿</div>
                <div className="text-xs font-medium" style={{ color: "var(--green-deep)" }}>15 лет</div>
                <div className="text-xs" style={{ color: "var(--brown-warm)" }}>практики</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="leaf-divider mb-4">
            <p className="text-sm font-medium tracking-widest uppercase text-center px-4" style={{ color: "var(--green-mid)" }}>Обо мне</p>
          </div>
          <h2 className="section-title text-4xl md:text-5xl text-center mb-16" style={{ color: "var(--green-deep)" }}>
            Юлия Румянцева
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--brown-warm)", fontFamily: "'Golos Text', sans-serif" }}>
              <p className="text-lg font-medium" style={{ color: "var(--green-deep)" }}>Нутрициолог</p>
              <ul className="space-y-3">
                {[
                  "Член Общества Диетологов и Нутрициологов России",
                  "Специалист по психологии пищевого поведения",
                  "Сертифицированный тренер по аэробике и танцевальному фитнесу",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-base" style={{ color: "var(--green-mid)" }}>✔️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2 text-base font-medium" style={{ color: "var(--green-deep)" }}>
                За 15 лет мой проект дал результаты более 800 клиентам!
              </p>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="tg-btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm mt-2">
                <Icon name="MessageCircle" size={16} />
                Написать мне
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏛️", title: "Член ОДиН России", text: "Официальный член Общества Диетологов и Нутрициологов России" },
                { icon: "🧠", title: "Психология питания", text: "Специалист по психологии пищевого поведения" },
                { icon: "🏃‍♀️", title: "Фитнес-тренер", text: "Сертифицированный тренер по аэробике и танцевальному фитнесу" },
                { icon: "🌟", title: "800+ клиентов", text: "За 15 лет практики помогла сотням людей изменить жизнь" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-5 card-hover" style={{ border: "1px solid var(--green-pale)" }}>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "var(--green-deep)" }}>{item.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--brown-warm)" }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6" style={{ backgroundColor: "var(--green-pale)" }}>
        <div className="container max-w-5xl mx-auto">
          <div className="leaf-divider mb-4">
            <p className="text-sm font-medium tracking-widest uppercase text-center px-4" style={{ color: "var(--green-mid)" }}>Услуги</p>
          </div>
          <h2 className="section-title text-4xl md:text-5xl text-center mb-4" style={{ color: "var(--green-deep)" }}>
            Выберите свой формат
          </h2>
          <p className="text-center text-base mb-16 max-w-md mx-auto" style={{ color: "var(--brown-warm)" }}>
            Два формата работы — для тех, кто хочет быстрый старт, и для тех, кто ищет глубокую трансформацию
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Консультация */}
            <div className="bg-white rounded-3xl p-8 card-hover relative overflow-hidden" style={{ border: "1px solid var(--green-light)" }}>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 organic-blob" style={{ backgroundColor: "var(--green-mid)", transform: "translate(20%, -20%)" }} />
              <div className="relative">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="section-title text-3xl mb-3" style={{ color: "var(--green-deep)" }}>Консультация</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--brown-warm)" }}>
                  Разовая встреча — разберём ваш рацион, поставим цели и составим персональный план питания.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Анализ текущего питания",
                    "Разбор анализов и показателей",
                    "Базовый план питания",
                    "Рекомендации по дополнительному обследованию (лабораторным тестам и др.), при необходимости",
                    "Расшифровка анализов",
                    "Рекомендации по витаминам, нутрицевтикам и поддерживающим нелекарственным препаратам (при необходимости)",
                    "60–90 минут",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--green-deep)" }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--green-pale)" }}>
                        <Icon name="Check" size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="section-title text-3xl" style={{ color: "var(--green-deep)" }}>от 3 500 ₽</div>
                    <div className="text-xs" style={{ color: "var(--brown-warm)" }}>за сессию</div>
                  </div>
                  <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="tg-btn inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm">
                    <Icon name="Send" size={14} />
                    Записаться
                  </a>
                </div>
              </div>
            </div>

            {/* Сопровождение */}
            <div className="rounded-3xl p-8 card-hover relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--green-deep) 0%, var(--green-mid) 100%)" }}>
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10 organic-blob" style={{ backgroundColor: "white", transform: "translate(20%, -20%)" }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-4xl">🌱</div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "var(--green-pale)", color: "var(--green-deep)" }}>Популярное</span>
                </div>
                <h3 className="section-title text-3xl mb-3" style={{ color: "var(--cream)" }}>Сопровождение</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(248,244,236,0.8)" }}>
                  Месяц совместной работы с постоянной поддержкой, корректировкой рациона и ответами на все вопросы.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Персонализированная программа питания и нутрицевтической поддержки на основе анализов",
                    "Контроль за питанием на основании дневника питания и выполнением рекомендованных упражнений",
                    "Еженедельные консультации — обсуждаем прогресс и договариваемся о следующих действиях",
                    "Оперативная связь по мессенджеру, ответы на вопросы (рабочее время)",
                    "Поддержка и мотивация",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--cream)" }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                        <Icon name="Check" size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="section-title text-3xl" style={{ color: "var(--cream)" }}>от 8 000 ₽</div>
                    <div className="text-xs" style={{ color: "rgba(248,244,236,0.7)" }}>в месяц</div>
                  </div>
                  <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all hover:opacity-90" style={{ backgroundColor: "var(--cream)", color: "var(--green-deep)" }}>
                    <Icon name="Send" size={14} />
                    Записаться
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section id="consultation" className="py-24 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="leaf-divider mb-4">
            <p className="text-sm font-medium tracking-widest uppercase text-center px-4" style={{ color: "var(--green-mid)" }}>Консультация</p>
          </div>
          <h2 className="section-title text-4xl md:text-5xl text-center mb-4" style={{ color: "var(--green-deep)" }}>
            Как проходит работа
          </h2>
          <p className="text-center text-base mb-16 max-w-md mx-auto" style={{ color: "var(--brown-warm)" }}>
            Простые шаги к вашему новому самочувствию
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "💬", title: "Первый контакт", text: "Напишите мне в Telegram, расскажите о своих целях и вопросах" },
              { step: "02", icon: "📝", title: "Анкетирование", text: "Заполните короткую анкету о вашем здоровье, образе жизни и предпочтениях" },
              { step: "03", icon: "🎯", title: "Встреча", text: "Проводим онлайн-консультацию, разбираем ситуацию и составляем план" },
              { step: "04", icon: "🌿", title: "Результат", text: "Вы получаете персональный план питания и начинаете путь к здоровью" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative mx-auto mb-4 w-16 h-16">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: "var(--green-pale)" }}>
                    {item.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: "var(--green-deep)", color: "var(--cream)" }}>
                    {item.step.slice(-1)}
                  </div>
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--green-deep)" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--brown-warm)" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-3xl p-10 text-center relative overflow-hidden" style={{ backgroundColor: "var(--green-pale)" }}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-32 h-32 opacity-30 organic-blob" style={{ backgroundColor: "var(--green-light)" }} />
              <div className="absolute bottom-0 right-1/4 w-24 h-24 opacity-20 organic-blob" style={{ backgroundColor: "var(--green-mid)" }} />
            </div>
            <div className="relative">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="section-title text-3xl md:text-4xl mb-4" style={{ color: "var(--green-deep)" }}>
                Готовы начать?
              </h3>
              <p className="text-base mb-8 max-w-sm mx-auto" style={{ color: "var(--brown-warm)" }}>
                Первый шаг — бесплатная 15-минутная беседа. Расскажите о своей ситуации.
              </p>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="tg-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base">
                <Icon name="Send" size={18} />
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6" style={{ backgroundColor: "var(--green-deep)" }}>
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "var(--green-light)" }}>Контакты</p>
          <h2 className="section-title text-4xl md:text-5xl mb-6" style={{ color: "var(--cream)" }}>
            Всегда на связи
          </h2>
          <p className="text-base mb-12 max-w-sm mx-auto" style={{ color: "rgba(248,244,236,0.7)" }}>
            Пишите в любое время — я отвечаю в течение нескольких часов
          </p>

          <div className="flex justify-center mb-16">
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-medium text-base transition-all hover:opacity-90 hover:-translate-y-1"
              style={{ backgroundColor: "var(--cream)", color: "var(--green-deep)" }}>
              <Icon name="Send" size={20} />
              @julia_rumyantceva
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12" style={{ borderTop: "1px solid rgba(248,244,236,0.15)" }}>
            {[
              { icon: "🕐", label: "Режим работы", value: "Пн–Пт, 9:00–19:00" },
              { icon: "📍", label: "Онлайн-формат", value: "Работаю по всей России" },
              { icon: "💬", label: "Ответ", value: "В течение 2–3 часов" },
            ].map(item => (
              <div key={item.label}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs mb-1" style={{ color: "var(--green-light)" }}>{item.label}</div>
                <div className="text-sm font-medium" style={{ color: "var(--cream)" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-6 px-6 text-center text-xs" style={{ backgroundColor: "var(--green-deep)", color: "rgba(248,244,236,0.35)", borderTop: "1px solid rgba(248,244,236,0.08)" }}>
        © 2026 Юлия Румянцева — Нутрициолог. Сделано с заботой о вашем здоровье 🌿
      </footer>

      {/* Floating TG button mobile */}
      <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl md:hidden tg-btn">
        <Icon name="Send" size={22} />
      </a>
    </div>
  );
}
