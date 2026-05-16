import Link from "next/link";
import HeaderImage from "@/components/headerImage";
import FAQAccordion from "@/components/faqAccordion";
import ServiceMenu from "@/components/serviceMenu";
import SectionWithImage from "@/components/sectionWithImage";
import SeoImpuestos from "@/components/seo/seoImpuestos";
import { impuestosFAQs } from "@/lib/faqs/impuestos";

const impuestosMenu = [
  { name: "Liquidación de impuestos", id: "liquidacion" },
  { name: "Impuesto al Valor Agregado (IVA)", id: "iva" },
  { name: "Declaraciones Juradas de Ganancias", id: "ganancias" },
  { name: "Bienes Personales", id: "bienes-personales" },
  { name: "Ingresos Brutos", id: "ingresos-brutos" },
  { name: "Regularización de deudas", id: "regularizacion" },
  { name: "Planes de facilidades de pago", id: "facilidades" },
  { name: "Devoluciones y compensaciones", id: "devoluciones" },
  { name: "Inspecciones y requerimientos", id: "inspecciones" },
  { name: "Asesoramiento contencioso", id: "contencioso" },
];

const Impuestos = () => {
  return (
    <>
      <SeoImpuestos />
      <main className="flex flex-col w-full">
        <HeaderImage
          image="/header/impuestos.jpg"
          alt="Liquidación de impuestos - Estudio Contable Dillon"
        />

        <div className="w-full flex flex-col mb-10">
          <article>
            <h1 className="mt-8 text-2xl font-semibold">
              Servicios Impositivos
            </h1>
            <p className="mt-2 text-lg font-medium opacity-80">
              Asesoramiento impositivo para personas, profesionales,
              monotributistas, pymes y empresas
            </p>

            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon brindamos un servicio integral de
              asesoramiento impositivo para personas físicas, profesionales
              independientes,{" "}
              <Link
                href="/monotributo"
                className="text-blue-700 hover:underline"
              >
                monotributistas
              </Link>
              , responsables inscriptos, startups, pymes y sociedades. Nuestro
              objetivo es que cada cliente pueda cumplir correctamente con sus
              obligaciones fiscales, evitar errores, anticiparse a los{" "}
              <Link
                href="/vencimientos"
                className="text-blue-700 hover:underline"
              >
                vencimientos
              </Link>{" "}
              y tomar decisiones con información clara.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Sabemos que el sistema tributario argentino puede resultar
              complejo, cambiante y difícil de seguir. Las declaraciones
              juradas, los regímenes de información, los anticipos, las
              percepciones, las retenciones, las deudas fiscales y los
              requerimientos de los organismos de control demandan tiempo,
              conocimiento técnico y seguimiento permanente. Por eso,
              acompañamos a nuestros clientes con un servicio impositivo
              ordenado, práctico y profesional.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Nuestro trabajo no se limita a presentar impuestos. Analizamos
              cada situación, revisamos la documentación disponible, controlamos
              vencimientos, evaluamos riesgos fiscales y proponemos alternativas
              para que cada contribuyente pueda cumplir con sus obligaciones de
              la forma más eficiente posible.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Desde nuestro estudio contable en Capital Federal, asistimos a
              clientes de CABA y de todo el país, combinando atención
              personalizada con herramientas digitales que permiten agilizar
              procesos, enviar documentación, resolver consultas y mantener una
              comunicación clara durante todo el año.
            </p>
          </article>

          <ServiceMenu items={impuestosMenu} />

          <SectionWithImage
            image="/impuestos.jpg"
            alt="Liquidación y presentación de impuestos"
            imageRight
          >
            <h2 id="liquidacion" className="section-h">
              Liquidación y presentación de impuestos
            </h2>
            <p className="opacity-70 text-base">
              Nos ocupamos de la liquidación, confección y presentación de
              declaraciones juradas impositivas, tanto mensuales como anuales.
              Este servicio está orientado a contribuyentes que necesitan
              delegar la gestión de sus impuestos en un equipo profesional,
              evitando omisiones, errores de cálculo o presentaciones fuera de
              término.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Cada impuesto tiene sus propias reglas, vencimientos, formularios
              y particularidades. Por eso, realizamos un seguimiento detallado
              de cada caso, revisando la información contable y fiscal necesaria
              para determinar correctamente las obligaciones de cada
              contribuyente.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Trabajamos con impuestos nacionales, provinciales y locales, según
              la actividad, jurisdicción y régimen fiscal correspondiente. Esto
              permite brindar una mirada integral sobre la situación tributaria
              del cliente, evitando analizar cada impuesto de manera aislada.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Entre los servicios más habituales se encuentran la liquidación de
              IVA, Ganancias, Bienes Personales, Ingresos Brutos, regímenes de
              retención y percepción, impuestos vinculados a sociedades y
              presentaciones informativas exigidas por la normativa vigente.
            </p>
          </SectionWithImage>

          <article>
            <h2 id="iva" className="section-h">
              Impuesto al Valor Agregado — IVA
            </h2>
            <p className="opacity-70 text-base">
              El Impuesto al Valor Agregado, conocido como IVA, es una de las
              obligaciones mensuales más importantes para los responsables
              inscriptos y empresas. Su correcta liquidación requiere analizar
              ventas, compras, comprobantes emitidos, facturas recibidas, notas
              de crédito, notas de débito, percepciones, retenciones y saldos
              técnicos.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon realizamos la liquidación mensual del
              IVA, controlando la información respaldatoria y verificando que
              los datos sean consistentes con la facturación y la actividad del
              contribuyente. Una mala registración o una omisión en este
              impuesto puede generar diferencias, intimaciones o saldos
              incorrectos.
            </p>
            <p className="mt-4 opacity-70 text-base">
              También asesoramos sobre cuestiones vinculadas al crédito fiscal,
              débito fiscal, saldos a favor, percepciones acumuladas,
              comprobantes observados y tratamiento de operaciones específicas.
              Nuestro objetivo es que el cliente pueda cumplir correctamente con
              sus presentaciones y, al mismo tiempo, entender qué está pagando y
              por qué.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock00.jpg"
            alt="Libro IVA Ventas y Compras"
            imageRight={false}
          >
            <h2 className="section-h">Libro IVA Ventas e IVA Compras</h2>
            <p className="opacity-70 text-base">
              La correcta registración de operaciones es fundamental para una
              buena liquidación impositiva. Por eso, confeccionamos y
              controlamos el Libro IVA Ventas y el Libro IVA Compras,
              verificando que la información declarada coincida con los
              comprobantes emitidos y recibidos.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este trabajo permite ordenar la información fiscal del
              contribuyente, detectar diferencias, identificar comprobantes
              faltantes y evitar inconsistencias frente a los organismos de
              control.
            </p>
            <p className="mt-4 opacity-70 text-base">
              El control del Libro IVA es especialmente importante para
              responsables inscriptos, comercios, prestadores de servicios,
              profesionales y empresas que manejan un volumen considerable de
              operaciones mensuales. Una registración ordenada facilita la
              liquidación de impuestos y mejora la calidad de la información
              contable.
            </p>
          </SectionWithImage>

          <article>
            <h2 id="ganancias" className="section-h">
              Declaraciones Juradas de Ganancias
            </h2>
            <p className="opacity-70 text-base">
              La liquidación del Impuesto a las Ganancias requiere un análisis
              integral de ingresos, gastos, deducciones, retenciones,
              percepciones, anticipos y situación patrimonial. No se trata
              solamente de completar una declaración jurada: es necesario
              revisar la información fiscal del período y aplicar correctamente
              la normativa vigente.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon confeccionamos declaraciones juradas de
              Ganancias para personas humanas, profesionales independientes,
              responsables inscriptos, sociedades y empresas. Evaluamos cada
              caso según su actividad, estructura de ingresos, gastos deducibles
              y obligaciones aplicables.
            </p>
            <p className="mt-4 opacity-70 text-base">
              También asesoramos sobre anticipos, saldos a favor, retenciones
              sufridas, percepciones computables y planificación fiscal. Una
              correcta gestión del impuesto permite evitar pagos innecesarios,
              reducir riesgos y cumplir con las obligaciones en tiempo y forma.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock01.jpg"
            alt="Declaraciones Juradas de Bienes Personales"
            imageRight
          >
            <h2 id="bienes-personales" className="section-h">
              Declaraciones Juradas de Bienes Personales
            </h2>
            <p className="opacity-70 text-base">
              El impuesto sobre los Bienes Personales exige informar y valuar
              correctamente el patrimonio del contribuyente. Esto puede incluir
              inmuebles, vehículos, cuentas bancarias, inversiones,
              participaciones societarias, bienes en el exterior y otros activos
              alcanzados por la normativa.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Asistimos en la confección y presentación de declaraciones juradas
              de Bienes Personales, revisando la documentación necesaria y
              aplicando los criterios de valuación correspondientes. También
              analizamos posibles saldos a pagar, anticipos, exenciones y
              situaciones particulares según la composición patrimonial del
              cliente.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este servicio es especialmente importante para personas que tienen
              bienes registrables, inversiones, propiedades, participación en
              sociedades o activos que requieren un tratamiento fiscal
              específico.
            </p>
          </SectionWithImage>

          <article>
            <h2 className="section-h">Impuesto a la Renta Financiera</h2>
            <p className="opacity-70 text-base">
              El tratamiento impositivo de inversiones, rendimientos
              financieros, intereses, títulos, fondos, dividendos u otros
              instrumentos puede generar dudas frecuentes. En estos casos,
              brindamos asesoramiento para determinar si corresponde declarar
              operaciones, computar resultados o incluir determinados conceptos
              dentro de las declaraciones juradas anuales.
            </p>
            <p className="mt-4 opacity-70 text-base">
              El Impuesto a la Renta Financiera requiere revisar cada situación
              particular, ya que el tratamiento puede variar según el tipo de
              inversión, el origen del rendimiento, la moneda, el plazo y la
              normativa aplicable.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Nuestro equipo analiza la información disponible y orienta al
              cliente para que pueda cumplir correctamente con sus obligaciones
              fiscales vinculadas a inversiones y rentas financieras.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock02.jpg"
            alt="Impuesto sobre los Ingresos Brutos"
            imageRight={false}
          >
            <h2 id="ingresos-brutos" className="section-h">
              Impuesto sobre los Ingresos Brutos
            </h2>
            <p className="opacity-70 text-base">
              El Impuesto sobre los Ingresos Brutos es una obligación clave para
              quienes desarrollan actividades comerciales, profesionales o de
              servicios. Su tratamiento puede variar según la jurisdicción, la
              actividad declarada, el régimen aplicable y la existencia de
              operaciones en una o más provincias.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon nos ocupamos de la liquidación y
              presentación de Ingresos Brutos, tanto para contribuyentes locales
              como para quienes se encuentran alcanzados por regímenes de
              Convenio Multilateral.
            </p>
            <p className="mt-4 opacity-70 text-base">
              También revisamos alícuotas aplicables, retenciones, percepciones,
              saldos a favor, jurisdicciones declaradas y posibles
              inconsistencias. Este control es fundamental para evitar pagos
              duplicados, acumulación de saldos o errores en la distribución de
              ingresos por jurisdicción.
            </p>
          </SectionWithImage>

          <article>
            <h2 id="regularizacion" className="section-h">
              Regularización de deudas impositivas y previsionales
            </h2>
            <p className="opacity-70 text-base">
              Muchas personas y empresas llegan al estudio con deudas fiscales
              acumuladas, vencimientos impagos, intimaciones o dificultades para
              ordenar su situación. En estos casos, analizamos la deuda
              existente, identificamos su origen y evaluamos las alternativas
              disponibles para regularizarla.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Brindamos asistencia en la regularización de deudas impositivas y
              previsionales de plazo vencido, buscando la opción más conveniente
              según el monto, la antigüedad de la deuda, los intereses
              acumulados y la capacidad de pago del contribuyente.
            </p>
            <p className="mt-4 opacity-70 text-base">
              El primer paso siempre es ordenar la información. Luego,
              analizamos si corresponde pagar, compensar, adherir a un plan de
              facilidades, presentar documentación o realizar algún trámite
              adicional.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock04.jpg"
            alt="Planes de facilidades de pago"
            imageRight
          >
            <h2 id="facilidades" className="section-h">
              Planes de facilidades de pago
            </h2>
            <p className="opacity-70 text-base">
              La confección de planes de facilidades de pago permite regularizar
              obligaciones vencidas mediante cuotas, siempre que el
              contribuyente cumpla con los requisitos del régimen disponible.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon evaluamos qué planes se encuentran
              habilitados, qué deudas pueden incluirse, cuál es el anticipo
              requerido, la cantidad de cuotas posible y el impacto financiero
              para el cliente.
            </p>
            <p className="mt-4 opacity-70 text-base">
              No todos los planes son convenientes en todos los casos. Por eso,
              analizamos la situación antes de avanzar, evitando adhesiones
              automáticas que puedan generar una carga difícil de sostener o que
              no resuelvan el problema de fondo.
            </p>
          </SectionWithImage>

          <article>
            <h2 id="devoluciones" className="section-h">
              Devoluciones, compensaciones y transferencias
            </h2>
            <p className="opacity-70 text-base">
              También asistimos en{" "}
              <Link href="/tramites" className="text-blue-700 hover:underline">
                trámites
              </Link>{" "}
              de devoluciones, transferencias y compensaciones de saldos a favor
              con deudas exigibles o futuros vencimientos. Estos procedimientos
              pueden ser útiles cuando el contribuyente acumula créditos
              fiscales, percepciones, retenciones o pagos en exceso.
            </p>
            <p className="mt-4 opacity-70 text-base">
              El objetivo es aprovechar correctamente esos saldos y evitar que
              queden inmovilizados sin uso. Para eso, revisamos el origen del
              saldo, su respaldo documental y las posibilidades de aplicación
              según la normativa vigente.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este tipo de gestiones requiere precisión, ya que una compensación
              mal aplicada o una solicitud incompleta puede generar rechazos,
              demoras o nuevos requerimientos.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock05.jpg"
            alt="Reintegros por exportaciones"
            imageRight={false}
          >
            <h2 className="section-h">Reintegros por exportaciones</h2>
            <p className="opacity-70 text-base">
              Para empresas o contribuyentes vinculados al comercio exterior,
              brindamos asesoramiento en trámites de reintegro por
              exportaciones, revisando la documentación necesaria y acompañando
              el proceso administrativo correspondiente.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este servicio requiere un control específico de operaciones,
              comprobantes, documentación aduanera, registros contables y
              cumplimiento de requisitos formales. Una gestión ordenada permite
              mejorar los tiempos de presentación y reducir observaciones.
            </p>
          </SectionWithImage>

          <article>
            <h2 id="inspecciones" className="section-h">
              Inspecciones y requerimientos fiscales
            </h2>
            <p className="opacity-70 text-base">
              Recibir una inspección, intimación o requerimiento fiscal puede
              generar preocupación, especialmente cuando no se cuenta con la
              documentación ordenada o no se entiende claramente qué está
              solicitando el organismo.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon acompañamos a nuestros clientes frente
              a inspecciones y requerimientos, revisando la información
              solicitada, preparando respuestas, analizando riesgos y
              proponiendo medidas preventivas para minimizar impactos.
            </p>
            <p className="mt-4 opacity-70 text-base">
              La clave en estos casos es actuar con rapidez, orden y criterio
              profesional. Una respuesta incompleta o fuera de término puede
              agravar el problema. Por eso, ayudamos a organizar la
              documentación, evaluar la situación y responder de manera
              adecuada.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock06.jpg"
            alt="Asesoramiento contencioso tributario"
            imageRight
          >
            <h2 id="contencioso" className="section-h">
              Asesoramiento contencioso tributario
            </h2>
            <p className="opacity-70 text-base">
              Brindamos asesoramiento y patrocinio en materia contencioso
              tributaria, tanto en instancia administrativa como judicial,
              cuando la situación lo requiere. Esto incluye el análisis de
              determinaciones, reclamos, impugnaciones, intimaciones, sanciones,
              multas y otros conflictos vinculados con obligaciones fiscales.
            </p>
            <p className="mt-4 opacity-70 text-base">
              El abordaje de estos casos exige una mirada técnica y estratégica.
              No todos los conflictos se resuelven de la misma manera, y muchas
              veces es necesario evaluar costos, riesgos, plazos y posibilidades
              reales de defensa.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Nuestro objetivo es proteger los intereses del cliente, reducir
              contingencias y buscar la mejor solución posible dentro del marco
              legal aplicable.
            </p>
          </SectionWithImage>

          <article className="cta-card">
            <h2 className="section-h">
              Un servicio impositivo claro, ordenado y profesional
            </h2>
            <p className="opacity-70 text-base">
              En Estudio Contable Dillon entendemos que los impuestos no
              deberían ser una carga permanente para quien necesita enfocarse en
              su actividad. Por eso, trabajamos para que cada cliente tenga sus{" "}
              <Link
                href="/vencimientos"
                className="text-blue-700 hover:underline"
              >
                vencimientos
              </Link>{" "}
              bajo control, sus declaraciones juradas presentadas correctamente
              y su situación fiscal ordenada.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Si necesitás un contador impositivo en Capital Federal, querés
              regularizar tu situación, presentar declaraciones juradas,
              liquidar IVA, Ganancias, Bienes Personales, Ingresos Brutos o
              resolver una deuda fiscal, podemos ayudarte.
            </p>
            <p className="mt-4 opacity-70 text-base">
              <Link
                href="/contacto"
                className="text-blue-700 hover:underline font-medium"
              >
                Contactanos
              </Link>{" "}
              y contanos tu caso. Te vamos a orientar con claridad para que
              puedas cumplir con tus obligaciones impositivas y tomar mejores
              decisiones.
            </p>
          </article>

          <section className="mt-10">
            <h2 className="mb-4 text-lg font-semibold opacity-70">
              Preguntas frecuentes sobre servicios impositivos
            </h2>
            <FAQAccordion faqs={impuestosFAQs} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Impuestos;
