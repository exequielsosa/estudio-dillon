import Link from "next/link";
import HeaderImage from "@/components/headerImage";
import FAQAccordion from "@/components/faqAccordion";
import ServiceMenu from "@/components/serviceMenu";
import SeoContactos from "@/components/seo/seoContactos";
import { contactoFAQs } from "@/lib/faqs/contacto";

const contactoMenu = [
  { name: "Asesoramiento contable en Capital Federal", id: "asesoramiento" },
  { name: "Cómo podemos ayudarte", id: "ayuda" },
  { name: "Atención personalizada", id: "atencion" },
  { name: "Consultas para nuevos clientes", id: "nuevos-clientes" },
  { name: "Reuniones y entrevistas", id: "reuniones" },
  { name: "Comunicate con nosotros", id: "comunicate" },
];

const Contacto = () => {
  return (
    <>
      <SeoContactos />
      <main className="flex flex-col w-full">
        <HeaderImage
          image="/header/contacto.jpg"
          alt="Contacto - Estudio Contable Dillon"
        />

        <div className="w-full flex flex-col mb-10">

          <article>
            <h1 className="mt-8 text-2xl font-semibold">Contacto</h1>
            <p className="mt-2 text-lg font-medium opacity-80">
              Comunicate con Estudio Contable Dillon
            </p>

            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon estamos a disposición para atender tus
              consultas y asesorarte de manera clara, profesional y
              personalizada. Si necesitás un contador en Capital Federal,
              querés ordenar tu situación fiscal, consultar por{" "}
              <Link
                href="/monotributo"
                className="text-blue-700 hover:underline"
              >
                monotributo
              </Link>
              ,{" "}
              <Link href="/impuestos" className="text-blue-700 hover:underline">
                liquidación de impuestos
              </Link>
              ,{" "}
              <Link href="/sueldos" className="text-blue-700 hover:underline">
                sueldos
              </Link>
              ,{" "}
              <Link href="/tramites" className="text-blue-700 hover:underline">
                trámites societarios o certificados contables
              </Link>
              , podés comunicarte con nosotros para recibir orientación.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Sabemos que muchas veces las consultas contables aparecen cuando
              ya existe una urgencia: un{" "}
              <Link
                href="/vencimientos"
                className="text-blue-700 hover:underline"
              >
                vencimiento
              </Link>{" "}
              próximo, una deuda impositiva, una intimación, una
              recategorización pendiente, una sociedad que necesita actualizar
              documentación o una empresa que requiere ordenar la liquidación
              de sueldos. Por eso, nuestro objetivo es responder con rapidez,
              entender tu situación y ayudarte a encontrar el camino más
              conveniente.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Trabajamos con personas, profesionales independientes,
              monotributistas, responsables inscriptos, emprendedores,
              startups, pymes y sociedades. Cada caso requiere una mirada
              particular, porque no todos los contribuyentes tienen las mismas
              obligaciones ni los mismos problemas. Por eso, antes de ofrecer
              una solución, escuchamos tu consulta, revisamos la información
              básica y te indicamos cuáles son los pasos a seguir.
            </p>
          </article>

          <ServiceMenu items={contactoMenu} />

          <article>
            <h2
              id="asesoramiento"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Asesoramiento contable en Capital Federal
            </h2>
            <p className="opacity-70 text-base">
              Nuestro estudio brinda asesoramiento contable, impositivo,
              laboral y societario desde CABA, con atención para clientes de
              Capital Federal y también de otras jurisdicciones del país.
              Gracias a las herramientas digitales actuales, muchas gestiones
              pueden resolverse de manera online, sin necesidad de traslados
              innecesarios.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Podés contactarnos si necesitás ayuda con:
            </p>
            <ul className="list-disc ml-6 mt-3 opacity-70 text-base space-y-1">
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
            </ul>
            <p className="mt-4 opacity-70 text-base">
              La idea es que puedas contarnos qué necesitás y recibir una
              respuesta concreta, sin vueltas ni explicaciones innecesariamente
              técnicas.
            </p>
          </article>

          <article>
            <h2
              id="ayuda"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Cómo podemos ayudarte
            </h2>
            <p className="opacity-70 text-base">
              Si sos{" "}
              <Link
                href="/monotributo"
                className="text-blue-700 hover:underline"
              >
                monotributista
              </Link>
              , podemos ayudarte a revisar tu categoría, controlar tu
              facturación, verificar si tenés deuda, hacer una
              recategorización, emitir facturas electrónicas o analizar si
              corresponde inscripción en Ingresos Brutos o Convenio
              Multilateral.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Si sos responsable inscripto, profesional independiente o titular
              de una actividad comercial, podemos asesorarte en la{" "}
              <Link href="/impuestos" className="text-blue-700 hover:underline">
                liquidación de impuestos
              </Link>
              , presentación de declaraciones juradas, control de retenciones,
              percepciones, saldos a favor y vencimientos.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Si tenés una pyme o empresa, podemos acompañarte con la gestión
              mensual de impuestos, administración de personal,{" "}
              <Link href="/sueldos" className="text-blue-700 hover:underline">
                liquidación de haberes
              </Link>
              , cargas sociales,{" "}
              <Link href="/tramites" className="text-blue-700 hover:underline">
                trámites societarios
              </Link>
              , libros contables y documentación necesaria para operar de
              manera ordenada.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Si necesitás realizar un trámite puntual, también podés
              consultarnos. Muchas personas se comunican por certificados
              contables, constancias de ingresos, manifestaciones de bienes,
              documentación para bancos, trámites societarios, modificaciones
              de autoridades o requerimientos específicos de organismos e
              instituciones.
            </p>
          </article>

          <article>
            <h2
              id="atencion"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Atención personalizada
            </h2>
            <p className="opacity-70 text-base">
              En Estudio Contable Dillon creemos que un buen asesoramiento
              empieza por entender el caso concreto. No todas las consultas
              requieren el mismo tipo de respuesta. Algunas se resuelven con
              una orientación puntual; otras necesitan revisar documentación,
              analizar antecedentes o planificar una estrategia de
              regularización.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Por eso, cuando te comuniques con nosotros, te vamos a pedir la
              información necesaria para poder orientarte correctamente. Puede
              ser tu condición fiscal, actividad, jurisdicción, tipo de
              trámite, período consultado o documentación relacionada con el
              tema.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Nuestro objetivo es que tengas claridad sobre tu situación y
              sepas qué pasos conviene dar. La contabilidad y los impuestos
              pueden ser complejos, pero la explicación no tiene por qué serlo.
            </p>
          </article>

          <article>
            <h2
              id="nuevos-clientes"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Consultas para nuevos clientes
            </h2>
            <p className="opacity-70 text-base">
              Si estás buscando un estudio contable para acompañarte de manera
              mensual, podés escribirnos y contarnos cuál es tu actividad, bajo
              qué régimen estás inscripto y qué tipo de servicio necesitás.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Podemos asesorarte si estás por iniciar una actividad, si querés
              cambiar de contador, si necesitás ordenar documentación atrasada
              o si buscás un servicio más claro, moderno y organizado.
            </p>
            <p className="mt-4 opacity-70 text-base">
              También trabajamos con clientes que necesitan resolver
              situaciones específicas, como deuda fiscal,{" "}
              <Link
                href="/vencimientos"
                className="text-blue-700 hover:underline"
              >
                vencimientos
              </Link>{" "}
              pendientes, intimaciones, presentaciones omitidas o trámites que
              quedaron inconclusos.
            </p>
          </article>

          <article>
            <h2
              id="reuniones"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Reuniones y entrevistas
            </h2>
            <p className="opacity-70 text-base">
              Una vez recibida tu consulta, nos comunicaremos para coordinar
              una entrevista o avanzar con el análisis inicial del caso. Según
              la necesidad, la reunión puede ser presencial o virtual.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En esa instancia podremos revisar tu situación, responder tus
              dudas y explicarte qué documentación hace falta para avanzar.
              Buscamos que cada cliente tenga una respuesta clara desde el
              primer contacto y sepa qué puede esperar del servicio.
            </p>
          </article>

          <article>
            <h2
              id="comunicate"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Comunicate con nosotros
            </h2>
            <p className="opacity-70 text-base">
              Podés contactarnos por mail o a través de nuestras redes
              sociales. Te responderemos a la brevedad para coordinar una
              entrevista y brindarte el asesoramiento que necesitás.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon estamos para ayudarte a ordenar tus
              obligaciones contables, fiscales, laborales y societarias, con un
              servicio profesional, claro y orientado a soluciones concretas.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Si necesitás asesoramiento contable en Capital Federal,
              escribinos. Contanos tu consulta y te indicaremos cómo avanzar.
            </p>
          </article>

          <section className="mt-10">
            <h2 className="mb-4 text-lg font-semibold opacity-70">
              Preguntas frecuentes sobre contacto y consultas
            </h2>
            <FAQAccordion faqs={contactoFAQs} />
          </section>

        </div>
      </main>
    </>
  );
};

export default Contacto;
