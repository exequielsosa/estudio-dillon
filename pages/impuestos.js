import Link from "next/link";
import SeoImpuestos from "@/components/seo/seoImpuestos";
import { impuestosFAQs } from "@/lib/faqs/impuestos";
import {
  LINK, waCon, HeroServicio, IntroServicio, QueIncluye, Indice, CuerpoServicio, ColumnasServicio,
  Bloque, Titulo, ListaCheck, CtaIntermedio, CtaFinal, PreguntasServicio,
} from "@/components/servicio/ServicioUI";

const WHATSAPP = waCon("Hola, quiero asesoramiento con mis impuestos.");

// Mismos anclas que antes (#liquidacion, ...): no se rompen links ni sitelinks.
// "linea" es el resumen corto que se ve en "Qué incluye".
const ITEMS = [
  { id: "liquidacion", nombre: "Liquidación de impuestos", linea: "Declaraciones juradas mensuales y anuales, en tiempo y forma." },
  { id: "iva", nombre: "Impuesto al Valor Agregado (IVA)", linea: "Liquidación mensual, libro IVA y saldos a favor." },
  { id: "ganancias", nombre: "Declaraciones Juradas de Ganancias", linea: "Personas humanas y sociedades, con sus anticipos." },
  { id: "bienes-personales", nombre: "Bienes Personales", linea: "Declaración anual, anticipos y acciones y participaciones." },
  { id: "ingresos-brutos", nombre: "Ingresos Brutos", linea: "Régimen local o Convenio Multilateral, con retenciones y percepciones." },
  { id: "regularizacion", nombre: "Regularización de deudas", linea: "Deudas impositivas y previsionales, con la mejor alternativa." },
  { id: "facilidades", nombre: "Planes de facilidades de pago", linea: "Adhesión y seguimiento de planes de pago." },
  { id: "devoluciones", nombre: "Devoluciones y compensaciones", linea: "Recuperá saldos a favor y créditos fiscales." },
  { id: "inspecciones", nombre: "Inspecciones y requerimientos", linea: "Te acompañamos ante fiscalizaciones y requerimientos." },
  { id: "contencioso", nombre: "Asesoramiento contencioso", linea: "Descargos, recursos y defensa ante el fisco." },
];

const Impuestos = () => {
  return (
    <>
      <SeoImpuestos />
      <main className="flex flex-col w-full">
        <HeroServicio
          miga="Impuestos"
          eyebrow="SERVICIO · IMPUESTOS"
          titulo="Servicios Impositivos"
          subtitulo="Asesoramiento impositivo para personas, profesionales, monotributistas, pymes y empresas"
          imagen="/header/impuestos.jpg"
          alt="Liquidación de impuestos - Estudio Contable Dillon"
          whatsapp={WHATSAPP}
          checks={["IVA, Ganancias, Bienes Personales e IIBB", "Tus vencimientos controlados todo el año", "CABA y todo el país"]}
        />

        <IntroServicio frase="Nuestro trabajo no se limita a" resaltado="presentar impuestos.">
          <p>
            En Estudio Contable Dillon brindamos un servicio integral de
            asesoramiento impositivo para personas físicas, profesionales
            independientes,{" "}
            <Link
              href="/monotributo"
              className={LINK}
            >
              monotributistas
            </Link>
            , responsables inscriptos, startups, pymes y sociedades. Nuestro
            objetivo es que cada cliente pueda cumplir correctamente con sus
            obligaciones fiscales, evitar errores, anticiparse a los{" "}
            <Link
              href="/vencimientos"
              className={LINK}
            >
              vencimientos
            </Link>{" "}
            y tomar decisiones con información clara.
          </p>
          <p>
            Sabemos que el sistema tributario argentino puede resultar
            complejo, cambiante y difícil de seguir. Las declaraciones
            juradas, los regímenes de información, los anticipos, las
            percepciones, las retenciones, las deudas fiscales y los
            requerimientos de los organismos de control demandan tiempo,
            conocimiento técnico y seguimiento permanente. Por eso,
            acompañamos a nuestros clientes con un servicio impositivo
            ordenado, práctico y profesional.
          </p>
          <p>
            Nuestro trabajo no se limita a presentar impuestos. Analizamos
            cada situación, revisamos la documentación disponible, controlamos
            vencimientos, evaluamos riesgos fiscales y proponemos alternativas
            para que cada contribuyente pueda cumplir con sus obligaciones de
            la forma más eficiente posible.
          </p>
          <p>
            Desde nuestro estudio contable en Capital Federal, asistimos a
            clientes de CABA y de todo el país, combinando atención
            personalizada con herramientas digitales que permiten agilizar
            procesos, enviar documentación, resolver consultas y mantener una
            comunicación clara durante todo el año.
          </p>
        </IntroServicio>

        <QueIncluye titulo="Todo lo que hacemos por tus impuestos" items={ITEMS} />

        <CuerpoServicio items={ITEMS}>
          <ColumnasServicio indice={<Indice items={ITEMS} whatsapp={WHATSAPP} />}>
            <Bloque img="/impuestos.jpg" alt="Liquidación y presentación de impuestos">
              <Titulo id="liquidacion">
                Liquidación y presentación de impuestos
              </Titulo>
              <p>
                Nos ocupamos de la liquidación, confección y presentación de
                declaraciones juradas impositivas, tanto mensuales como anuales.
                Este servicio está orientado a contribuyentes que necesitan
                delegar la gestión de sus impuestos en un equipo profesional,
                evitando omisiones, errores de cálculo o presentaciones fuera de
                término.
              </p>
              <p>
                Cada impuesto tiene sus propias reglas, vencimientos, formularios
                y particularidades. Por eso, realizamos un seguimiento detallado
                de cada caso, revisando la información contable y fiscal necesaria
                para determinar correctamente las obligaciones de cada
                contribuyente.
              </p>
              <p>
                Trabajamos con impuestos nacionales, provinciales y locales, según
                la actividad, jurisdicción y régimen fiscal correspondiente. Esto
                permite brindar una mirada integral sobre la situación tributaria
                del cliente, evitando analizar cada impuesto de manera aislada.
              </p>
              <p>
                Entre los servicios más habituales se encuentran la liquidación de
                IVA, Ganancias, Bienes Personales, Ingresos Brutos, regímenes de
                retención y percepción, impuestos vinculados a sociedades y
                presentaciones informativas exigidas por la normativa vigente.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="iva">
                Impuesto al Valor Agregado — IVA
              </Titulo>
              <p>
                El Impuesto al Valor Agregado, conocido como IVA, es una de las
                obligaciones mensuales más importantes para los responsables
                inscriptos y empresas. Su correcta liquidación requiere analizar
                ventas, compras, comprobantes emitidos, facturas recibidas, notas
                de crédito, notas de débito, percepciones, retenciones y saldos
                técnicos.
              </p>
              <p>
                En Estudio Contable Dillon realizamos la liquidación mensual del
                IVA, controlando la información respaldatoria y verificando que
                los datos sean consistentes con la facturación y la actividad del
                contribuyente. Una mala registración o una omisión en este
                impuesto puede generar diferencias, intimaciones o saldos
                incorrectos.
              </p>
              <p>
                También asesoramos sobre cuestiones vinculadas al crédito fiscal,
                débito fiscal, saldos a favor, percepciones acumuladas,
                comprobantes observados y tratamiento de operaciones específicas.
                Nuestro objetivo es que el cliente pueda cumplir correctamente con
                sus presentaciones y, al mismo tiempo, entender qué está pagando y
                por qué.
              </p>
            </Bloque>

            <CtaIntermedio titulo="¿Tenés una deuda, una intimación o un vencimiento encima?" texto="Escribinos y vemos juntos cómo resolverlo." whatsapp={WHATSAPP} />

            <Bloque img="/stock/stock00.jpg" alt="Libro IVA Ventas y Compras">
              <Titulo>Libro IVA Ventas e IVA Compras</Titulo>
              <p>
                La correcta registración de operaciones es fundamental para una
                buena liquidación impositiva. Por eso, confeccionamos y
                controlamos el Libro IVA Ventas y el Libro IVA Compras,
                verificando que la información declarada coincida con los
                comprobantes emitidos y recibidos.
              </p>
              <p>
                Este trabajo permite ordenar la información fiscal del
                contribuyente, detectar diferencias, identificar comprobantes
                faltantes y evitar inconsistencias frente a los organismos de
                control.
              </p>
              <p>
                El control del Libro IVA es especialmente importante para
                responsables inscriptos, comercios, prestadores de servicios,
                profesionales y empresas que manejan un volumen considerable de
                operaciones mensuales. Una registración ordenada facilita la
                liquidación de impuestos y mejora la calidad de la información
                contable.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="ganancias">
                Declaraciones Juradas de Ganancias
              </Titulo>
              <p>
                La liquidación del Impuesto a las Ganancias requiere un análisis
                integral de ingresos, gastos, deducciones, retenciones,
                percepciones, anticipos y situación patrimonial. No se trata
                solamente de completar una declaración jurada: es necesario
                revisar la información fiscal del período y aplicar correctamente
                la normativa vigente.
              </p>
              <p>
                En Estudio Contable Dillon confeccionamos declaraciones juradas de
                Ganancias para personas humanas, profesionales independientes,
                responsables inscriptos, sociedades y empresas. Evaluamos cada
                caso según su actividad, estructura de ingresos, gastos deducibles
                y obligaciones aplicables.
              </p>
              <p>
                También asesoramos sobre anticipos, saldos a favor, retenciones
                sufridas, percepciones computables y planificación fiscal. Una
                correcta gestión del impuesto permite evitar pagos innecesarios,
                reducir riesgos y cumplir con las obligaciones en tiempo y forma.
              </p>
            </Bloque>

            <Bloque img="/stock/stock01.jpg" alt="Declaraciones Juradas de Bienes Personales">
              <Titulo id="bienes-personales">
                Declaraciones Juradas de Bienes Personales
              </Titulo>
              <p>
                El impuesto sobre los Bienes Personales exige informar y valuar
                correctamente el patrimonio del contribuyente. Esto puede incluir
                inmuebles, vehículos, cuentas bancarias, inversiones,
                participaciones societarias, bienes en el exterior y otros activos
                alcanzados por la normativa.
              </p>
              <p>
                Asistimos en la confección y presentación de declaraciones juradas
                de Bienes Personales, revisando la documentación necesaria y
                aplicando los criterios de valuación correspondientes. También
                analizamos posibles saldos a pagar, anticipos, exenciones y
                situaciones particulares según la composición patrimonial del
                cliente.
              </p>
              <p>
                Este servicio es especialmente importante para personas que tienen
                bienes registrables, inversiones, propiedades, participación en
                sociedades o activos que requieren un tratamiento fiscal
                específico.
              </p>
            </Bloque>

            <Bloque>
              <Titulo>Impuesto a la Renta Financiera</Titulo>
              <p>
                El tratamiento impositivo de inversiones, rendimientos
                financieros, intereses, títulos, fondos, dividendos u otros
                instrumentos puede generar dudas frecuentes. En estos casos,
                brindamos asesoramiento para determinar si corresponde declarar
                operaciones, computar resultados o incluir determinados conceptos
                dentro de las declaraciones juradas anuales.
              </p>
              <p>
                El Impuesto a la Renta Financiera requiere revisar cada situación
                particular, ya que el tratamiento puede variar según el tipo de
                inversión, el origen del rendimiento, la moneda, el plazo y la
                normativa aplicable.
              </p>
              <p>
                Nuestro equipo analiza la información disponible y orienta al
                cliente para que pueda cumplir correctamente con sus obligaciones
                fiscales vinculadas a inversiones y rentas financieras.
              </p>
            </Bloque>

            <Bloque img="/stock/stock02.jpg" alt="Impuesto sobre los Ingresos Brutos">
              <Titulo id="ingresos-brutos">
                Impuesto sobre los Ingresos Brutos
              </Titulo>
              <p>
                El Impuesto sobre los Ingresos Brutos es una obligación clave para
                quienes desarrollan actividades comerciales, profesionales o de
                servicios. Su tratamiento puede variar según la jurisdicción, la
                actividad declarada, el régimen aplicable y la existencia de
                operaciones en una o más provincias.
              </p>
              <p>
                En Estudio Contable Dillon nos ocupamos de la liquidación y
                presentación de Ingresos Brutos, tanto para contribuyentes locales
                como para quienes se encuentran alcanzados por regímenes de
                Convenio Multilateral.
              </p>
              <p>
                También revisamos alícuotas aplicables, retenciones, percepciones,
                saldos a favor, jurisdicciones declaradas y posibles
                inconsistencias. Este control es fundamental para evitar pagos
                duplicados, acumulación de saldos o errores en la distribución de
                ingresos por jurisdicción.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="regularizacion">
                Regularización de deudas impositivas y previsionales
              </Titulo>
              <p>
                Muchas personas y empresas llegan al estudio con deudas fiscales
                acumuladas, vencimientos impagos, intimaciones o dificultades para
                ordenar su situación. En estos casos, analizamos la deuda
                existente, identificamos su origen y evaluamos las alternativas
                disponibles para regularizarla.
              </p>
              <p>
                Brindamos asistencia en la regularización de deudas impositivas y
                previsionales de plazo vencido, buscando la opción más conveniente
                según el monto, la antigüedad de la deuda, los intereses
                acumulados y la capacidad de pago del contribuyente.
              </p>
              <p>
                El primer paso siempre es ordenar la información. Luego,
                analizamos si corresponde pagar, compensar, adherir a un plan de
                facilidades, presentar documentación o realizar algún trámite
                adicional.
              </p>
            </Bloque>

            <Bloque img="/stock/stock04.jpg" alt="Planes de facilidades de pago">
              <Titulo id="facilidades">
                Planes de facilidades de pago
              </Titulo>
              <p>
                La confección de planes de facilidades de pago permite regularizar
                obligaciones vencidas mediante cuotas, siempre que el
                contribuyente cumpla con los requisitos del régimen disponible.
              </p>
              <p>
                En Estudio Contable Dillon evaluamos qué planes se encuentran
                habilitados, qué deudas pueden incluirse, cuál es el anticipo
                requerido, la cantidad de cuotas posible y el impacto financiero
                para el cliente.
              </p>
              <p>
                No todos los planes son convenientes en todos los casos. Por eso,
                analizamos la situación antes de avanzar, evitando adhesiones
                automáticas que puedan generar una carga difícil de sostener o que
                no resuelvan el problema de fondo.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="devoluciones">
                Devoluciones, compensaciones y transferencias
              </Titulo>
              <p>
                También asistimos en{" "}
                <Link href="/tramites" className={LINK}>
                  trámites
                </Link>{" "}
                de devoluciones, transferencias y compensaciones de saldos a favor
                con deudas exigibles o futuros vencimientos. Estos procedimientos
                pueden ser útiles cuando el contribuyente acumula créditos
                fiscales, percepciones, retenciones o pagos en exceso.
              </p>
              <p>
                El objetivo es aprovechar correctamente esos saldos y evitar que
                queden inmovilizados sin uso. Para eso, revisamos el origen del
                saldo, su respaldo documental y las posibilidades de aplicación
                según la normativa vigente.
              </p>
              <p>
                Este tipo de gestiones requiere precisión, ya que una compensación
                mal aplicada o una solicitud incompleta puede generar rechazos,
                demoras o nuevos requerimientos.
              </p>
            </Bloque>

            <Bloque img="/stock/stock05.jpg" alt="Reintegros por exportaciones">
              <Titulo>Reintegros por exportaciones</Titulo>
              <p>
                Para empresas o contribuyentes vinculados al comercio exterior,
                brindamos asesoramiento en trámites de reintegro por
                exportaciones, revisando la documentación necesaria y acompañando
                el proceso administrativo correspondiente.
              </p>
              <p>
                Este servicio requiere un control específico de operaciones,
                comprobantes, documentación aduanera, registros contables y
                cumplimiento de requisitos formales. Una gestión ordenada permite
                mejorar los tiempos de presentación y reducir observaciones.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="inspecciones">
                Inspecciones y requerimientos fiscales
              </Titulo>
              <p>
                Recibir una inspección, intimación o requerimiento fiscal puede
                generar preocupación, especialmente cuando no se cuenta con la
                documentación ordenada o no se entiende claramente qué está
                solicitando el organismo.
              </p>
              <p>
                En Estudio Contable Dillon acompañamos a nuestros clientes frente
                a inspecciones y requerimientos, revisando la información
                solicitada, preparando respuestas, analizando riesgos y
                proponiendo medidas preventivas para minimizar impactos.
              </p>
              <p>
                La clave en estos casos es actuar con rapidez, orden y criterio
                profesional. Una respuesta incompleta o fuera de término puede
                agravar el problema. Por eso, ayudamos a organizar la
                documentación, evaluar la situación y responder de manera
                adecuada.
              </p>
            </Bloque>

            <Bloque img="/stock/stock06.jpg" alt="Asesoramiento contencioso tributario">
              <Titulo id="contencioso">
                Asesoramiento contencioso tributario
              </Titulo>
              <p>
                Brindamos asesoramiento y patrocinio en materia contencioso
                tributaria, tanto en instancia administrativa como judicial,
                cuando la situación lo requiere. Esto incluye el análisis de
                determinaciones, reclamos, impugnaciones, intimaciones, sanciones,
                multas y otros conflictos vinculados con obligaciones fiscales.
              </p>
              <p>
                El abordaje de estos casos exige una mirada técnica y estratégica.
                No todos los conflictos se resuelven de la misma manera, y muchas
                veces es necesario evaluar costos, riesgos, plazos y posibilidades
                reales de defensa.
              </p>
              <p>
                Nuestro objetivo es proteger los intereses del cliente, reducir
                contingencias y buscar la mejor solución posible dentro del marco
                legal aplicable.
              </p>
            </Bloque>
          </ColumnasServicio>
        </CuerpoServicio>

        <CtaFinal titulo="Un servicio impositivo claro, ordenado y profesional" whatsapp={WHATSAPP}>
          <p>
            En Estudio Contable Dillon entendemos que los impuestos no
            deberían ser una carga permanente para quien necesita enfocarse en
            su actividad. Por eso, trabajamos para que cada cliente tenga sus{" "}
            <Link
              href="/vencimientos"
            >
              vencimientos
            </Link>{" "}
            bajo control, sus declaraciones juradas presentadas correctamente
            y su situación fiscal ordenada.
          </p>
          <p>
            Si necesitás un contador impositivo en Capital Federal, querés
            regularizar tu situación, presentar declaraciones juradas,
            liquidar IVA, Ganancias, Bienes Personales, Ingresos Brutos o
            resolver una deuda fiscal, podemos ayudarte.
          </p>
          <p>
            <Link
              href="/contacto"
            >
              Contactanos
            </Link>{" "}
            y contanos tu caso. Te vamos a orientar con claridad para que
            puedas cumplir con tus obligaciones impositivas y tomar mejores
            decisiones.
          </p>
        </CtaFinal>

        <PreguntasServicio titulo="Preguntas frecuentes sobre servicios impositivos" faqs={impuestosFAQs} />
      </main>
    </>
  );
};

export default Impuestos;
