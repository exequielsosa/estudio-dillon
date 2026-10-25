import Image from "next/image";
import Link from "next/link";
import SeoContactos from "@/components/seo/seoContactos";
import { contactoFAQs } from "@/lib/faqs/contacto";
import { TarjetaFormulario } from "@/components/formContact";
import { Isotipo } from "@/components/brand/Logo";
import { LINK, WA, PROSA, IconoWhatsApp, BotonWhatsApp, ListaCheck, PreguntasServicio } from "@/components/servicio/ServicioUI";

const EMAIL = "ma.eugenia.dillon@gmail.com";
const SIN_MARCA = "object-cover scale-[1.1] origin-top-left";

const IconoTel = ({ color = "#FFFFFF", className = "w-[22px] h-[22px]" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);
const IconoMail = () => (
  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="#14213D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
  </svg>
);
const IconoLugar = () => (
  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="#8A5A10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
  </svg>
);

const Canal = ({ href, externo, fondo, icono, etiqueta, valor, detalle, className = "" }) => {
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`flex items-center gap-3.5 p-3.5 lg:p-4 rounded-2xl bg-white border border-tinta-100 ${href ? "hover:border-tinta-300 transition-colors" : ""} ${className}`}>
      <span className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${fondo}`}>{icono}</span>
      <span className="flex flex-col gap-0.5 min-w-0">
        <span className="text-xs font-extrabold tracking-[0.1em] text-tinta-500">{etiqueta}</span>
        <span className="text-base lg:text-[17px] font-extrabold text-tinta-900 break-words">{valor}</span>
        <span className="text-[13px] text-tinta-500">{detalle}</span>
      </span>
    </Tag>
  );
};

const PASOS = [
  { n: "01", titulo: "Nos contás tu caso", texto: "Por WhatsApp, teléfono o el formulario: tu actividad, régimen y qué necesitás." },
  { n: "02", titulo: "Coordinamos una entrevista", texto: "Presencial o virtual, según lo que te quede más cómodo." },
  { n: "03", titulo: "Te decimos cómo avanzar", texto: "Revisamos tu situación, respondemos tus dudas y te explicamos qué documentación hace falta." },
];

const Eyebrow = ({ children }) => <p className="text-xs lg:text-[13px] font-bold tracking-[0.2em] text-ambar-800">{children}</p>;
const H2 = ({ id, children, className = "" }) => (
  <h2 id={id} className={`scroll-mt-28 text-[24px] lg:text-[32px] font-extrabold tracking-[-0.02em] leading-[1.18] text-tinta-900 ${className}`}>{children}</h2>
);

const Contacto = () => {
  return (
    <>
      <SeoContactos />
      <main className="flex flex-col w-full">
        {/* Arriba de todo: canales y formulario */}
        <section className="relative -mt-4 w-screen ml-[calc(50%-50vw)] bg-tinta-50 border-b border-tinta-100 overflow-hidden">
          <Isotipo size={520} className="hidden lg:block absolute -left-40 -bottom-52 opacity-[0.04] pointer-events-none" />
          <div className="relative max-w-[1307px] mx-auto px-4 pt-6 pb-8 lg:pt-12 lg:pb-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_500px] gap-6 lg:gap-20 items-start [&>*]:min-w-0">
            <div className="flex flex-col gap-3.5 lg:gap-[18px]">
              <nav aria-label="Migas de pan" className="text-[13px] lg:text-sm font-semibold text-tinta-500">
                <Link href="/" className="text-tinta-500 hover:text-tinta-900">Inicio</Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <span className="text-tinta-900">Contacto</span>
              </nav>
              <Eyebrow>CONTACTO</Eyebrow>
              <h1 className="text-[38px] lg:text-[58px] font-extrabold tracking-[-0.035em] leading-[1.04] text-tinta-900">Contacto</h1>
              <p className="text-lg lg:text-[22px] font-semibold leading-snug text-tinta-900">Comunicate con Estudio Contable Dillon</p>
              <p className="max-w-[560px] text-[15px] lg:text-[17px] leading-relaxed text-tinta-500">
                Elegí el canal que te quede más cómodo. Te respondemos rápido y sin tecnicismos.
              </p>

              {/* Mobile: acciones directas primero */}
              <div className="lg:hidden flex flex-col gap-2.5">
                <BotonWhatsApp className="w-full" />
                <a href="tel:+541158959823" className="flex items-center justify-center gap-2.5 text-base font-extrabold text-white bg-tinta-900 p-[15px] rounded-[14px]">
                  <IconoTel className="w-5 h-5" /><span className="text-white">Llamar al +54 11 5895-9823</span>
                </a>
              </div>

              <div className="hidden lg:flex flex-col gap-2.5 mt-2.5 max-w-[560px]">
                <Canal href={WA} externo fondo="bg-whatsapp" icono={<IconoWhatsApp className="w-[22px] h-[22px]" />}
                  etiqueta="WHATSAPP · RESPUESTA MÁS RÁPIDA" valor="+54 11 5895-9823" detalle="Escribinos y te respondemos en el día" />
                <Canal href="tel:+541158959823" fondo="bg-tinta-900" icono={<IconoTel />}
                  etiqueta="TELÉFONO" valor="+54 11 5895-9823" detalle="Llamanos y te atendemos" />
                <Canal href={`mailto:${EMAIL}`} fondo="bg-tinta-50" icono={<IconoMail />}
                  etiqueta="EMAIL" valor={EMAIL} detalle="Para enviar documentación" />
                <Canal fondo="bg-ambar-50" icono={<IconoLugar />}
                  etiqueta="ATENCIÓN" valor="CABA · presencial y online" detalle="Clientes en todo el país" />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <TarjetaFormulario titulo="Contanos tu consulta" bajada="Te respondemos por email para coordinar los próximos pasos." ubicacion="pagina_contacto" />
              <div className="lg:hidden flex flex-col gap-2.5 mt-1">
                <Canal href={`mailto:${EMAIL}`} fondo="bg-tinta-50" icono={<IconoMail />}
                  etiqueta="EMAIL" valor={EMAIL} detalle="Para enviar documentación" />
                <Canal fondo="bg-ambar-50" icono={<IconoLugar />}
                  etiqueta="ATENCIÓN" valor="CABA · presencial y online" detalle="Clientes en todo el país" />
              </div>
            </div>
          </div>
        </section>

        {/* Qué pasa después */}
        <section aria-label="Cómo sigue" className="mt-11 lg:mt-20">
          <Eyebrow>CÓMO SIGUE</Eyebrow>
          <p className="mt-1.5 lg:mt-2 text-2xl lg:text-[32px] font-extrabold tracking-tight text-tinta-900">Qué pasa después de que nos escribís</p>
          <ol className="mt-5 lg:mt-7 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {PASOS.map((p, i) => (
              <li key={p.n} className={`flex flex-col gap-2.5 pt-4 lg:pt-5 border-t-2 ${i === 0 ? "border-ambar-500" : "border-tinta-100"}`}>
                <span className="text-[32px] lg:text-[40px] font-extrabold leading-none tracking-[-0.03em] text-ambar-800">{p.n}</span>
                <span className="text-lg lg:text-xl font-extrabold text-tinta-900">{p.titulo}</span>
                <span className="text-[15px] leading-relaxed text-tinta-500">{p.texto}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Intro (texto actual) */}
        <section className="mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-4 lg:gap-[72px] [&>*]:min-w-0">
          <div className="flex flex-col gap-2.5 lg:gap-[18px]">
            <Eyebrow>NUESTRA FORMA DE TRABAJAR</Eyebrow>
            <p className="text-[25px] lg:text-[34px] font-extrabold tracking-[-0.03em] leading-[1.2] text-tinta-900">
              La contabilidad y los impuestos pueden ser complejos, pero la explicación <span className="text-ambar-800">no tiene por qué serlo.</span>
            </p>
          </div>
          <div className={PROSA}>
            <p>
              En Estudio Contable Dillon estamos a disposición para atender tus
              consultas y asesorarte de manera clara, profesional y
              personalizada. Si necesitás un contador en Capital Federal, querés
              ordenar tu situación fiscal, consultar por{" "}
              <Link
                href="/monotributo"
                className={LINK}
              >
                monotributo
              </Link>
              ,{" "}
              <Link href="/impuestos" className={LINK}>
                liquidación de impuestos
              </Link>
              ,{" "}
              <Link href="/sueldos" className={LINK}>
                sueldos
              </Link>
              ,{" "}
              <Link href="/tramites" className={LINK}>
                trámites societarios o certificados contables
              </Link>
              , podés comunicarte con nosotros para recibir orientación.
            </p>
            <p>
              Sabemos que muchas veces las consultas contables aparecen cuando
              ya existe una urgencia: un{" "}
              <Link
                href="/vencimientos"
                className={LINK}
              >
                vencimiento
              </Link>{" "}
              próximo, una deuda impositiva, una intimación, una
              recategorización pendiente, una sociedad que necesita actualizar
              documentación o una empresa que requiere ordenar la liquidación de
              sueldos. Por eso, nuestro objetivo es responder con rapidez,
              entender tu situación y ayudarte a encontrar el camino más
              conveniente.
            </p>
            <p>
              Trabajamos con personas, profesionales independientes,
              monotributistas, responsables inscriptos, emprendedores, startups,
              pymes y sociedades. Cada caso requiere una mirada particular,
              porque no todos los contribuyentes tienen las mismas obligaciones
              ni los mismos problemas. Por eso, antes de ofrecer una solución,
              escuchamos tu consulta, revisamos la información básica y te
              indicamos cuáles son los pasos a seguir.
            </p>
          </div>
        </section>

        {/* Asesoramiento */}
        <section className="mt-12 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[72px] items-center [&>*]:min-w-0">
            <div className={PROSA}>
              <H2 id="asesoramiento">Asesoramiento contable en Capital Federal</H2>
              <p>
  Nuestro estudio brinda asesoramiento contable, impositivo, laboral
  y societario desde CABA, con atención para clientes de Capital
  Federal y también de otras jurisdicciones del país. Gracias a las
  herramientas digitales actuales, muchas gestiones pueden
  resolverse de manera online, sin necesidad de traslados
  innecesarios.
</p>
            </div>
            <div className="relative order-first lg:order-none aspect-[16/9] lg:aspect-auto lg:h-[380px] rounded-2xl lg:rounded-3xl overflow-hidden bg-tinta-50">
              <Image src="/stock/stock50.jpg" alt="Asesoramiento contable en CABA" fill sizes="(max-width: 1024px) 100vw, 600px" className={SIN_MARCA} />
            </div>
          </div>
          <div className={`mt-6 lg:mt-8 ${PROSA}`}>
            <p>
  Podés contactarnos si necesitás ayuda con:
</p>
            <ListaCheck columnas={4}>
              <li>Alta, baja o recategorización de monotributo.</li>
              <li>Control de facturación y vencimientos.</li>
              <li>Inscripción o liquidación de Ingresos Brutos.</li>
              <li>Liquidación de IVA, Ganancias y Bienes Personales.</li>
              <li>Presentación de declaraciones juradas.</li>
              <li>Regularización de deudas impositivas o previsionales.</li>
              <li>Planes de facilidades de pago.</li>
              <li>Liquidación de sueldos y cargas sociales.</li>
              <li>Alta temprana de empleados.</li>
              <li>Confección de recibos de sueldo.</li>
              <li>Trámites societarios ante IGJ.</li>
              <li>Constitución o modificación de sociedades.</li>
              <li>Certificados contables.</li>
              <li>Manifestación de bienes.</li>
              <li>Certificado de ingresos.</li>
              <li>Origen lícito de fondos.</li>
            </ListaCheck>
            <p>
  La idea es que puedas contarnos qué necesitás y recibir una
  respuesta concreta, sin vueltas ni explicaciones innecesariamente
  técnicas.
</p>
          </div>
        </section>

        {/* Cómo podemos ayudarte: un párrafo por perfil */}
        <section className="mt-12 lg:mt-24">
          <H2 id="ayuda">Cómo podemos ayudarte</H2>
          <div className="mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
              <article key="0" className="flex flex-col gap-2.5 p-5 lg:p-[26px] rounded-[20px] bg-tinta-50 [&_p]:text-[15px] lg:[&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-tinta-700">
                <p className="!text-[13px] !font-extrabold tracking-[0.12em] !text-ambar-800">01 · MONOTRIBUTISTAS</p>
                <p>
                  Si sos{" "}
                  <Link
                    href="/monotributo"
                    className={LINK}
                  >
                    monotributista
                  </Link>
                  , podemos ayudarte a revisar tu categoría, controlar tu
                  facturación, verificar si tenés deuda, hacer una recategorización,
                  emitir facturas electrónicas o analizar si corresponde inscripción
                  en Ingresos Brutos o Convenio Multilateral.
                </p>
              </article>
              <article key="1" className="flex flex-col gap-2.5 p-5 lg:p-[26px] rounded-[20px] bg-tinta-50 [&_p]:text-[15px] lg:[&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-tinta-700">
                <p className="!text-[13px] !font-extrabold tracking-[0.12em] !text-ambar-800">02 · RESPONSABLES INSCRIPTOS</p>
                <p>
                  Si sos responsable inscripto, profesional independiente o titular
                  de una actividad comercial, podemos asesorarte en la{" "}
                  <Link href="/impuestos" className={LINK}>
                    liquidación de impuestos
                  </Link>
                  , presentación de declaraciones juradas, control de retenciones,
                  percepciones, saldos a favor y vencimientos.
                </p>
              </article>
              <article key="2" className="flex flex-col gap-2.5 p-5 lg:p-[26px] rounded-[20px] bg-tinta-50 [&_p]:text-[15px] lg:[&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-tinta-700">
                <p className="!text-[13px] !font-extrabold tracking-[0.12em] !text-ambar-800">03 · PYMES Y EMPRESAS</p>
                <p>
                  Si tenés una pyme o empresa, podemos acompañarte con la gestión
                  mensual de impuestos, administración de personal,{" "}
                  <Link href="/sueldos" className={LINK}>
                    liquidación de haberes
                  </Link>
                  , cargas sociales,{" "}
                  <Link href="/tramites" className={LINK}>
                    trámites societarios
                  </Link>
                  , libros contables y documentación necesaria para operar de manera
                  ordenada.
                </p>
              </article>
              <article key="3" className="flex flex-col gap-2.5 p-5 lg:p-[26px] rounded-[20px] bg-tinta-50 [&_p]:text-[15px] lg:[&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-tinta-700">
                <p className="!text-[13px] !font-extrabold tracking-[0.12em] !text-ambar-800">04 · TRÁMITES PUNTUALES</p>
                <p>
                  Si necesitás realizar un trámite puntual, también podés
                  consultarnos. Muchas personas se comunican por certificados
                  contables, constancias de ingresos, manifestaciones de bienes,
                  documentación para bancos, trámites societarios, modificaciones de
                  autoridades o requerimientos específicos de organismos e
                  instituciones.
                </p>
              </article>
          </div>
        </section>

        {/* Atención personalizada */}
        <section className="mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[72px] items-center [&>*]:min-w-0">
          <div className="relative aspect-[16/9] lg:aspect-auto lg:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden bg-tinta-50">
            <Image src="/stock/stock48.jpg" alt="Atención personalizada" fill sizes="(max-width: 1024px) 100vw, 600px" className={SIN_MARCA} />
          </div>
          <div className={PROSA}>
            <H2 id="atencion">Atención personalizada</H2>
            <p>
              En Estudio Contable Dillon creemos que un buen asesoramiento
              empieza por entender el caso concreto. No todas las consultas
              requieren el mismo tipo de respuesta. Algunas se resuelven con una
              orientación puntual; otras necesitan revisar documentación,
              analizar antecedentes o planificar una estrategia de
              regularización.
            </p>
            <p>
              Por eso, cuando te comuniques con nosotros, te vamos a pedir la
              información necesaria para poder orientarte correctamente. Puede
              ser tu condición fiscal, actividad, jurisdicción, tipo de trámite,
              período consultado o documentación relacionada con el tema.
            </p>
            <p>
              Nuestro objetivo es que tengas claridad sobre tu situación y sepas
              qué pasos conviene dar. La contabilidad y los impuestos pueden ser
              complejos, pero la explicación no tiene por qué serlo.
            </p>
          </div>
        </section>

        {/* Nuevos clientes y reuniones */}
        <section className="mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-start [&>*]:min-w-0">
          <div className={PROSA}>
            <H2 id="nuevos-clientes">Consultas para nuevos clientes</H2>
            <p>
              Si estás buscando un estudio contable para acompañarte de manera
              mensual, podés escribirnos y contarnos cuál es tu actividad, bajo
              qué régimen estás inscripto y qué tipo de servicio necesitás.
            </p>
            <p>
              Podemos asesorarte si estás por iniciar una actividad, si querés
              cambiar de contador, si necesitás ordenar documentación atrasada o
              si buscás un servicio más claro, moderno y organizado.
            </p>
            <p>
              También trabajamos con clientes que necesitan resolver situaciones
              específicas, como deuda fiscal,{" "}
              <Link
                href="/vencimientos"
                className={LINK}
              >
                vencimientos
              </Link>{" "}
              pendientes, intimaciones, presentaciones omitidas o trámites que
              quedaron inconclusos.
            </p>
          </div>
          <div className={PROSA}>
            <div className="relative mb-5 aspect-[16/9] rounded-2xl lg:rounded-[22px] overflow-hidden bg-tinta-50">
              <Image src="/stock/stock49.jpg" alt="Reuniones y entrevistas" fill sizes="(max-width: 1024px) 100vw, 600px" className={SIN_MARCA} />
            </div>
            <H2 id="reuniones">Reuniones y entrevistas</H2>
            <p>
              Una vez recibida tu consulta, nos comunicaremos para coordinar una
              entrevista o avanzar con el análisis inicial del caso. Según la
              necesidad, la reunión puede ser presencial o virtual.
            </p>
            <p>
              En esa instancia podremos revisar tu situación, responder tus
              dudas y explicarte qué documentación hace falta para avanzar.
              Buscamos que cada cliente tenga una respuesta clara desde el
              primer contacto y sepa qué puede esperar del servicio.
            </p>
          </div>
        </section>

        {/* Comunicate con nosotros */}
        <section className="relative mt-14 lg:mt-24 w-screen ml-[calc(50%-50vw)] bg-tinta-900 overflow-hidden py-10 lg:py-20">
          <Isotipo variant="blanco" size={520} className="absolute -left-32 -top-36 opacity-[0.05] pointer-events-none" />
          <div className="relative max-w-[1307px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-7 lg:gap-20 items-center [&>*]:min-w-0">
            <div className="flex flex-col gap-3.5 lg:gap-4 [&_p]:text-[15px] lg:[&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-tinta-200">
              <p className="!text-xs lg:!text-[13px] !font-bold tracking-[0.2em] !text-ambar-500">ESTAMOS PARA AYUDARTE</p>
              <h2 id="comunicate" className="scroll-mt-28 text-[28px] lg:text-[40px] font-extrabold tracking-[-0.03em] leading-[1.12] text-white">Comunicate con nosotros</h2>
              <p>
                Podés contactarnos por mail o a través de nuestras redes sociales.
                Te responderemos a la brevedad para coordinar una entrevista y
                brindarte el asesoramiento que necesitás.
              </p>
              <p>
                En Estudio Contable Dillon estamos para ayudarte a ordenar tus
                obligaciones contables, fiscales, laborales y societarias, con un
                servicio profesional, claro y orientado a soluciones concretas.
              </p>
              <p>
                Si necesitás asesoramiento contable en Capital Federal,
                escribinos. Contanos tu consulta y te indicaremos cómo avanzar.
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-white/[0.06] border border-white/[0.14] rounded-[22px] p-5 lg:p-7">
              <BotonWhatsApp className="w-full" />
              <a href={`mailto:${EMAIL}`} className="text-center text-base font-extrabold text-white p-[15px] border border-white/25 rounded-[14px] hover:bg-white/10">
                Escribinos por email
              </a>
              <a href="tel:+541158959823" className="pt-1.5 text-center text-[15px] font-bold text-tinta-200 hover:text-white">o llamanos al +54 11 5895-9823</a>
            </div>
          </div>
        </section>

        <PreguntasServicio titulo="Preguntas frecuentes sobre contacto y consultas" faqs={contactoFAQs} />
      </main>
    </>
  );
};

export default Contacto;
