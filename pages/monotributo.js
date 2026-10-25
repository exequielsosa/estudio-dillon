import Link from "next/link";
import SeoMonotributo from "@/components/seo/seoMonotributo";
import { monotributoFAQs } from "@/lib/faqs/monotributo";
import {
  LINK, waCon, HeroServicio, IntroServicio, QueIncluye, Indice, CuerpoServicio, ColumnasServicio,
  Bloque, Titulo, ListaCheck, CtaIntermedio, CtaFinal, PreguntasServicio,
} from "@/components/servicio/ServicioUI";

const WHATSAPP = waCon("Hola, soy monotributista y quiero asesoramiento con mi monotributo.");

// Mismos anclas que antes (#contador, ...): no se rompen links ni sitelinks.
// "linea" es el resumen corto que se ve en "Qué incluye".
const ITEMS = [
  { id: "contador", nombre: "Contador para monotributistas", linea: "Seguimiento personalizado de tu situación fiscal." },
  { id: "alta", nombre: "Alta de monotributo", linea: "CUIT, categoría inicial, punto de venta y factura." },
  { id: "recategorizacion", nombre: "Recategorización", linea: "Te anticipamos si subís, bajás o seguís igual." },
  { id: "facturacion", nombre: "Seguimiento de facturación", linea: "Controlamos tus ingresos y te avisamos a tiempo." },
  { id: "facturacion-electronica", nombre: "Facturación electrónica", linea: "Configuración y emisión por web o webservice." },
  { id: "ingresos-brutos", nombre: "Monotributo e Ingresos Brutos", linea: "Inscripción, alícuota y vencimientos según tu jurisdicción." },
  { id: "convenio-multilateral", nombre: "Convenio Multilateral", linea: "Para quienes trabajan en más de una jurisdicción." },
  { id: "deuda", nombre: "Regularización de deuda", linea: "Analizamos el origen y la mejor forma de regularizarla." },
  { id: "exclusiones", nombre: "Prevención de exclusiones", linea: "Detectamos los riesgos antes de que sea tarde." },
  { id: "baja", nombre: "Baja o modificación de datos", linea: "Baja, cambio de actividad, domicilio o datos." },
];

const Monotributo = () => {
  return (
    <>
      <SeoMonotributo />
      <main className="flex flex-col w-full">
        <HeroServicio
          miga="Monotributo"
          eyebrow="SERVICIO · MONOTRIBUTO"
          titulo="Servicios para Monotributistas"
          subtitulo="Asesoramiento integral para monotributistas en Capital Federal"
          imagen="/header/monotributo.jpg"
          alt="Asesoramiento integral de Monotributo - Estudio Contable Dillon"
          whatsapp={WHATSAPP}
          checks={["Alta, recategorización y deuda", "Seguimiento online de tu facturación", "CABA, provincia y todo el país"]}
        />

        <IntroServicio frase="Nuestro trabajo es acompañarte para que puedas desarrollar tu actividad con" resaltado="tranquilidad.">
          <p>
            En Estudio Contable Dillon brindamos asesoramiento integral para
            monotributistas que necesitan ordenar su situación fiscal, cumplir
            con sus obligaciones mensuales y evitar problemas por errores,{" "}
            <Link
              href="/vencimientos"
              className={LINK}
            >
              vencimientos
            </Link>
            , deudas, recategorizaciones mal realizadas o falta de control en
            la facturación.
          </p>
          <p>
            El monotributo suele presentarse como un régimen simple, pero en
            la práctica puede generar muchas dudas. Qué categoría corresponde,
            cuándo hay que recategorizarse, cómo controlar los límites de
            facturación, qué pasa si se supera el tope permitido, cómo emitir
            facturas electrónicas, cuándo corresponde pagar Ingresos Brutos,
            qué hacer ante una deuda, cómo responder una intimación o cómo
            evitar una exclusión son consultas habituales.
          </p>
          <p>
            Nuestro trabajo es acompañarte para que puedas desarrollar tu
            actividad con tranquilidad. Ya seas profesional independiente,
            prestador de servicios, comerciante, emprendedor, trabajador
            freelance o titular de un pequeño negocio, te ayudamos a mantener
            tu monotributo ordenado y actualizado.
          </p>
          <p>
            Desde nuestro estudio contable en Capital Federal, trabajamos con
            monotributistas de CABA, provincia de Buenos Aires y otras
            jurisdicciones del país, combinando atención personalizada con
            herramientas digitales que permiten realizar gestiones de manera
            ágil, clara y segura.
          </p>
        </IntroServicio>

        <QueIncluye titulo="Todo lo que hacemos por tu monotributo" items={ITEMS} />

        <CuerpoServicio items={ITEMS}>
          <ColumnasServicio indice={<Indice items={ITEMS} whatsapp={WHATSAPP} />}>
            <Bloque img="/monotributo.webp" alt="Contador especializado en monotributo">
              <Titulo id="contador">
                Contador para monotributistas
              </Titulo>
              <p>
                Contar con un contador especializado en monotributo permite evitar
                errores frecuentes y tomar mejores decisiones. Aunque muchas
                gestiones pueden parecer simples, una mala inscripción, una
                categoría incorrecta o una deuda no detectada a tiempo pueden
                traer consecuencias económicas importantes.
              </p>
              <p>
                En Estudio Contable Dillon realizamos un seguimiento personalizado
                de la situación fiscal de cada cliente. Controlamos la
                facturación, revisamos vencimientos, analizamos la categoría
                vigente, verificamos deudas, evaluamos posibles recategorizaciones
                y asesoramos sobre las obligaciones que corresponden según la
                actividad desarrollada.
              </p>
              <p>
                El objetivo es que el monotributista no tenga que estar pendiente
                todos los días de los cambios normativos, vencimientos o{" "}
                <Link href="/tramites" className={LINK}>
                  trámites fiscales
                </Link>
                . Nos ocupamos de acompañarlo para que pueda cumplir correctamente
                y dedicar su tiempo a trabajar, vender, prestar servicios o hacer
                crecer su proyecto.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="alta">
                Alta de monotributo
              </Titulo>
              <p>
                El alta de monotributo es el primer paso para comenzar una
                actividad económica de manera formal. Sin embargo, no se trata
                solamente de completar un formulario. Es importante definir
                correctamente la actividad, elegir la categoría inicial, analizar
                si corresponde inscripción en Ingresos Brutos, revisar la obra
                social, establecer el punto de venta y dejar preparada la
                facturación electrónica.
              </p>
              <p>
                En Estudio Contable Dillon te asesoramos y acompañamos en todo el
                proceso de alta de monotributo, para que empieces tu actividad de
                manera ordenada.
              </p>
              <p>
                Este servicio puede incluir:
              </p>
              <ListaCheck>
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
              </ListaCheck>
              <p>
                Una inscripción bien realizada desde el inicio evita problemas
                posteriores. Por eso, revisamos cada caso antes de avanzar y te
                explicamos qué obligaciones vas a tener después del alta.
              </p>
            </Bloque>

            <CtaIntermedio titulo="¿Querés darte de alta o revisar tu categoría?" texto="Contanos tu actividad y te decimos cómo arrancar." whatsapp={WHATSAPP} />

            <Bloque img="/stock/stock37.jpg" alt="Recategorización de monotributo">
              <Titulo id="recategorizacion">
                Recategorización de monotributo
              </Titulo>
              <p>
                La recategorización del monotributo es una de las obligaciones más
                importantes del régimen. Permite actualizar la categoría del
                contribuyente según su facturación, alquileres, consumo de
                energía, superficie afectada y demás parámetros aplicables.
              </p>
              <p>
                Muchos monotributistas no controlan estos datos hasta que aparece
                un problema. El riesgo es quedar en una categoría incorrecta,
                pagar menos de lo que corresponde, acumular diferencias o quedar
                expuesto a una exclusión del régimen.
              </p>
              <p>
                En Estudio Contable Dillon hacemos un seguimiento de la
                facturación de nuestros clientes para anticiparnos a las
                recategorizaciones. Revisamos los ingresos acumulados, analizamos
                la categoría vigente y evaluamos si corresponde subir, bajar o
                permanecer en la misma categoría.
              </p>
              <p>
                También te explicamos qué implica cada cambio, cuánto vas a pagar
                después de recategorizarte y desde cuándo impacta la nueva cuota.
              </p>
              <p>
                Nuestro enfoque es preventivo: preferimos anticiparnos a los
                problemas antes que corregirlos tarde.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="facturacion">
                Seguimiento online de facturación
              </Titulo>
              <p>
                Uno de los puntos clave para cualquier monotributista es controlar
                el monto facturado. La facturación determina la categoría, puede
                generar obligación de recategorización y también puede acercarte
                al límite máximo permitido por el régimen.
              </p>
              <p>
                Por eso ofrecemos un seguimiento personalizado y online de la
                facturación. Esto nos permite monitorear la evolución de tus
                ingresos y advertirte cuando conviene revisar tu situación.
              </p>
              <p>
                Este control es especialmente útil para profesionales,
                freelancers, comerciantes y prestadores de servicios que tienen
                ingresos variables durante el año. También es importante para
                quienes están cerca del límite de su categoría o del tope máximo
                del monotributo.
              </p>
              <p>
                Un buen seguimiento evita sorpresas. Si el crecimiento de tu
                actividad requiere pasar a una categoría superior o analizar el
                cambio a{" "}
                <Link href="/impuestos" className={LINK}>
                  responsable inscripto
                </Link>
                , es mejor saberlo con tiempo y planificarlo correctamente.
              </p>
            </Bloque>

            <Bloque img="/stock/stock39.jpg" alt="Facturación electrónica para monotributistas">
              <Titulo id="facturacion-electronica">
                Facturación electrónica para monotributistas
              </Titulo>
              <p>
                La emisión de facturas electrónicas es una obligación habitual
                para monotributistas. Sin embargo, muchas personas tienen dudas
                sobre cómo facturar, qué tipo de comprobante emitir, cómo cargar
                los datos del cliente, qué conceptos incluir o cómo corregir
                errores.
              </p>
              <p>
                En Estudio Contable Dillon te ayudamos a configurar y utilizar la
                facturación electrónica. También ofrecemos la posibilidad de
                realizar facturas electrónicas a través de herramientas web y
                webservices, según las necesidades de cada cliente.
              </p>
              <p>
                Esto permite simplificar la gestión administrativa, reducir
                errores y mantener un mejor control de la documentación emitida.
              </p>
              <p>
                La facturación ordenada es fundamental para controlar ingresos,
                justificar operaciones y mantener correctamente la situación
                fiscal.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="ingresos-brutos">
                Monotributo e Ingresos Brutos
              </Titulo>
              <p>
                Uno de los errores más comunes es creer que pagar monotributo
                alcanza para estar completamente al día. En muchos casos, además
                del monotributo nacional, corresponde inscribirse y pagar Ingresos
                Brutos, según la jurisdicción y la actividad desarrollada.
              </p>
              <p>
                En Capital Federal, provincia de Buenos Aires y otras
                jurisdicciones, las obligaciones pueden variar. También puede
                corresponder el régimen de Convenio Multilateral cuando el
                contribuyente desarrolla actividad en más de una jurisdicción.
              </p>
              <p>
                En Estudio Contable Dillon analizamos tu caso para determinar si
                corresponde inscripción en{" "}
                <Link href="/impuestos" className={LINK}>
                  Ingresos Brutos
                </Link>
                , bajo qué régimen, con qué alícuota y con qué vencimientos.
              </p>
              <p>
                También realizamos liquidaciones, presentaciones y seguimiento de
                saldos, retenciones y percepciones vinculadas con Ingresos Brutos.
              </p>
            </Bloque>

            <Bloque img="/stock/stock40.webp" alt="Convenio Multilateral para monotributistas">
              <Titulo id="convenio-multilateral">
                Convenio Multilateral para monotributistas
              </Titulo>
              <p>
                Cuando un monotributista presta servicios, vende productos o
                desarrolla actividad en más de una jurisdicción, puede
                corresponder la inscripción en Convenio Multilateral. Este régimen
                permite distribuir la base imponible de Ingresos Brutos entre las
                jurisdicciones donde se desarrolla la actividad.
              </p>
              <p>
                No todos los monotributistas necesitan Convenio Multilateral, pero
                cuando corresponde, es importante gestionarlo correctamente. Una
                mala inscripción o una falta de presentación puede generar deudas,
                multas o inconsistencias.
              </p>
              <p>
                En Estudio Contable Dillon asesoramos sobre la inscripción,
                liquidación y presentación de Convenio Multilateral para
                monotributistas, revisando la actividad real del contribuyente y
                las jurisdicciones involucradas.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="deuda">
                Regularización de deuda de monotributo
              </Titulo>
              <p>
                Si tenés deuda de monotributo, es importante revisarla cuanto
                antes. A veces se trata de cuotas impagas, intereses acumulados,
                diferencias por recategorización, períodos vencidos, deuda de obra
                social o falta de pago de componentes específicos.
              </p>
              <p>
                En Estudio Contable Dillon analizamos la deuda, identificamos su
                origen y evaluamos las alternativas disponibles para
                regularizarla.
              </p>
              <p>Podemos ayudarte a:</p>
              <ListaCheck>
                <li>Consultar deuda vigente.</li>
                <li>Revisar períodos impagos.</li>
                <li>Generar volantes electrónicos de pago.</li>
                <li>Evaluar planes de facilidades de pago.</li>
                <li>Regularizar intereses.</li>
                <li>Corregir inconsistencias.</li>
                <li>Evitar que la deuda siga creciendo.</li>
              </ListaCheck>
              <p>
                No siempre conviene pagar sin revisar. Primero hay que entender
                qué se debe, por qué se generó la deuda y cuál es la mejor forma
                de resolverla.
              </p>
            </Bloque>

            <Bloque img="/stock/stock40.jpg" alt="Prevención de exclusiones del monotributo">
              <Titulo id="exclusiones">
                Prevención de exclusiones del monotributo
              </Titulo>
              <p>
                La exclusión del monotributo puede producirse cuando se superan
                determinados límites o cuando se incumplen condiciones del
                régimen. Esto puede generar el pase al régimen general, con
                obligaciones más complejas y una carga impositiva mayor.
              </p>
              <p>
                Por eso, el seguimiento preventivo es fundamental. Controlar la
                facturación, la categoría, los gastos, los movimientos bancarios,
                los consumos y los parámetros del régimen permite detectar a
                tiempo posibles riesgos.
              </p>
              <p>
                En Estudio Contable Dillon ayudamos a nuestros clientes a evitar
                exclusiones innecesarias mediante un control permanente de su
                situación fiscal. Si el crecimiento de la actividad hace
                conveniente o inevitable pasar a{" "}
                <Link href="/impuestos" className={LINK}>
                  responsable inscripto
                </Link>
                , analizamos el caso y planificamos la transición de manera
                ordenada.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="baja">
                Baja de monotributo o modificación de datos
              </Titulo>
              <p>
                También asistimos en{" "}
                <Link href="/tramites" className={LINK}>
                  trámites
                </Link>{" "}
                de baja de monotributo, modificación de actividad, cambio de
                domicilio fiscal, actualización de datos, cambios de categoría,
                cambios de obra social, alta o baja de puntos de venta y demás
                gestiones vinculadas con el régimen.
              </p>
              <p>
                Estos trámites pueden parecer menores, pero deben realizarse
                correctamente para evitar obligaciones futuras o errores en los
                registros fiscales.
              </p>
              <p>
                Si dejaste de trabajar, cambiaste de actividad, te mudaste,
                empezaste a facturar por otro servicio o necesitás modificar tu
                situación, podemos ayudarte a actualizar tus datos.
              </p>
            </Bloque>

            <Bloque img="/stock/stock41.webp" alt="Herramientas digitales">
              <Titulo>
                Herramientas digitales para gestionar tu monotributo
              </Titulo>
              <p>
                Contamos con herramientas web que permiten realizar un seguimiento
                online de las gestiones efectuadas por el estudio. Esto facilita
                la comunicación, el control de trámites y el acceso a información
                relevante.
              </p>
              <p>
                La idea es que el monotributista pueda tener una gestión más
                simple y ordenada, sin depender de papeles sueltos, mensajes
                perdidos o recordatorios improvisados.
              </p>
              <p>
                La tecnología nos permite trabajar mejor, pero siempre acompañada
                de criterio profesional y atención personalizada.
              </p>
            </Bloque>

            <Bloque>
              <Titulo>Cumplimiento de obligaciones fiscales</Titulo>
              <p>
                Ayudamos al cumplimiento de tus obligaciones ante el organismo
                fiscal nacional y otros organismos provinciales o locales,
                evitando multas por incumplimientos y aprovechando las facilidades
                vigentes para cada tipo de actividad.
              </p>
              <p>
                Esto incluye el control de{" "}
                <Link
                  href="/vencimientos"
                  className={LINK}
                >
                  vencimientos
                </Link>
                , revisión de pagos, seguimiento de presentaciones, asesoramiento
                ante intimaciones, regularización de deuda y análisis de
                beneficios o facilidades disponibles.
              </p>
              <p>
                La clave es no esperar a que aparezca el problema. Un monotributo
                bien gestionado permite trabajar con tranquilidad y evitar costos
                innecesarios.
              </p>
            </Bloque>

            <Bloque img="/stock/stock51.jpg" alt="Servicio personalizado">
              <Titulo>
                Servicio claro, simple y personalizado
              </Titulo>
              <p>
                En Estudio Contable Dillon sabemos que muchos monotributistas
                buscan algo concreto: pagar lo que corresponde, evitar multas,
                facturar correctamente y tener a quién consultar cuando aparece
                una duda.
              </p>
              <p>
                Nuestro servicio apunta exactamente a eso. Queremos que tengas una
                gestión simple, clara y profesional, sin vueltas innecesarias y
                sin tecnicismos que no ayudan.
              </p>
              <p>
                Te explicamos tu situación, te indicamos qué hacer, controlamos
                tus obligaciones y te acompañamos en cada etapa de tu actividad.
              </p>
            </Bloque>
          </ColumnasServicio>
        </CuerpoServicio>

        <CtaFinal titulo="Consultá por nuestro servicio para monotributistas" whatsapp={WHATSAPP}>
          <p>
            Si estás buscando un contador para monotributistas en Capital
            Federal, necesitás darte de alta, recategorizarte, controlar tu
            facturación, emitir facturas electrónicas, regularizar deuda,
            inscribirte en Ingresos Brutos o analizar si te corresponde
            Convenio Multilateral, podemos ayudarte.
          </p>
          <p>
            En Estudio Contable Dillon te acompañamos para que tu monotributo
            esté ordenado, tus vencimientos bajo control y tu actividad pueda
            crecer sin problemas fiscales evitables.
          </p>
          <p>
            <Link
              href="/contacto"
            >
              Contactanos
            </Link>{" "}
            y contanos tu caso. Te vamos a orientar con claridad para
            encontrar la mejor solución según tu actividad y situación actual.
          </p>
        </CtaFinal>

        <PreguntasServicio titulo="Preguntas frecuentes sobre monotributo" faqs={monotributoFAQs} />
      </main>
    </>
  );
};

export default Monotributo;
