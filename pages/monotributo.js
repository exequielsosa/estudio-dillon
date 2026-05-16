import Link from "next/link";
import HeaderImage from "@/components/headerImage";
import FAQAccordion from "@/components/faqAccordion";
import ServiceMenu from "@/components/serviceMenu";
import SectionWithImage from "@/components/sectionWithImage";
import SeoMonotributo from "@/components/seo/seoMonotributo";
import { monotributoFAQs } from "@/lib/faqs/monotributo";

const monotributoMenu = [
  { name: "Contador para monotributistas", id: "contador" },
  { name: "Alta de monotributo", id: "alta" },
  { name: "Recategorización", id: "recategorizacion" },
  { name: "Seguimiento de facturación", id: "facturacion" },
  { name: "Facturación electrónica", id: "facturacion-electronica" },
  { name: "Monotributo e Ingresos Brutos", id: "ingresos-brutos" },
  { name: "Convenio Multilateral", id: "convenio-multilateral" },
  { name: "Regularización de deuda", id: "deuda" },
  { name: "Prevención de exclusiones", id: "exclusiones" },
  { name: "Baja o modificación de datos", id: "baja" },
];

const Monotributo = () => {
  return (
    <>
      <SeoMonotributo />
      <main className="flex flex-col w-full">
        <HeaderImage
          image="/header/monotributo.jpg"
          alt="Asesoramiento integral de Monotributo - Estudio Contable Dillon"
        />

        <div className="w-full flex flex-col mb-10">
          <article>
            <h1 className="mt-8 text-2xl font-semibold">
              Servicios para Monotributistas
            </h1>
            <p className="mt-2 text-lg font-medium opacity-80">
              Asesoramiento integral para monotributistas en Capital Federal
            </p>

            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon brindamos asesoramiento integral para
              monotributistas que necesitan ordenar su situación fiscal, cumplir
              con sus obligaciones mensuales y evitar problemas por errores,{" "}
              <Link
                href="/vencimientos"
                className="text-blue-700 hover:underline"
              >
                vencimientos
              </Link>
              , deudas, recategorizaciones mal realizadas o falta de control en
              la facturación.
            </p>
            <p className="mt-4 opacity-70 text-base">
              El monotributo suele presentarse como un régimen simple, pero en
              la práctica puede generar muchas dudas. Qué categoría corresponde,
              cuándo hay que recategorizarse, cómo controlar los límites de
              facturación, qué pasa si se supera el tope permitido, cómo emitir
              facturas electrónicas, cuándo corresponde pagar Ingresos Brutos,
              qué hacer ante una deuda, cómo responder una intimación o cómo
              evitar una exclusión son consultas habituales.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Nuestro trabajo es acompañarte para que puedas desarrollar tu
              actividad con tranquilidad. Ya seas profesional independiente,
              prestador de servicios, comerciante, emprendedor, trabajador
              freelance o titular de un pequeño negocio, te ayudamos a mantener
              tu monotributo ordenado y actualizado.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Desde nuestro estudio contable en Capital Federal, trabajamos con
              monotributistas de CABA, provincia de Buenos Aires y otras
              jurisdicciones del país, combinando atención personalizada con
              herramientas digitales que permiten realizar gestiones de manera
              ágil, clara y segura.
            </p>
          </article>

          <ServiceMenu items={monotributoMenu} />

          <SectionWithImage
            image="/monotributo.webp"
            alt="Contador especializado en monotributo"
            imageRight
          >
            <h2 id="contador" className="section-h">
              Contador para monotributistas
            </h2>
            <p className="opacity-70 text-base">
              Contar con un contador especializado en monotributo permite evitar
              errores frecuentes y tomar mejores decisiones. Aunque muchas
              gestiones pueden parecer simples, una mala inscripción, una
              categoría incorrecta o una deuda no detectada a tiempo pueden
              traer consecuencias económicas importantes.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon realizamos un seguimiento personalizado
              de la situación fiscal de cada cliente. Controlamos la
              facturación, revisamos vencimientos, analizamos la categoría
              vigente, verificamos deudas, evaluamos posibles recategorizaciones
              y asesoramos sobre las obligaciones que corresponden según la
              actividad desarrollada.
            </p>
            <p className="mt-4 opacity-70 text-base">
              El objetivo es que el monotributista no tenga que estar pendiente
              todos los días de los cambios normativos, vencimientos o{" "}
              <Link href="/tramites" className="text-blue-700 hover:underline">
                trámites fiscales
              </Link>
              . Nos ocupamos de acompañarlo para que pueda cumplir correctamente
              y dedicar su tiempo a trabajar, vender, prestar servicios o hacer
              crecer su proyecto.
            </p>
          </SectionWithImage>

          <article>
            <h2 id="alta" className="section-h">
              Alta de monotributo
            </h2>
            <p className="opacity-70 text-base">
              El alta de monotributo es el primer paso para comenzar una
              actividad económica de manera formal. Sin embargo, no se trata
              solamente de completar un formulario. Es importante definir
              correctamente la actividad, elegir la categoría inicial, analizar
              si corresponde inscripción en Ingresos Brutos, revisar la obra
              social, establecer el punto de venta y dejar preparada la
              facturación electrónica.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon te asesoramos y acompañamos en todo el
              proceso de alta de monotributo, para que empieces tu actividad de
              manera ordenada.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este servicio puede incluir:
            </p>
            <ul className="check-list">
              <li>Análisis de la actividad que vas a desarrollar.</li>
              <li>Alta de CUIT, cuando corresponda.</li>
              <li>Alta en el régimen de monotributo.</li>
              <li>Definición de categoría inicial.</li>
              <li>Selección de actividad económica.</li>
              <li>Alta de punto de venta.</li>
              <li>Configuración para emitir factura electrónica.</li>
              <li>Asesoramiento sobre obra social.</li>
              <li>Revisión de obligaciones provinciales o locales.</li>
              <li>Inscripción en Ingresos Brutos, si corresponde.</li>
            </ul>
            <p className="mt-4 opacity-70 text-base">
              Una inscripción bien realizada desde el inicio evita problemas
              posteriores. Por eso, revisamos cada caso antes de avanzar y te
              explicamos qué obligaciones vas a tener después del alta.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock37.jpg"
            alt="Recategorización de monotributo"
            imageRight={false}
          >
            <h2 id="recategorizacion" className="section-h">
              Recategorización de monotributo
            </h2>
            <p className="opacity-70 text-base">
              La recategorización del monotributo es una de las obligaciones más
              importantes del régimen. Permite actualizar la categoría del
              contribuyente según su facturación, alquileres, consumo de
              energía, superficie afectada y demás parámetros aplicables.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Muchos monotributistas no controlan estos datos hasta que aparece
              un problema. El riesgo es quedar en una categoría incorrecta,
              pagar menos de lo que corresponde, acumular diferencias o quedar
              expuesto a una exclusión del régimen.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon hacemos un seguimiento de la
              facturación de nuestros clientes para anticiparnos a las
              recategorizaciones. Revisamos los ingresos acumulados, analizamos
              la categoría vigente y evaluamos si corresponde subir, bajar o
              permanecer en la misma categoría.
            </p>
            <p className="mt-4 opacity-70 text-base">
              También te explicamos qué implica cada cambio, cuánto vas a pagar
              después de recategorizarte y desde cuándo impacta la nueva cuota.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Nuestro enfoque es preventivo: preferimos anticiparnos a los
              problemas antes que corregirlos tarde.
            </p>
          </SectionWithImage>

          <article>
            <h2 id="facturacion" className="section-h">
              Seguimiento online de facturación
            </h2>
            <p className="opacity-70 text-base">
              Uno de los puntos clave para cualquier monotributista es controlar
              el monto facturado. La facturación determina la categoría, puede
              generar obligación de recategorización y también puede acercarte
              al límite máximo permitido por el régimen.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Por eso ofrecemos un seguimiento personalizado y online de la
              facturación. Esto nos permite monitorear la evolución de tus
              ingresos y advertirte cuando conviene revisar tu situación.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este control es especialmente útil para profesionales,
              freelancers, comerciantes y prestadores de servicios que tienen
              ingresos variables durante el año. También es importante para
              quienes están cerca del límite de su categoría o del tope máximo
              del monotributo.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Un buen seguimiento evita sorpresas. Si el crecimiento de tu
              actividad requiere pasar a una categoría superior o analizar el
              cambio a{" "}
              <Link href="/impuestos" className="text-blue-700 hover:underline">
                responsable inscripto
              </Link>
              , es mejor saberlo con tiempo y planificarlo correctamente.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock39.jpg"
            alt="Facturación electrónica para monotributistas"
            imageRight
          >
            <h2 id="facturacion-electronica" className="section-h">
              Facturación electrónica para monotributistas
            </h2>
            <p className="opacity-70 text-base">
              La emisión de facturas electrónicas es una obligación habitual
              para monotributistas. Sin embargo, muchas personas tienen dudas
              sobre cómo facturar, qué tipo de comprobante emitir, cómo cargar
              los datos del cliente, qué conceptos incluir o cómo corregir
              errores.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon te ayudamos a configurar y utilizar la
              facturación electrónica. También ofrecemos la posibilidad de
              realizar facturas electrónicas a través de herramientas web y
              webservices, según las necesidades de cada cliente.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Esto permite simplificar la gestión administrativa, reducir
              errores y mantener un mejor control de la documentación emitida.
            </p>
            <p className="mt-4 opacity-70 text-base">
              La facturación ordenada es fundamental para controlar ingresos,
              justificar operaciones y mantener correctamente la situación
              fiscal.
            </p>
          </SectionWithImage>

          <article>
            <h2 id="ingresos-brutos" className="section-h">
              Monotributo e Ingresos Brutos
            </h2>
            <p className="opacity-70 text-base">
              Uno de los errores más comunes es creer que pagar monotributo
              alcanza para estar completamente al día. En muchos casos, además
              del monotributo nacional, corresponde inscribirse y pagar Ingresos
              Brutos, según la jurisdicción y la actividad desarrollada.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Capital Federal, provincia de Buenos Aires y otras
              jurisdicciones, las obligaciones pueden variar. También puede
              corresponder el régimen de Convenio Multilateral cuando el
              contribuyente desarrolla actividad en más de una jurisdicción.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon analizamos tu caso para determinar si
              corresponde inscripción en{" "}
              <Link href="/impuestos" className="text-blue-700 hover:underline">
                Ingresos Brutos
              </Link>
              , bajo qué régimen, con qué alícuota y con qué vencimientos.
            </p>
            <p className="mt-4 opacity-70 text-base">
              También realizamos liquidaciones, presentaciones y seguimiento de
              saldos, retenciones y percepciones vinculadas con Ingresos Brutos.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock40.webp"
            alt="Convenio Multilateral para monotributistas"
            imageRight={false}
          >
            <h2 id="convenio-multilateral" className="section-h">
              Convenio Multilateral para monotributistas
            </h2>
            <p className="opacity-70 text-base">
              Cuando un monotributista presta servicios, vende productos o
              desarrolla actividad en más de una jurisdicción, puede
              corresponder la inscripción en Convenio Multilateral. Este régimen
              permite distribuir la base imponible de Ingresos Brutos entre las
              jurisdicciones donde se desarrolla la actividad.
            </p>
            <p className="mt-4 opacity-70 text-base">
              No todos los monotributistas necesitan Convenio Multilateral, pero
              cuando corresponde, es importante gestionarlo correctamente. Una
              mala inscripción o una falta de presentación puede generar deudas,
              multas o inconsistencias.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon asesoramos sobre la inscripción,
              liquidación y presentación de Convenio Multilateral para
              monotributistas, revisando la actividad real del contribuyente y
              las jurisdicciones involucradas.
            </p>
          </SectionWithImage>

          <article>
            <h2 id="deuda" className="section-h">
              Regularización de deuda de monotributo
            </h2>
            <p className="opacity-70 text-base">
              Si tenés deuda de monotributo, es importante revisarla cuanto
              antes. A veces se trata de cuotas impagas, intereses acumulados,
              diferencias por recategorización, períodos vencidos, deuda de obra
              social o falta de pago de componentes específicos.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon analizamos la deuda, identificamos su
              origen y evaluamos las alternativas disponibles para
              regularizarla.
            </p>
            <p className="mt-4 opacity-70 text-base">Podemos ayudarte a:</p>
            <ul className="check-list">
              <li>Consultar deuda vigente.</li>
              <li>Revisar períodos impagos.</li>
              <li>Generar volantes electrónicos de pago.</li>
              <li>Evaluar planes de facilidades de pago.</li>
              <li>Regularizar intereses.</li>
              <li>Corregir inconsistencias.</li>
              <li>Evitar que la deuda siga creciendo.</li>
            </ul>
            <p className="mt-4 opacity-70 text-base">
              No siempre conviene pagar sin revisar. Primero hay que entender
              qué se debe, por qué se generó la deuda y cuál es la mejor forma
              de resolverla.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock40.jpg"
            alt="Prevención de exclusiones del monotributo"
            imageRight
          >
            <h2 id="exclusiones" className="section-h">
              Prevención de exclusiones del monotributo
            </h2>
            <p className="opacity-70 text-base">
              La exclusión del monotributo puede producirse cuando se superan
              determinados límites o cuando se incumplen condiciones del
              régimen. Esto puede generar el pase al régimen general, con
              obligaciones más complejas y una carga impositiva mayor.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Por eso, el seguimiento preventivo es fundamental. Controlar la
              facturación, la categoría, los gastos, los movimientos bancarios,
              los consumos y los parámetros del régimen permite detectar a
              tiempo posibles riesgos.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon ayudamos a nuestros clientes a evitar
              exclusiones innecesarias mediante un control permanente de su
              situación fiscal. Si el crecimiento de la actividad hace
              conveniente o inevitable pasar a{" "}
              <Link href="/impuestos" className="text-blue-700 hover:underline">
                responsable inscripto
              </Link>
              , analizamos el caso y planificamos la transición de manera
              ordenada.
            </p>
          </SectionWithImage>

          <article>
            <h2 id="baja" className="section-h">
              Baja de monotributo o modificación de datos
            </h2>
            <p className="opacity-70 text-base">
              También asistimos en{" "}
              <Link href="/tramites" className="text-blue-700 hover:underline">
                trámites
              </Link>{" "}
              de baja de monotributo, modificación de actividad, cambio de
              domicilio fiscal, actualización de datos, cambios de categoría,
              cambios de obra social, alta o baja de puntos de venta y demás
              gestiones vinculadas con el régimen.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Estos trámites pueden parecer menores, pero deben realizarse
              correctamente para evitar obligaciones futuras o errores en los
              registros fiscales.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Si dejaste de trabajar, cambiaste de actividad, te mudaste,
              empezaste a facturar por otro servicio o necesitás modificar tu
              situación, podemos ayudarte a actualizar tus datos.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock41.webp"
            alt="Herramientas digitales"
            imageRight={false}
          >
            <h2 className="section-h">
              Herramientas digitales para gestionar tu monotributo
            </h2>
            <p className="opacity-70 text-base">
              Contamos con herramientas web que permiten realizar un seguimiento
              online de las gestiones efectuadas por el estudio. Esto facilita
              la comunicación, el control de trámites y el acceso a información
              relevante.
            </p>
            <p className="mt-4 opacity-70 text-base">
              La idea es que el monotributista pueda tener una gestión más
              simple y ordenada, sin depender de papeles sueltos, mensajes
              perdidos o recordatorios improvisados.
            </p>
            <p className="mt-4 opacity-70 text-base">
              La tecnología nos permite trabajar mejor, pero siempre acompañada
              de criterio profesional y atención personalizada.
            </p>
          </SectionWithImage>

          <article>
            <h2 className="section-h">Cumplimiento de obligaciones fiscales</h2>
            <p className="opacity-70 text-base">
              Ayudamos al cumplimiento de tus obligaciones ante el organismo
              fiscal nacional y otros organismos provinciales o locales,
              evitando multas por incumplimientos y aprovechando las facilidades
              vigentes para cada tipo de actividad.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Esto incluye el control de{" "}
              <Link
                href="/vencimientos"
                className="text-blue-700 hover:underline"
              >
                vencimientos
              </Link>
              , revisión de pagos, seguimiento de presentaciones, asesoramiento
              ante intimaciones, regularización de deuda y análisis de
              beneficios o facilidades disponibles.
            </p>
            <p className="mt-4 opacity-70 text-base">
              La clave es no esperar a que aparezca el problema. Un monotributo
              bien gestionado permite trabajar con tranquilidad y evitar costos
              innecesarios.
            </p>
          </article>

          <SectionWithImage
            image="/stock/stock42.WEBP"
            alt="Servicio personalizado"
            imageRight
          >
            <h2 className="section-h">
              Servicio claro, simple y personalizado
            </h2>
            <p className="opacity-70 text-base">
              En Estudio Contable Dillon sabemos que muchos monotributistas
              buscan algo concreto: pagar lo que corresponde, evitar multas,
              facturar correctamente y tener a quién consultar cuando aparece
              una duda.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Nuestro servicio apunta exactamente a eso. Queremos que tengas una
              gestión simple, clara y profesional, sin vueltas innecesarias y
              sin tecnicismos que no ayudan.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Te explicamos tu situación, te indicamos qué hacer, controlamos
              tus obligaciones y te acompañamos en cada etapa de tu actividad.
            </p>
          </SectionWithImage>

          <article className="cta-card">
            <h2 className="section-h">
              Consultá por nuestro servicio para monotributistas
            </h2>
            <p className="opacity-70 text-base">
              Si estás buscando un contador para monotributistas en Capital
              Federal, necesitás darte de alta, recategorizarte, controlar tu
              facturación, emitir facturas electrónicas, regularizar deuda,
              inscribirte en Ingresos Brutos o analizar si te corresponde
              Convenio Multilateral, podemos ayudarte.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon te acompañamos para que tu monotributo
              esté ordenado, tus vencimientos bajo control y tu actividad pueda
              crecer sin problemas fiscales evitables.
            </p>
            <p className="mt-4 opacity-70 text-base">
              <Link
                href="/contacto"
                className="text-blue-700 hover:underline font-medium"
              >
                Contactanos
              </Link>{" "}
              y contanos tu caso. Te vamos a orientar con claridad para
              encontrar la mejor solución según tu actividad y situación actual.
            </p>
          </article>

          <section className="mt-10">
            <h2 className="mb-4 text-lg font-semibold opacity-70">
              Preguntas frecuentes sobre monotributo
            </h2>
            <FAQAccordion faqs={monotributoFAQs} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Monotributo;
