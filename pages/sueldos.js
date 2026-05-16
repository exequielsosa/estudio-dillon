import Link from "next/link";
import HeaderImage from "@/components/headerImage";
import FAQAccordion from "@/components/faqAccordion";
import ServiceMenu from "@/components/serviceMenu";
import SeoSueldos from "@/components/seo/seoSueldos";
import { sueldosFAQs } from "@/lib/faqs/sueldos";

const sueldosMenu = [
  { name: "Asesoramiento en liquidación de haberes", id: "liquidacion" },
  { name: "Incorporación de personal", id: "incorporacion" },
  { name: "Alta temprana y registración laboral", id: "alta-temprana" },
  { name: "Determinación del convenio colectivo", id: "convenio" },
  { name: "Administración mensual de personal", id: "administracion" },
  { name: "Cargas sociales y SUSS", id: "cargas-sociales" },
  { name: "Recibos de sueldo", id: "recibos" },
  { name: "Ganancias sobre sueldos", id: "ganancias-sueldos" },
  { name: "Egreso y liquidaciones finales", id: "egreso" },
];

const Sueldos = () => {
  return (
    <>
      <SeoSueldos />
      <main className="flex flex-col w-full">
        <HeaderImage
          image="/header/sueldos.jpg"
          alt="Liquidación de sueldos y jornales - Estudio Contable Dillon"
        />

        <div className="w-full flex flex-col mb-10">
          <article>
            <h1 className="mt-8 text-xl font-semibold">
              Servicios de Liquidación de Haberes
            </h1>
            <p className="mt-2 text-base font-medium opacity-80">
              Liquidación de sueldos y administración de personal para empresas
              en Capital Federal
            </p>

            <p className="mt-4 opacity-70 text-sm">
              En Estudio Contable Dillon brindamos un servicio integral de
              liquidación de haberes y administración de personal para empresas,
              comercios, profesionales, pymes y sociedades que necesitan cumplir
              correctamente con sus obligaciones laborales, previsionales y
              sindicales.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              La gestión de sueldos no se reduce únicamente a calcular cuánto
              debe cobrar cada empleado. Implica conocer la normativa laboral
              vigente, aplicar correctamente los convenios colectivos de
              trabajo, calcular aportes y contribuciones, presentar cargas
              sociales, emitir recibos de sueldo, mantener legajos actualizados,
              registrar altas y bajas, y acompañar cada etapa de la relación
              laboral.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Sabemos que para muchas empresas la administración del personal
              puede consumir mucho tiempo y generar dudas frecuentes. Una
              liquidación incorrecta, una presentación fuera de término o una
              registración incompleta puede derivar en reclamos, multas,
              diferencias salariales o inconvenientes con organismos de control.
              Por eso, nuestro objetivo es ayudarte a trabajar con tranquilidad,
              orden y respaldo profesional.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Desde nuestro estudio contable en Capital Federal, acompañamos a
              empleadores de distintos rubros en la gestión mensual de sus
              obligaciones vinculadas con el personal. Nos ocupamos tanto de la
              ejecución operativa de los{" "}
              <Link href="/tramites" className="text-blue-700 hover:underline">
                trámites
              </Link>{" "}
              como del asesoramiento necesario para que cada empresa pueda tomar
              decisiones claras y cumplir con sus responsabilidades.
            </p>
          </article>

          <ServiceMenu items={sueldosMenu} />

          <article>
            <h2
              id="liquidacion"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Asesoramiento en liquidación de haberes
            </h2>
            <p className="opacity-70 text-sm">
              La liquidación de haberes requiere precisión técnica y seguimiento
              permanente. Cada empleado puede tener una situación distinta según
              su categoría, convenio colectivo, jornada laboral, antigüedad,
              adicionales, horas extras, licencias, ausencias, vacaciones,
              premios, comisiones, descuentos, aportes, contribuciones y
              retenciones.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              En Estudio Contable Dillon analizamos cada caso para confeccionar
              liquidaciones de sueldo correctas y acordes a la normativa
              aplicable. Trabajamos con diferentes convenios colectivos de
              trabajo y revisamos las particularidades de cada actividad para
              evitar errores en la determinación de haberes.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Nuestro servicio está pensado para empresas que buscan delegar la
              liquidación de sueldos en un equipo profesional, pero también para
              aquellas que ya cuentan con administración interna y necesitan
              asesoramiento, revisión o acompañamiento técnico.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Podemos encargarnos de todo el proceso o asistir a la empresa en
              etapas específicas, según sus necesidades. Lo importante es que la
              información laboral esté ordenada, los cálculos sean consistentes
              y los{" "}
              <Link
                href="/vencimientos"
                className="text-blue-700 hover:underline"
              >
                vencimientos
              </Link>{" "}
              se cumplan en tiempo y forma.
            </p>
          </article>

          <article>
            <h2
              id="incorporacion"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Incorporación de personal
            </h2>
            <p className="opacity-70 text-sm">
              El ingreso de un nuevo empleado requiere cumplir una serie de
              pasos administrativos y laborales. Una incorporación mal
              gestionada puede generar problemas desde el inicio de la relación
              laboral. Por eso, acompañamos a las empresas en todo el proceso de
              alta de personal.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Entre las tareas vinculadas con la incorporación de empleados,
              realizamos y asesoramos sobre:
            </p>
            <ul className="list-disc ml-6 mt-3 opacity-70 text-sm space-y-1">
              <li>Trámite de obtención de CUIL.</li>
              <li>Obtención y coordinación de exámenes preocupacionales.</li>
              <li>Alta temprana del trabajador.</li>
              <li>
                Determinación del convenio colectivo de trabajo aplicable.
              </li>
              <li>Definición de categoría laboral.</li>
              <li>Revisión de jornada y modalidad de contratación.</li>
              <li>Confección del legajo del empleado.</li>
              <li>Organización de la documentación laboral necesaria.</li>
            </ul>
            <p className="mt-4 opacity-70 text-sm">
              Este proceso es clave para que la relación laboral comience
              correctamente registrada. Además, permite evitar errores
              frecuentes vinculados con categorías incorrectas, convenios mal
              aplicados, datos incompletos o documentación faltante.
            </p>
          </article>

          <article>
            <h2
              id="alta-temprana"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Alta temprana y registración laboral
            </h2>
            <p className="opacity-70 text-sm">
              La alta temprana es uno de los pasos fundamentales al momento de
              incorporar personal. Permite registrar formalmente la relación
              laboral ante los organismos correspondientes y debe realizarse
              antes del inicio efectivo de las tareas.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              En Estudio Contable Dillon gestionamos las altas tempranas de
              empleados y verificamos que los datos cargados sean correctos:
              empleador, trabajador, fecha de ingreso, modalidad contractual,
              actividad, obra social, puesto, convenio colectivo y demás
              información necesaria.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Una registración adecuada evita contingencias laborales y
              previsionales. También permite que el trabajador quede
              correctamente incorporado al sistema, con sus aportes, cobertura y
              derechos laborales debidamente informados.
            </p>
          </article>

          <article>
            <h2
              id="convenio"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Determinación del convenio colectivo de trabajo
            </h2>
            <p className="opacity-70 text-sm">
              Uno de los aspectos más importantes en la administración de
              personal es determinar correctamente el convenio colectivo de
              trabajo aplicable. Esta definición impacta directamente en el
              salario, las categorías, los adicionales, la jornada, las
              licencias, los beneficios y las obligaciones sindicales.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Aplicar un convenio incorrecto puede generar diferencias
              salariales, reclamos laborales o ajustes posteriores. Por eso,
              analizamos la actividad principal de la empresa, las tareas del
              trabajador, el encuadre sindical y la normativa correspondiente.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              La correcta aplicación del convenio colectivo permite liquidar los
              haberes de manera adecuada y cumplir con las obligaciones
              laborales de cada actividad.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Confección de legajos del personal
            </h2>
            <p className="opacity-70 text-sm">
              El legajo del empleado es una herramienta fundamental para ordenar
              la documentación laboral. Debe contener la información básica del
              trabajador, documentación personal, constancias de alta, exámenes
              preocupacionales, recibos, comunicaciones, licencias, cambios de
              categoría, sanciones si existieran y demás antecedentes relevantes
              de la relación laboral.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              En Estudio Contable Dillon ayudamos a confeccionar, revisar y
              mantener actualizados los legajos del personal. Esto permite que
              la empresa tenga la documentación respaldatoria disponible ante
              cualquier consulta, auditoría, inspección o reclamo.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Un legajo ordenado no es un detalle administrativo menor. Es una
              parte importante de una gestión laboral prolija y preventiva.
            </p>
          </article>

          <article>
            <h2
              id="administracion"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Administración mensual de personal
            </h2>
            <p className="opacity-70 text-sm">
              La administración de personal requiere seguimiento constante. Mes
              a mes pueden producirse novedades que impactan en la liquidación
              de sueldos: horas extras, ausencias, licencias médicas,
              vacaciones, feriados trabajados, comisiones, adelantos, aumentos
              salariales, cambios de categoría, acuerdos paritarios o
              modificaciones en los aportes.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Nuestro servicio contempla la recepción y revisión de novedades
              mensuales para realizar una liquidación precisa. Trabajamos de
              manera ordenada para que la empresa pueda informar los cambios
              correspondientes y recibir los recibos, boletas y documentación
              necesaria para cumplir con sus obligaciones.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Entre las tareas de administración mensual se incluyen:
            </p>
            <ul className="list-disc ml-6 mt-3 opacity-70 text-sm space-y-1">
              <li>Cálculo de haberes.</li>
              <li>Liquidación de sueldos mensuales o quincenales.</li>
              <li>Aplicación de convenios colectivos de trabajo.</li>
              <li>Cálculo de aportes y contribuciones.</li>
              <li>Cálculo de retenciones, cuando corresponda.</li>
              <li>Confección de recibos de sueldo.</li>
              <li>Liquidación de vacaciones.</li>
              <li>Liquidación de aguinaldo.</li>
              <li>Liquidación de horas extras.</li>
              <li>Control de licencias y ausencias.</li>
              <li>Emisión de boletas para el pago de cargas sociales.</li>
            </ul>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Inscripción como empleador
            </h2>
            <p className="opacity-70 text-sm">
              Cuando una empresa incorpora personal por primera vez, debe
              realizar las inscripciones correspondientes como empleador. Este
              paso es indispensable para poder registrar trabajadores, liquidar
              cargas sociales y cumplir con las obligaciones previsionales,
              laborales y sindicales.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              En Estudio Contable Dillon asesoramos y gestionamos la inscripción
              como empleador, revisando la situación fiscal y laboral de la
              empresa para que pueda comenzar a contratar personal de manera
              correcta.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              También asistimos en{" "}
              <Link href="/tramites" className="text-blue-700 hover:underline">
                inscripciones
              </Link>{" "}
              vinculadas con obra social, sindicato y demás organismos o
              entidades que correspondan según la actividad y el convenio
              aplicable.
            </p>
          </article>

          <article>
            <h2
              id="cargas-sociales"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Liquidación de cargas sociales y SUSS
            </h2>
            <p className="opacity-70 text-sm">
              La liquidación y presentación de SUSS y cargas sociales forma
              parte central del servicio de administración de personal. Cada
              mes, el empleador debe declarar los sueldos liquidados, calcular
              aportes y contribuciones, y generar las boletas correspondientes
              para su pago.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Nos ocupamos de confeccionar y presentar las declaraciones
              correspondientes, verificando que los datos coincidan con los
              haberes liquidados y con la nómina vigente de empleados.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              El cumplimiento correcto de estas obligaciones es fundamental para
              evitar intereses, intimaciones, inconsistencias previsionales o
              problemas futuros para la empresa y sus trabajadores.
            </p>
          </article>

          <article>
            <h2
              id="recibos"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Recibos de sueldo
            </h2>
            <p className="opacity-70 text-sm">
              La confección de recibos de sueldo debe reflejar correctamente
              todos los conceptos liquidados: remunerativos, no remunerativos,
              descuentos, aportes, contribuciones, adicionales, horas extras,
              vacaciones, aguinaldo y demás conceptos que correspondan.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              En Estudio Contable Dillon elaboramos los recibos de sueldo de
              acuerdo con la liquidación mensual y la normativa aplicable.
              También asesoramos sobre la documentación que debe entregarse al
              trabajador y sobre la forma correcta de conservar los comprobantes
              respaldatorios.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Un recibo claro y bien confeccionado reduce dudas, mejora la
              comunicación con el personal y permite respaldar adecuadamente la
              liquidación realizada.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Libro de sueldos y jornales
            </h2>
            <p className="opacity-70 text-sm">
              La confección y rubricación del libro de sueldos y jornales es
              otra obligación relevante para los empleadores. Este registro
              permite documentar las liquidaciones efectuadas y cumplir con los
              requisitos laborales correspondientes.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Asistimos en la preparación de la información necesaria para el
              libro de sueldos, su actualización y el cumplimiento de los
              procedimientos de rúbrica que correspondan según la jurisdicción y
              la modalidad aplicable.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Mantener este registro en orden es fundamental ante inspecciones,
              auditorías o revisiones laborales.
            </p>
          </article>

          <article>
            <h2
              id="ganancias-sueldos"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Impuesto a las Ganancias sobre sueldos
            </h2>
            <p className="opacity-70 text-sm">
              En determinados casos, los empleadores deben actuar como agentes
              de retención del{" "}
              <Link href="/impuestos" className="text-blue-700 hover:underline">
                Impuesto a las Ganancias
              </Link>{" "}
              sobre los haberes de sus empleados. Esto exige analizar
              remuneraciones, deducciones informadas, cargas de familia,
              percepciones, pagos a cuenta y demás datos declarados por el
              trabajador.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              En Estudio Contable Dillon asesoramos en el cálculo de retenciones
              de Ganancias de cuarta categoría, revisando la información
              disponible y aplicando los criterios vigentes.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              También acompañamos en la revisión de liquidaciones anuales o
              finales, para que la empresa pueda cumplir correctamente con su
              rol como agente de retención.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Beneficios promocionales y reducción de cargas sociales
            </h2>
            <p className="opacity-70 text-sm">
              Analizamos la posibilidad de aplicar beneficios promocionales,
              reducciones o tratamientos especiales sobre cargas sociales cuando
              correspondan según la normativa vigente y las características de
              la empresa.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Este análisis permite identificar oportunidades de mejora en el
              costo laboral, siempre dentro del marco legal aplicable. No se
              trata de reducir costos de cualquier manera, sino de revisar si
              existen beneficios disponibles que puedan ser aprovechados
              correctamente por el empleador.
            </p>
          </article>

          <article>
            <h2
              id="egreso"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Egreso de personal y liquidaciones finales
            </h2>
            <p className="opacity-70 text-sm">
              La desvinculación de un empleado también requiere una gestión
              cuidadosa. Una liquidación final mal calculada puede generar
              conflictos, reclamos o diferencias posteriores.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Asistimos en el cálculo de liquidaciones finales, considerando
              conceptos como días trabajados, sueldo proporcional, vacaciones no
              gozadas, aguinaldo proporcional, indemnizaciones si
              correspondieran, preaviso, integración del mes de despido y demás
              rubros aplicables según el caso.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              También asesoramos sobre la documentación necesaria para
              formalizar el egreso del trabajador y cerrar correctamente la
              relación laboral.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Prevención de errores y contingencias laborales
            </h2>
            <p className="opacity-70 text-sm">
              Una administración laboral ordenada permite prevenir problemas.
              Muchos conflictos se originan en errores evitables: altas fuera de
              término, categorías mal aplicadas, recibos incompletos,
              liquidaciones incorrectas, diferencias de convenio, falta de
              documentación o vencimientos incumplidos.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Nuestro enfoque es preventivo. Buscamos detectar inconsistencias
              antes de que se conviertan en un problema. Para eso, revisamos la
              información, mantenemos actualizados los procesos y acompañamos a
              la empresa con criterio profesional.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              El objetivo es que el empleador pueda concentrarse en su
              actividad, sabiendo que la gestión de sueldos y cargas sociales
              está controlada.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Un servicio claro, profesional y adaptado a cada empresa
            </h2>
            <p className="opacity-70 text-sm">
              Cada empresa tiene una realidad distinta. No es lo mismo liquidar
              sueldos para un comercio, una pyme de servicios, una empresa con
              personal administrativo, una actividad con convenio específico o
              una organización con empleados en distintas modalidades.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Por eso, en Estudio Contable Dillon ofrecemos un servicio flexible
              y adaptado a cada cliente. Podemos ocuparnos de la liquidación
              completa de haberes, de la administración mensual del personal o
              del asesoramiento puntual en situaciones específicas.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              Trabajamos con orden, confidencialidad y responsabilidad, cuidando
              tanto el cumplimiento normativo como la claridad en la
              comunicación con el cliente.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Consultá por nuestro servicio de liquidación de sueldos
            </h2>
            <p className="opacity-70 text-sm">
              Si necesitás un estudio contable para la liquidación de sueldos en
              Capital Federal, querés ordenar la administración de personal de
              tu empresa, registrar empleados, presentar cargas sociales,
              confeccionar recibos o revisar liquidaciones, podemos ayudarte.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              En Estudio Contable Dillon te acompañamos para que la gestión
              laboral de tu empresa sea más simple, ordenada y segura.
            </p>
            <p className="mt-4 opacity-70 text-sm">
              <Link
                href="/contacto"
                className="text-blue-700 hover:underline font-medium"
              >
                Contactanos
              </Link>{" "}
              y contanos tu situación. Te vamos a orientar con claridad para
              encontrar la mejor forma de administrar los haberes y obligaciones
              laborales de tu empresa.
            </p>
          </article>

          <section className="mt-10">
            <h2 className="mb-4 text-lg font-semibold opacity-70">
              Preguntas frecuentes sobre liquidación de haberes
            </h2>
            <FAQAccordion faqs={sueldosFAQs} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Sueldos;
