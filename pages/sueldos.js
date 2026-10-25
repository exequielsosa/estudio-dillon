import Link from "next/link";
import SeoSueldos from "@/components/seo/seoSueldos";
import { sueldosFAQs } from "@/lib/faqs/sueldos";
import {
  LINK, waCon, HeroServicio, IntroServicio, QueIncluye, Indice, CuerpoServicio, ColumnasServicio,
  Bloque, Titulo, ListaCheck, CtaIntermedio, CtaFinal, PreguntasServicio,
} from "@/components/servicio/ServicioUI";

const WHATSAPP = waCon("Hola, quiero consultar por la liquidación de sueldos de mi empresa.");

// Mismos anclas que antes (#liquidacion, ...): no se rompen links ni sitelinks.
// "linea" es el resumen corto que se ve en "Qué incluye".
const ITEMS = [
  { id: "liquidacion", nombre: "Asesoramiento en liquidación de haberes", linea: "Sueldos calculados según la ley y el convenio, mes a mes." },
  { id: "incorporacion", nombre: "Incorporación de personal", linea: "Todo lo necesario antes de que empiece a trabajar." },
  { id: "alta-temprana", nombre: "Alta temprana y registración laboral", linea: "Registración en tiempo y forma ante ARCA." },
  { id: "convenio", nombre: "Determinación del convenio colectivo", linea: "Identificamos el convenio y la categoría que corresponden." },
  { id: "administracion", nombre: "Administración mensual de personal", linea: "Novedades, licencias, horas extra y ausencias." },
  { id: "cargas-sociales", nombre: "Cargas sociales y SUSS", linea: "Aportes y contribuciones presentados a término." },
  { id: "recibos", nombre: "Recibos de sueldo", linea: "Recibos claros y con los requisitos legales." },
  { id: "ganancias-sueldos", nombre: "Ganancias sobre sueldos", linea: "Retenciones de Ganancias a tus empleados." },
  { id: "egreso", nombre: "Egreso y liquidaciones finales", linea: "Renuncias, despidos y liquidaciones finales." },
];

const Sueldos = () => {
  return (
    <>
      <SeoSueldos />
      <main className="flex flex-col w-full">
        <HeroServicio
          miga="Sueldos"
          eyebrow="SERVICIO · SUELDOS"
          titulo="Servicios de Liquidación de Haberes"
          subtitulo="Liquidación de sueldos y administración de personal para empresas en Capital Federal"
          imagen="/header/sueldos.jpg"
          alt="Liquidación de sueldos y jornales - Estudio Contable Dillon"
          whatsapp={WHATSAPP}
          checks={["Recibos, cargas sociales y SUSS", "Altas, bajas y legajos al día", "El convenio correcto para cada empleado"]}
        />

        <IntroServicio frase="Nuestro objetivo es ayudarte a trabajar con" resaltado="tranquilidad, orden y respaldo profesional.">
          <p>
            En Estudio Contable Dillon brindamos un servicio integral de
            liquidación de haberes y administración de personal para empresas,
            comercios, profesionales, pymes y sociedades que necesitan cumplir
            correctamente con sus obligaciones laborales, previsionales y
            sindicales.
          </p>
          <p>
            La gestión de sueldos no se reduce únicamente a calcular cuánto
            debe cobrar cada empleado. Implica conocer la normativa laboral
            vigente, aplicar correctamente los convenios colectivos de
            trabajo, calcular aportes y contribuciones, presentar cargas
            sociales, emitir recibos de sueldo, mantener legajos actualizados,
            registrar altas y bajas, y acompañar cada etapa de la relación
            laboral.
          </p>
          <p>
            Sabemos que para muchas empresas la administración del personal
            puede consumir mucho tiempo y generar dudas frecuentes. Una
            liquidación incorrecta, una presentación fuera de término o una
            registración incompleta puede derivar en reclamos, multas,
            diferencias salariales o inconvenientes con organismos de control.
            Por eso, nuestro objetivo es ayudarte a trabajar con tranquilidad,
            orden y respaldo profesional.
          </p>
          <p>
            Desde nuestro estudio contable en Capital Federal, acompañamos a
            empleadores de distintos rubros en la gestión mensual de sus
            obligaciones vinculadas con el personal. Nos ocupamos tanto de la
            ejecución operativa de los{" "}
            <Link href="/tramites" className={LINK}>
              trámites
            </Link>{" "}
            como del asesoramiento necesario para que cada empresa pueda tomar
            decisiones claras y cumplir con sus responsabilidades.
          </p>
        </IntroServicio>

        <QueIncluye titulo="Todo lo que hacemos por tu personal" items={ITEMS} />

        <CuerpoServicio items={ITEMS}>
          <ColumnasServicio indice={<Indice items={ITEMS} whatsapp={WHATSAPP} />}>
            <Bloque img="/stock/stock22.jpg" alt="Asesoramiento en liquidación de haberes">
              <Titulo id="liquidacion">
                Asesoramiento en liquidación de haberes
              </Titulo>
              <p>
                La liquidación de haberes requiere precisión técnica y seguimiento
                permanente. Cada empleado puede tener una situación distinta según
                su categoría, convenio colectivo, jornada laboral, antigüedad,
                adicionales, horas extras, licencias, ausencias, vacaciones,
                premios, comisiones, descuentos, aportes, contribuciones y
                retenciones.
              </p>
              <p>
                En Estudio Contable Dillon analizamos cada caso para confeccionar
                liquidaciones de sueldo correctas y acordes a la normativa
                aplicable. Trabajamos con diferentes convenios colectivos de
                trabajo y revisamos las particularidades de cada actividad para
                evitar errores en la determinación de haberes.
              </p>
              <p>
                Nuestro servicio está pensado para empresas que buscan delegar la
                liquidación de sueldos en un equipo profesional, pero también para
                aquellas que ya cuentan con administración interna y necesitan
                asesoramiento, revisión o acompañamiento técnico.
              </p>
              <p>
                Podemos encargarnos de todo el proceso o asistir a la empresa en
                etapas específicas, según sus necesidades. Lo importante es que la
                información laboral esté ordenada, los cálculos sean consistentes
                y los{" "}
                <Link
                  href="/vencimientos"
                  className={LINK}
                >
                  vencimientos
                </Link>{" "}
                se cumplan en tiempo y forma.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="incorporacion">
                Incorporación de personal
              </Titulo>
              <p>
                El ingreso de un nuevo empleado requiere cumplir una serie de
                pasos administrativos y laborales. Una incorporación mal
                gestionada puede generar problemas desde el inicio de la relación
                laboral. Por eso, acompañamos a las empresas en todo el proceso de
                alta de personal.
              </p>
              <p>
                Entre las tareas vinculadas con la incorporación de empleados,
                realizamos y asesoramos sobre:
              </p>
              <ListaCheck>
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
              </ListaCheck>
              <p>
                Este proceso es clave para que la relación laboral comience
                correctamente registrada. Además, permite evitar errores
                frecuentes vinculados con categorías incorrectas, convenios mal
                aplicados, datos incompletos o documentación faltante.
              </p>
            </Bloque>

            <CtaIntermedio titulo="¿Vas a contratar a tu primer empleado?" texto="Te explicamos todo lo que necesitás antes del alta." whatsapp={WHATSAPP} />

            <Bloque img="/stock/stock14.jpg" alt="Alta temprana y registración laboral">
              <Titulo id="alta-temprana">
                Alta temprana y registración laboral
              </Titulo>
              <p>
                La alta temprana es uno de los pasos fundamentales al momento de
                incorporar personal. Permite registrar formalmente la relación
                laboral ante los organismos correspondientes y debe realizarse
                antes del inicio efectivo de las tareas.
              </p>
              <p>
                En Estudio Contable Dillon gestionamos las altas tempranas de
                empleados y verificamos que los datos cargados sean correctos:
                empleador, trabajador, fecha de ingreso, modalidad contractual,
                actividad, obra social, puesto, convenio colectivo y demás
                información necesaria.
              </p>
              <p>
                Una registración adecuada evita contingencias laborales y
                previsionales. También permite que el trabajador quede
                correctamente incorporado al sistema, con sus aportes, cobertura y
                derechos laborales debidamente informados.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="convenio">
                Determinación del convenio colectivo de trabajo
              </Titulo>
              <p>
                Uno de los aspectos más importantes en la administración de
                personal es determinar correctamente el convenio colectivo de
                trabajo aplicable. Esta definición impacta directamente en el
                salario, las categorías, los adicionales, la jornada, las
                licencias, los beneficios y las obligaciones sindicales.
              </p>
              <p>
                Aplicar un convenio incorrecto puede generar diferencias
                salariales, reclamos laborales o ajustes posteriores. Por eso,
                analizamos la actividad principal de la empresa, las tareas del
                trabajador, el encuadre sindical y la normativa correspondiente.
              </p>
              <p>
                La correcta aplicación del convenio colectivo permite liquidar los
                haberes de manera adecuada y cumplir con las obligaciones
                laborales de cada actividad.
              </p>
            </Bloque>

            <Bloque img="/stock/stock24.jpg" alt="Confección de legajos del personal">
              <Titulo>Confección de legajos del personal</Titulo>
              <p>
                El legajo del empleado es una herramienta fundamental para ordenar
                la documentación laboral. Debe contener la información básica del
                trabajador, documentación personal, constancias de alta, exámenes
                preocupacionales, recibos, comunicaciones, licencias, cambios de
                categoría, sanciones si existieran y demás antecedentes relevantes
                de la relación laboral.
              </p>
              <p>
                En Estudio Contable Dillon ayudamos a confeccionar, revisar y
                mantener actualizados los legajos del personal. Esto permite que
                la empresa tenga la documentación respaldatoria disponible ante
                cualquier consulta, auditoría, inspección o reclamo.
              </p>
              <p>
                Un legajo ordenado no es un detalle administrativo menor. Es una
                parte importante de una gestión laboral prolija y preventiva.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="administracion">
                Administración mensual de personal
              </Titulo>
              <p>
                La administración de personal requiere seguimiento constante. Mes
                a mes pueden producirse novedades que impactan en la liquidación
                de sueldos: horas extras, ausencias, licencias médicas,
                vacaciones, feriados trabajados, comisiones, adelantos, aumentos
                salariales, cambios de categoría, acuerdos paritarios o
                modificaciones en los aportes.
              </p>
              <p>
                Nuestro servicio contempla la recepción y revisión de novedades
                mensuales para realizar una liquidación precisa. Trabajamos de
                manera ordenada para que la empresa pueda informar los cambios
                correspondientes y recibir los recibos, boletas y documentación
                necesaria para cumplir con sus obligaciones.
              </p>
              <p>
                Entre las tareas de administración mensual se incluyen:
              </p>
              <ListaCheck>
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
              </ListaCheck>
            </Bloque>

            <Bloque img="/stock/stock23.jpg" alt="Inscripción como empleador">
              <Titulo>Inscripción como empleador</Titulo>
              <p>
                Cuando una empresa incorpora personal por primera vez, debe
                realizar las inscripciones correspondientes como empleador. Este
                paso es indispensable para poder registrar trabajadores, liquidar
                cargas sociales y cumplir con las obligaciones previsionales,
                laborales y sindicales.
              </p>
              <p>
                En Estudio Contable Dillon asesoramos y gestionamos la inscripción
                como empleador, revisando la situación fiscal y laboral de la
                empresa para que pueda comenzar a contratar personal de manera
                correcta.
              </p>
              <p>
                También asistimos en{" "}
                <Link href="/tramites" className={LINK}>
                  inscripciones
                </Link>{" "}
                vinculadas con obra social, sindicato y demás organismos o
                entidades que correspondan según la actividad y el convenio
                aplicable.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="cargas-sociales">
                Liquidación de cargas sociales y SUSS
              </Titulo>
              <p>
                La liquidación y presentación de SUSS y cargas sociales forma
                parte central del servicio de administración de personal. Cada
                mes, el empleador debe declarar los sueldos liquidados, calcular
                aportes y contribuciones, y generar las boletas correspondientes
                para su pago.
              </p>
              <p>
                Nos ocupamos de confeccionar y presentar las declaraciones
                correspondientes, verificando que los datos coincidan con los
                haberes liquidados y con la nómina vigente de empleados.
              </p>
              <p>
                El cumplimiento correcto de estas obligaciones es fundamental para
                evitar intereses, intimaciones, inconsistencias previsionales o
                problemas futuros para la empresa y sus trabajadores.
              </p>
            </Bloque>

            <Bloque img="/stock/stock28.jpg" alt="Recibos de sueldo">
              <Titulo id="recibos">
                Recibos de sueldo
              </Titulo>
              <p>
                La confección de recibos de sueldo debe reflejar correctamente
                todos los conceptos liquidados: remunerativos, no remunerativos,
                descuentos, aportes, contribuciones, adicionales, horas extras,
                vacaciones, aguinaldo y demás conceptos que correspondan.
              </p>
              <p>
                En Estudio Contable Dillon elaboramos los recibos de sueldo de
                acuerdo con la liquidación mensual y la normativa aplicable.
                También asesoramos sobre la documentación que debe entregarse al
                trabajador y sobre la forma correcta de conservar los comprobantes
                respaldatorios.
              </p>
              <p>
                Un recibo claro y bien confeccionado reduce dudas, mejora la
                comunicación con el personal y permite respaldar adecuadamente la
                liquidación realizada.
              </p>
            </Bloque>

            <Bloque>
              <Titulo>Libro de sueldos y jornales</Titulo>
              <p>
                La confección y rubricación del libro de sueldos y jornales es
                otra obligación relevante para los empleadores. Este registro
                permite documentar las liquidaciones efectuadas y cumplir con los
                requisitos laborales correspondientes.
              </p>
              <p>
                Asistimos en la preparación de la información necesaria para el
                libro de sueldos, su actualización y el cumplimiento de los
                procedimientos de rúbrica que correspondan según la jurisdicción y
                la modalidad aplicable.
              </p>
              <p>
                Mantener este registro en orden es fundamental ante inspecciones,
                auditorías o revisiones laborales.
              </p>
            </Bloque>

            <Bloque img="/stock/stock30.jpg" alt="Ganancias sobre sueldos">
              <Titulo id="ganancias-sueldos">
                Impuesto a las Ganancias sobre sueldos
              </Titulo>
              <p>
                En determinados casos, los empleadores deben actuar como agentes
                de retención del{" "}
                <Link href="/impuestos" className={LINK}>
                  Impuesto a las Ganancias
                </Link>{" "}
                sobre los haberes de sus empleados. Esto exige analizar
                remuneraciones, deducciones informadas, cargas de familia,
                percepciones, pagos a cuenta y demás datos declarados por el
                trabajador.
              </p>
              <p>
                En Estudio Contable Dillon asesoramos en el cálculo de retenciones
                de Ganancias de cuarta categoría, revisando la información
                disponible y aplicando los criterios vigentes.
              </p>
              <p>
                También acompañamos en la revisión de liquidaciones anuales o
                finales, para que la empresa pueda cumplir correctamente con su
                rol como agente de retención.
              </p>
            </Bloque>

            <Bloque>
              <Titulo>
                Beneficios promocionales y reducción de cargas sociales
              </Titulo>
              <p>
                Analizamos la posibilidad de aplicar beneficios promocionales,
                reducciones o tratamientos especiales sobre cargas sociales cuando
                correspondan según la normativa vigente y las características de
                la empresa.
              </p>
              <p>
                Este análisis permite identificar oportunidades de mejora en el
                costo laboral, siempre dentro del marco legal aplicable. No se
                trata de reducir costos de cualquier manera, sino de revisar si
                existen beneficios disponibles que puedan ser aprovechados
                correctamente por el empleador.
              </p>
            </Bloque>

            <Bloque img="/stock/stock29.jpg" alt="Egreso y liquidaciones finales">
              <Titulo id="egreso">
                Egreso de personal y liquidaciones finales
              </Titulo>
              <p>
                La desvinculación de un empleado también requiere una gestión
                cuidadosa. Una liquidación final mal calculada puede generar
                conflictos, reclamos o diferencias posteriores.
              </p>
              <p>
                Asistimos en el cálculo de liquidaciones finales, considerando
                conceptos como días trabajados, sueldo proporcional, vacaciones no
                gozadas, aguinaldo proporcional, indemnizaciones si
                correspondieran, preaviso, integración del mes de despido y demás
                rubros aplicables según el caso.
              </p>
              <p>
                También asesoramos sobre la documentación necesaria para
                formalizar el egreso del trabajador y cerrar correctamente la
                relación laboral.
              </p>
            </Bloque>

            <Bloque>
              <Titulo>
                Prevención de errores y contingencias laborales
              </Titulo>
              <p>
                Una administración laboral ordenada permite prevenir problemas.
                Muchos conflictos se originan en errores evitables: altas fuera de
                término, categorías mal aplicadas, recibos incompletos,
                liquidaciones incorrectas, diferencias de convenio, falta de
                documentación o vencimientos incumplidos.
              </p>
              <p>
                Nuestro enfoque es preventivo. Buscamos detectar inconsistencias
                antes de que se conviertan en un problema. Para eso, revisamos la
                información, mantenemos actualizados los procesos y acompañamos a
                la empresa con criterio profesional.
              </p>
              <p>
                El objetivo es que el empleador pueda concentrarse en su
                actividad, sabiendo que la gestión de sueldos y cargas sociales
                está controlada.
              </p>
            </Bloque>

            <Bloque img="/stock/stock32.jpg" alt="Servicio adaptado a cada empresa">
              <Titulo>
                Un servicio claro, profesional y adaptado a cada empresa
              </Titulo>
              <p>
                Cada empresa tiene una realidad distinta. No es lo mismo liquidar
                sueldos para un comercio, una pyme de servicios, una empresa con
                personal administrativo, una actividad con convenio específico o
                una organización con empleados en distintas modalidades.
              </p>
              <p>
                Por eso, en Estudio Contable Dillon ofrecemos un servicio flexible
                y adaptado a cada cliente. Podemos ocuparnos de la liquidación
                completa de haberes, de la administración mensual del personal o
                del asesoramiento puntual en situaciones específicas.
              </p>
              <p>
                Trabajamos con orden, confidencialidad y responsabilidad, cuidando
                tanto el cumplimiento normativo como la claridad en la
                comunicación con el cliente.
              </p>
            </Bloque>
          </ColumnasServicio>
        </CuerpoServicio>

        <CtaFinal titulo="Consultá por nuestro servicio de liquidación de sueldos" whatsapp={WHATSAPP}>
          <p>
            Si necesitás un estudio contable para la liquidación de sueldos en
            Capital Federal, querés ordenar la administración de personal de
            tu empresa, registrar empleados, presentar cargas sociales,
            confeccionar recibos o revisar liquidaciones, podemos ayudarte.
          </p>
          <p>
            En Estudio Contable Dillon te acompañamos para que la gestión
            laboral de tu empresa sea más simple, ordenada y segura.
          </p>
          <p>
            <Link
              href="/contacto"
            >
              Contactanos
            </Link>{" "}
            y contanos tu situación. Te vamos a orientar con claridad para
            encontrar la mejor forma de administrar los haberes y obligaciones
            laborales de tu empresa.
          </p>
        </CtaFinal>

        <PreguntasServicio titulo="Preguntas frecuentes sobre liquidación de haberes" faqs={sueldosFAQs} />
      </main>
    </>
  );
};

export default Sueldos;
