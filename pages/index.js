import Link from "next/link";
import CarouselHome from "@/components/carouselHome";
import SeoHome from "@/components/seo/seoHome";
import FAQSchema from "@/components/seo/FAQSchema";

const Home = () => {
  return (
    <>
      <SeoHome />
      <FAQSchema />
      <main>
        <CarouselHome />
        <div className="flex w-full justify-center flex-col items-center">
          <div className="w-full">
            <article>
              <h1 className="mt-4 md:mt-8 text-2xl font-semibold">
                Estudio Contable Dillon
              </h1>
              <p className="mt-2 text-lg font-medium opacity-80">
                Estudio contable en Capital Federal para monotributistas,
                profesionales, startups y empresas
              </p>

              <p className="mt-4 opacity-70 text-base">
                En Estudio Contable Dillon sabemos que la mayoría de las
                personas no quiere pasar horas tratando de entender
                vencimientos, declaraciones juradas, impuestos, trámites
                fiscales o cambios normativos. Y está bien que así sea. Si tenés
                un negocio, trabajás de manera independiente, dirigís una
                empresa o estás empezando un proyecto, tu tiempo debería estar
                puesto en hacerlo crecer, conseguir nuevos clientes, mejorar tus
                servicios y tomar mejores decisiones.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Nuestro trabajo es ayudarte a que tus obligaciones contables e
                impositivas estén en orden, con un acompañamiento claro,
                profesional y cercano. Somos un estudio contable ubicado en
                Capital Federal, con experiencia en el asesoramiento a
                monotributistas, responsables inscriptos, profesionales
                independientes, emprendedores, startups, pymes y sociedades de
                distintos rubros.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Nos enfocamos en brindar un servicio contable práctico, moderno
                y eficiente. No creemos en complicar lo que puede explicarse de
                manera simple. Por eso trabajamos para que cada cliente entienda
                qué tiene que pagar, cuándo tiene que hacerlo, qué documentación
                debe presentar y qué decisiones conviene tomar para evitar
                problemas fiscales, multas, omisiones o costos innecesarios.
              </p>
              <p className="mt-4 opacity-70 text-base">
                En Estudio Contable Dillon nuestro principal objetivo es darte
                tranquilidad. Queremos que sepas que tus impuestos,
                presentaciones, inscripciones y vencimientos están siendo
                gestionados por profesionales que conocen la normativa, que
                siguen los cambios del sistema tributario argentino y que
                entienden las necesidades reales de quienes trabajan, venden,
                facturan, contratan personal o administran una empresa.
              </p>
            </article>

            <article>
              <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
                Servicios contables e impositivos para personas y empresas
              </h2>
              <p className="opacity-70 text-base">
                Ofrecemos un servicio integral de asesoramiento contable,
                impositivo y administrativo para clientes de Capital Federal y
                de todo el país. Trabajamos con herramientas digitales que nos
                permiten agilizar procesos, ordenar información y mantener una
                comunicación fluida, sin perder el trato personalizado que cada
                caso necesita.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Acompañamos a quienes necesitan iniciar una actividad,
                inscribirse correctamente, elegir el régimen tributario
                adecuado, regularizar su situación fiscal o mejorar la
                organización contable de su negocio.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Entre nuestros principales servicios se encuentran la
                inscripción y gestión de{" "}
                <Link
                  href="/monotributo"
                  className="text-blue-700 hover:underline"
                >
                  monotributo
                </Link>
                , asesoramiento para responsables inscriptos,{" "}
                <Link
                  href="/impuestos"
                  className="text-blue-700 hover:underline"
                >
                  liquidación de impuestos
                </Link>{" "}
                nacionales y locales, presentación de declaraciones juradas,
                control de{" "}
                <Link
                  href="/vencimientos"
                  className="text-blue-700 hover:underline"
                >
                  vencimientos
                </Link>
                , planificación fiscal,{" "}
                <Link href="/sueldos" className="text-blue-700 hover:underline">
                  liquidación de sueldos
                </Link>
                , asesoramiento societario, altas de actividad, bajas,
                modificaciones de datos, atención a requerimientos y
                acompañamiento en{" "}
                <Link
                  href="/tramites"
                  className="text-blue-700 hover:underline"
                >
                  trámites
                </Link>{" "}
                ante los organismos correspondientes.
              </p>
              <p className="mt-4 opacity-70 text-base">
                También asistimos a empresas que necesitan ordenar su
                administración contable, mejorar sus procesos internos, delegar
                tareas fiscales o contar con información más clara para la toma
                de decisiones. Sabemos que una contabilidad bien llevada no
                sirve solamente para cumplir con la ley: también ayuda a
                entender mejor los números del negocio.
              </p>
            </article>

            <article>
              <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
                Asesoramiento para monotributistas
              </h2>
              <p className="opacity-70 text-base">
                El{" "}
                <Link
                  href="/monotributo"
                  className="text-blue-700 hover:underline"
                >
                  monotributo
                </Link>{" "}
                parece simple, pero muchas veces genera dudas. Qué categoría
                corresponde, cuándo recategorizarse, qué pasa si se supera el
                límite de facturación, cómo emitir facturas, qué obra social
                elegir, cómo pagar deuda, cómo evitar exclusiones o qué hacer si
                aparece una intimación son consultas frecuentes.
              </p>
              <p className="mt-4 opacity-70 text-base">
                En Estudio Contable Dillon ayudamos a monotributistas de
                distintos rubros a mantenerse al día y evitar errores comunes.
                Nos ocupamos de revisar la situación fiscal, controlar{" "}
                <Link
                  href="/vencimientos"
                  className="text-blue-700 hover:underline"
                >
                  vencimientos
                </Link>
                , analizar la facturación, realizar recategorizaciones cuando
                corresponde y responder consultas concretas de manera clara.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Nuestro objetivo es que el monotributista pueda trabajar con
                tranquilidad, sabiendo que su situación está controlada y que
                cuenta con un contador que puede orientarlo cuando aparece una
                duda o un cambio importante.
              </p>
            </article>

            <article>
              <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
                Contadores para responsables inscriptos, profesionales y
                empresas
              </h2>
              <p className="opacity-70 text-base">
                Cuando una persona o empresa está inscripta como responsable
                inscripto, la gestión contable e impositiva requiere mayor
                seguimiento. La{" "}
                <Link
                  href="/impuestos"
                  className="text-blue-700 hover:underline"
                >
                  liquidación de IVA, Ganancias, Ingresos Brutos
                </Link>
                , regímenes de información, retenciones, percepciones y
                declaraciones juradas exige orden, documentación y control
                permanente.
              </p>
              <p className="mt-4 opacity-70 text-base">
                En estos casos, nuestro trabajo consiste en acompañar al cliente
                mes a mes para que sus obligaciones se cumplan correctamente.
                Revisamos la información disponible, solicitamos la
                documentación necesaria, liquidamos los impuestos
                correspondientes y explicamos cada vencimiento para que no haya
                sorpresas.
              </p>
              <p className="mt-4 opacity-70 text-base">
                También asesoramos en cuestiones vinculadas con la facturación,
                gastos deducibles, registración de operaciones, planificación
                fiscal y evaluación de la carga tributaria. Una buena gestión
                contable permite evitar problemas, pero también detectar
                oportunidades de mejora.
              </p>
            </article>

            <article>
              <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
                Startups, pymes y nuevos negocios
              </h2>
              <p className="opacity-70 text-base">
                Muchas startups y pymes crecen rápido, pero no siempre acompañan
                ese crecimiento con una estructura contable ordenada. Al
                principio todo parece manejable, pero con el tiempo aparecen
                nuevos proveedores, empleados, clientes, facturación recurrente,
                inversiones, gastos, impuestos y obligaciones que requieren
                mayor organización.
              </p>
              <p className="mt-4 opacity-70 text-base">
                En Estudio Contable Dillon trabajamos con empresas de distintas
                formas y tamaños, incluyendo emprendimientos en etapa inicial y
                negocios en expansión. Entendemos que cada proyecto tiene sus
                propios tiempos y necesidades. Por eso no ofrecemos soluciones
                genéricas: analizamos cada caso y proponemos una forma de
                trabajo acorde a la realidad del cliente.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Podemos ayudarte a definir una estructura fiscal adecuada,
                ordenar la documentación, preparar reportes, acompañar la
                constitución o administración de sociedades,{" "}
                <Link
                  href="/impuestos"
                  className="text-blue-700 hover:underline"
                >
                  liquidar impuestos
                </Link>
                ,{" "}
                <Link href="/sueldos" className="text-blue-700 hover:underline">
                  gestionar sueldos
                </Link>{" "}
                y mejorar el control general de la información contable.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Nuestro enfoque es simple: que la contabilidad no sea un
                obstáculo, sino una herramienta útil para crecer mejor.
              </p>
            </article>

            <article>
              <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
                Un estudio contable moderno, cercano y claro
              </h2>
              <p className="opacity-70 text-base">
                Elegir un contador no debería ser solamente elegir a alguien que
                presente impuestos. Un buen estudio contable tiene que estar
                disponible, explicar con claridad, anticiparse a los
                vencimientos y acompañar al cliente en las decisiones
                importantes.
              </p>
              <p className="mt-4 opacity-70 text-base">
                En Estudio Contable Dillon nos esforzamos por escuchar las
                necesidades de cada cliente, invertir en tecnología y capacitar
                permanentemente a nuestro equipo para brindar un servicio
                profesional y actualizado. Sabemos que el sistema tributario
                argentino puede ser complejo, cambiante y muchas veces poco
                claro. Por eso buscamos traducir esa complejidad en respuestas
                concretas.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Nos interesa que nuestros clientes entiendan qué estamos
                haciendo y por qué. No usamos tecnicismos innecesarios ni damos
                respuestas automáticas. Cada consulta merece una explicación
                útil, especialmente cuando se trata de impuestos, facturación,
                deuda fiscal, recategorizaciones, altas, bajas o decisiones que
                pueden tener impacto económico.
              </p>
            </article>

            <article>
              <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
                Atención en Capital Federal y asesoramiento online en todo el
                país
              </h2>
              <p className="opacity-70 text-base">
                Aunque somos un estudio contable de Capital Federal, trabajamos
                también con clientes de distintos puntos de Argentina. La
                digitalización de trámites, documentación y comunicaciones
                permite brindar un servicio ágil sin que la distancia sea un
                problema.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Podemos acompañarte estés en CABA, en la provincia de Buenos
                Aires o en cualquier otra jurisdicción del país. Lo importante
                es contar con una dinámica de trabajo ordenada: documentación
                clara, comunicación fluida, vencimientos controlados y
                seguimiento profesional.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Para muchos clientes, esta modalidad resulta más cómoda que la
                atención tradicional. Permite resolver consultas, enviar
                comprobantes, revisar información y recibir asesoramiento sin
                perder tiempo en traslados innecesarios.
              </p>
            </article>

            <article className="mb-10">
              <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
                Por qué elegir Estudio Contable Dillon
              </h2>
              <p className="opacity-70 text-base">
                Elegir Estudio Contable Dillon es elegir un equipo que entiende
                tanto la parte técnica como la realidad cotidiana de quienes
                trabajan y emprenden en Argentina. No todos los clientes
                necesitan lo mismo. Un monotributista que recién empieza no
                tiene las mismas necesidades que una sociedad con empleados, ni
                una startup en crecimiento requiere el mismo acompañamiento que
                un profesional independiente.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Por eso adaptamos nuestro servicio a cada perfil. Nos enfocamos
                en brindar soluciones concretas, evitar complicaciones,
                anticipar problemas y ordenar la información fiscal y contable
                de manera eficiente.
              </p>
              <p className="mt-4 opacity-70 text-base">
                Trabajamos con compromiso, responsabilidad y criterio
                profesional. Nos importa que cada cliente pueda concentrarse en
                su actividad principal, sabiendo que cuenta con un estudio
                contable que se ocupa de sus obligaciones y lo acompaña en cada
                etapa.{" "}
                <Link
                  href="/contacto"
                  className="text-blue-700 hover:underline font-medium"
                >
                  Contactanos
                </Link>{" "}
                para coordinar una primera consulta.
              </p>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
