import Image from "next/image";
import Link from "next/link";

// Texto SEO original de la home, sin cambios de contenido: solo cambia la presentación.
const LINK = "font-bold text-tinta-900 underline decoration-ambar-500 decoration-2 underline-offset-[3px] hover:text-tinta-700";
const P = "text-base lg:text-[17px] leading-[1.7] text-tinta-700";
const PC = "text-[15px] lg:text-base leading-[1.7] text-tinta-700";
const H2 = "text-[24px] lg:text-[34px] font-extrabold tracking-tight leading-[1.15] text-tinta-900";
const H2C = "text-[21px] lg:text-[26px] font-extrabold tracking-tight leading-[1.2] text-tinta-900";

function Fila({ img, alt, imagenDerecha, children }) {
  return (
    <div className="mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[72px] items-center [&>*]:min-w-0">
      <div className={`flex flex-col gap-3.5 ${imagenDerecha ? "lg:order-1" : "lg:order-2"}`}>{children}</div>
      <div className={`relative h-[220px] sm:h-[320px] lg:h-[440px] rounded-[20px] lg:rounded-[24px] overflow-hidden order-first ${imagenDerecha ? "lg:order-2" : "lg:order-1"}`}>
        <Image src={img} alt={alt} fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
      </div>
    </div>
  );
}

export function QuienesSomos() {
  return (
    <section className="mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-5 lg:gap-[72px] [&>*]:min-w-0">
      <div className="flex flex-col gap-3 lg:gap-[18px]">
        <p className="text-xs lg:text-[13px] font-bold tracking-[0.2em] text-ambar-800">QUIÉNES SOMOS</p>
        <p className="text-[28px] lg:text-[40px] font-extrabold tracking-[-0.03em] leading-[1.12] text-tinta-900">
          Nuestro principal objetivo es darte <span className="text-ambar-800">tranquilidad.</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className={P}>
          En Estudio Contable Dillon sabemos que la mayoría de las
          personas no quiere pasar horas tratando de entender
          vencimientos, declaraciones juradas, impuestos, trámites
          fiscales o cambios normativos. Y está bien que así sea. Si tenés
          un negocio, trabajás de manera independiente, dirigís una
          empresa o estás empezando un proyecto, tu tiempo debería estar
          puesto en hacerlo crecer, conseguir nuevos clientes, mejorar tus
          servicios y tomar mejores decisiones.
        </p>
        <p className={P}>
          Nuestro trabajo es ayudarte a que tus obligaciones contables e
          impositivas estén en orden, con un acompañamiento claro,
          profesional y cercano. Somos un estudio contable ubicado en
          Capital Federal, con experiencia en el asesoramiento a
          monotributistas, responsables inscriptos, profesionales
          independientes, emprendedores, startups, pymes y sociedades de
          distintos rubros.
        </p>
        <p className={P}>
          Nos enfocamos en brindar un servicio contable práctico, moderno
          y eficiente. No creemos en complicar lo que puede explicarse de
          manera simple. Por eso trabajamos para que cada cliente entienda
          qué tiene que pagar, cuándo tiene que hacerlo, qué documentación
          debe presentar y qué decisiones conviene tomar para evitar
          problemas fiscales, multas, omisiones o costos innecesarios.
        </p>
        <p className={P}>
          En Estudio Contable Dillon nuestro principal objetivo es darte
          tranquilidad. Queremos que sepas que tus impuestos,
          presentaciones, inscripciones y vencimientos están siendo
          gestionados por profesionales que conocen la normativa, que
          siguen los cambios del sistema tributario argentino y que
          entienden las necesidades reales de quienes trabajan, venden,
          facturan, contratan personal o administran una empresa.
        </p>
      </div>
    </section>
  );
}

export function SeccionesHome() {
  return (
    <>
      <Fila img="/home/servicios.jpg" alt="Servicios contables integrales" imagenDerecha>
        <h2 className={H2}>Servicios contables e impositivos para personas y empresas</h2>
        <p className={P}>
          Ofrecemos un servicio integral de asesoramiento contable,
          impositivo y administrativo para clientes de Capital Federal y
          de todo el país. Trabajamos con herramientas digitales que nos
          permiten agilizar procesos, ordenar información y mantener una
          comunicación fluida, sin perder el trato personalizado que cada
          caso necesita.
        </p>
        <p className={P}>
          Acompañamos a quienes necesitan iniciar una actividad,
          inscribirse correctamente, elegir el régimen tributario
          adecuado, regularizar su situación fiscal o mejorar la
          organización contable de su negocio.
        </p>
        <p className={P}>
          Entre nuestros principales servicios se encuentran la
          inscripción y gestión de{" "}
          <Link
            href="/monotributo"
            className={LINK}
          >
            monotributo
          </Link>
          , asesoramiento para responsables inscriptos,{" "}
          <Link
            href="/impuestos"
            className={LINK}
          >
            liquidación de impuestos
          </Link>{" "}
          nacionales y locales, presentación de declaraciones juradas,
          control de{" "}
          <Link
            href="/vencimientos"
            className={LINK}
          >
            vencimientos
          </Link>
          , planificación fiscal,{" "}
          <Link href="/sueldos" className={LINK}>
            liquidación de sueldos
          </Link>
          , asesoramiento societario, altas de actividad, bajas,
          modificaciones de datos, atención a requerimientos y
          acompañamiento en{" "}
          <Link
            href="/tramites"
            className={LINK}
          >
            trámites
          </Link>{" "}
          ante los organismos correspondientes.
        </p>
        <p className={P}>
          También asistimos a empresas que necesitan ordenar su
          administración contable, mejorar sus procesos internos, delegar
          tareas fiscales o contar con información más clara para la toma
          de decisiones. Sabemos que una contabilidad bien llevada no
          sirve solamente para cumplir con la ley: también ayuda a
          entender mejor los números del negocio.
        </p>
      </Fila>

      <Fila img="/home/responsables.jpg" alt="Contadores para empresas">
        <h2 className={H2}>Contadores para responsables inscriptos, profesionales y empresas</h2>
        <p className={P}>
          Cuando una persona o empresa está inscripta como responsable
          inscripto, la gestión contable e impositiva requiere mayor
          seguimiento. La{" "}
          <Link
            href="/impuestos"
            className={LINK}
          >
            liquidación de IVA, Ganancias, Ingresos Brutos
          </Link>
          , regímenes de información, retenciones, percepciones y
          declaraciones juradas exige orden, documentación y control
          permanente.
        </p>
        <p className={P}>
          En estos casos, nuestro trabajo consiste en acompañar al cliente
          mes a mes para que sus obligaciones se cumplan correctamente.
          Revisamos la información disponible, solicitamos la
          documentación necesaria, liquidamos los impuestos
          correspondientes y explicamos cada vencimiento para que no haya
          sorpresas.
        </p>
        <p className={P}>
          También asesoramos en cuestiones vinculadas con la facturación,
          gastos deducibles, registración de operaciones, planificación
          fiscal y evaluación de la carga tributaria. Una buena gestión
          contable permite evitar problemas, pero también detectar
          oportunidades de mejora.
        </p>
      </Fila>

      <div className="mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 [&>*]:min-w-0">
        <article className="bg-tinta-50 rounded-[20px] lg:rounded-[22px] p-6 lg:p-9 flex flex-col gap-3">
          <h2 className={H2C}>Asesoramiento para monotributistas</h2>
          <p className={PC}>
            El{" "}
            <Link
              href="/monotributo"
              className={LINK}
            >
              monotributo
            </Link>{" "}
            parece simple, pero muchas veces genera dudas. Qué categoría
            corresponde, cuándo recategorizarse, qué pasa si se supera el
            límite de facturación, cómo emitir facturas, qué obra social
            elegir, cómo pagar deuda, cómo evitar exclusiones o qué hacer si
            aparece una intimación son consultas frecuentes.
          </p>
          <p className={PC}>
            En Estudio Contable Dillon ayudamos a monotributistas de
            distintos rubros a mantenerse al día y evitar errores comunes.
            Nos ocupamos de revisar la situación fiscal, controlar{" "}
            <Link
              href="/vencimientos"
              className={LINK}
            >
              vencimientos
            </Link>
            , analizar la facturación, realizar recategorizaciones cuando
            corresponde y responder consultas concretas de manera clara.
          </p>
          <p className={PC}>
            Nuestro objetivo es que el monotributista pueda trabajar con
            tranquilidad, sabiendo que su situación está controlada y que
            cuenta con un contador que puede orientarlo cuando aparece una
            duda o un cambio importante.
          </p>
        </article>
        <article className="bg-tinta-50 rounded-[20px] lg:rounded-[22px] p-6 lg:p-9 flex flex-col gap-3">
          <h2 className={H2C}>Startups, pymes y nuevos negocios</h2>
          <p className={PC}>
            Muchas startups y pymes crecen rápido, pero no siempre acompañan
            ese crecimiento con una estructura contable ordenada. Al
            principio todo parece manejable, pero con el tiempo aparecen
            nuevos proveedores, empleados, clientes, facturación recurrente,
            inversiones, gastos, impuestos y obligaciones que requieren
            mayor organización.
          </p>
          <p className={PC}>
            En Estudio Contable Dillon trabajamos con empresas de distintas
            formas y tamaños, incluyendo emprendimientos en etapa inicial y
            negocios en expansión. Entendemos que cada proyecto tiene sus
            propios tiempos y necesidades. Por eso no ofrecemos soluciones
            genéricas: analizamos cada caso y proponemos una forma de
            trabajo acorde a la realidad del cliente.
          </p>
          <p className={PC}>
            Podemos ayudarte a definir una estructura fiscal adecuada,
            ordenar la documentación, preparar reportes, acompañar la
            constitución o administración de sociedades,{" "}
            <Link
              href="/impuestos"
              className={LINK}
            >
              liquidar impuestos
            </Link>
            ,{" "}
            <Link href="/sueldos" className={LINK}>
              gestionar sueldos
            </Link>{" "}
            y mejorar el control general de la información contable.
          </p>
          <p className={PC}>
            Nuestro enfoque es simple: que la contabilidad no sea un
            obstáculo, sino una herramienta útil para crecer mejor.
          </p>
        </article>
      </div>

      <Fila img="/home/estudio.jpg" alt="Estudio contable moderno" imagenDerecha>
        <h2 className={H2}>Un estudio contable moderno, cercano y claro</h2>
        <p className={P}>
          Elegir un contador no debería ser solamente elegir a alguien que
          presente impuestos. Un buen estudio contable tiene que estar
          disponible, explicar con claridad, anticiparse a los
          vencimientos y acompañar al cliente en las decisiones
          importantes.
        </p>
        <p className={P}>
          En Estudio Contable Dillon nos esforzamos por escuchar las
          necesidades de cada cliente, invertir en tecnología y capacitar
          permanentemente a nuestro equipo para brindar un servicio
          profesional y actualizado. Sabemos que el sistema tributario
          argentino puede ser complejo, cambiante y muchas veces poco
          claro. Por eso buscamos traducir esa complejidad en respuestas
          concretas.
        </p>
        <p className={P}>
          Nos interesa que nuestros clientes entiendan qué estamos
          haciendo y por qué. No usamos tecnicismos innecesarios ni damos
          respuestas automáticas. Cada consulta merece una explicación
          útil, especialmente cuando se trata de impuestos, facturación,
          deuda fiscal, recategorizaciones, altas, bajas o decisiones que
          pueden tener impacto económico.
        </p>
      </Fila>

      <article className="mt-6 border border-tinta-100 rounded-[20px] lg:rounded-[22px] p-6 lg:px-9 lg:py-8 grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-3 lg:gap-12 items-start [&>*]:min-w-0">
        <h2 className={H2C}>Atención en Capital Federal y asesoramiento online en todo el país</h2>
        <div className="flex flex-col gap-3">
          <p className={PC}>
            Aunque somos un estudio contable de Capital Federal, trabajamos
            también con clientes de distintos puntos de Argentina. La
            digitalización de trámites, documentación y comunicaciones
            permite brindar un servicio ágil sin que la distancia sea un
            problema.
          </p>
          <p className={PC}>
            Podemos acompañarte estés en CABA, en la provincia de Buenos
            Aires o en cualquier otra jurisdicción del país. Lo importante
            es contar con una dinámica de trabajo ordenada: documentación
            clara, comunicación fluida, vencimientos controlados y
            seguimiento profesional.
          </p>
          <p className={PC}>
            Para muchos clientes, esta modalidad resulta más cómoda que la
            atención tradicional. Permite resolver consultas, enviar
            comprobantes, revisar información y recibir asesoramiento sin
            perder tiempo en traslados innecesarios.
          </p>
        </div>
      </article>
    </>
  );
}

