import Link from "next/link";
import SeoTramites from "@/components/seo/seoTramites";
import { tramitesFAQs } from "@/lib/faqs/tramites";
import {
  LINK, waCon, HeroServicio, IntroServicio, QueIncluye, Indice, CuerpoServicio, ColumnasServicio,
  Bloque, Titulo, ListaCheck, CtaIntermedio, CtaFinal, PreguntasServicio,
} from "@/components/servicio/ServicioUI";

const WHATSAPP = waCon("Hola, quiero consultar por un trámite societario o un certificado contable.");

// Mismos anclas que antes (#igj, ...): no se rompen links ni sitelinks.
// "linea" es el resumen corto que se ve en "Qué incluye".
const ITEMS = [
  { id: "igj", nombre: "Trámites societarios en IGJ", linea: "Presentaciones y seguimiento ante la Inspección General de Justicia." },
  { id: "constitucion", nombre: "Constitución de sociedades", linea: "SA, SRL y SAS, desde el estatuto hasta la inscripción." },
  { id: "transformacion", nombre: "Transformación y disolución", linea: "Cambios de tipo societario, disolución y liquidación." },
  { id: "modificacion", nombre: "Modificación de estatutos y autoridades", linea: "Estatutos, autoridades y composición accionaria." },
  { id: "vistas", nombre: "Vistas y seguimiento ante IGJ", linea: "Respondemos observaciones y destrabamos expedientes." },
  { id: "libros", nombre: "Libros societarios", linea: "Libros societarios rubricados y al día." },
  { id: "reuniones", nombre: "Reuniones societarias", linea: "Convocatorias, actas y asambleas en regla." },
  { id: "certificados", nombre: "Certificados Contables", linea: "Certificaciones contables para bancos y organismos." },
  { id: "cert-ingresos", nombre: "Certificado de ingresos", linea: "Para alquileres, créditos y otros trámites." },
  { id: "manif-bienes", nombre: "Manifestación de bienes", linea: "Detalle certificado de tu patrimonio." },
  { id: "origen-fondos", nombre: "Origen lícito de fondos", linea: "Justificación del origen de fondos ante bancos y organismos." },
];

const Tramites = () => {
  return (
    <>
      <SeoTramites />
      <main className="flex flex-col w-full">
        <HeroServicio
          miga="Trámites"
          eyebrow="SERVICIO · TRÁMITES"
          titulo="Gestión de Trámites Contables y Societarios"
          subtitulo="Trámites societarios, certificados contables y gestiones ante organismos en Capital Federal"
          imagen="/header/tramites.jpg"
          alt="Gestión de trámites ante AFIP - Estudio Contable Dillon"
          whatsapp={WHATSAPP}
          checks={["IGJ, sociedades y libros", "Certificados contables", "Seguimiento hasta el final"]}
        />

        <IntroServicio frase="Nuestro objetivo es acompañar a cada cliente con un servicio" resaltado="claro, ordenado y profesional.">
          <p>
            En Estudio Contable Dillon brindamos un servicio integral de
            gestión de trámites contables, societarios y administrativos para
            personas, profesionales, empresas, sociedades comerciales y
            entidades que necesitan cumplir con requisitos formales ante
            organismos públicos, instituciones financieras, entidades privadas
            o autoridades de control.
          </p>
          <p>
            Sabemos que muchos trámites requieren tiempo, documentación
            específica, seguimiento técnico y conocimiento de los
            procedimientos aplicables. Una presentación incompleta, un dato
            mal informado o una demora en la respuesta puede generar
            observaciones, vistas, rechazos o la necesidad de volver a iniciar
            una gestión. Por eso, nuestro objetivo es acompañar a cada cliente
            con un servicio claro, ordenado y profesional.
          </p>
          <p>
            Desde nuestro estudio contable en Capital Federal, gestionamos
            trámites ante la Inspección General de Justicia —IGJ—, organismos
            fiscales, consejos profesionales, entidades bancarias y otras
            instituciones que puedan requerir documentación contable,
            societaria, fiscal o patrimonial.
          </p>
          <p>
            Trabajamos tanto con clientes que necesitan iniciar una sociedad
            desde cero como con empresas ya constituidas que requieren
            mantener actualizada su documentación, modificar autoridades,
            regularizar libros, preparar actas, emitir certificados contables
            o responder requerimientos administrativos.
          </p>
        </IntroServicio>

        <QueIncluye titulo="Todo lo que gestionamos por vos" items={ITEMS} />

        <CuerpoServicio items={ITEMS}>
          <ColumnasServicio indice={<Indice items={ITEMS} whatsapp={WHATSAPP} />}>
            <Bloque img="/tramites-min.jpg" alt="Trámites societarios IGJ">
              <Titulo id="igj">
                Trámites societarios en IGJ CABA
              </Titulo>
              <p>
                La gestión societaria requiere cumplir con normas específicas y
                mantener actualizada la información formal de la sociedad. En
                CABA, muchos de estos trámites se realizan ante la Inspección
                General de Justicia, organismo encargado de la registración y
                fiscalización de sociedades comerciales, asociaciones civiles,
                fundaciones y otras entidades.
              </p>
              <p>
                En Estudio Contable Dillon ofrecemos asistencia en trámites
                societarios ante IGJ, incluyendo constitución de sociedades,
                modificaciones estatutarias, inscripción de autoridades,
                publicaciones legales, seguimiento de expedientes, contestación de
                vistas y mantenimiento de documentación societaria.
              </p>
              <p>
                Nuestro servicio está orientado a emprendedores, socios,
                accionistas, empresas familiares, pymes, startups y compañías que
                necesitan una gestión societaria prolija y respaldada por
                profesionales.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="constitucion">
                Constitución de sociedades comerciales
              </Titulo>
              <p>
                La constitución de una sociedad es una decisión importante. No se
                trata solamente de elegir una forma jurídica y completar
                formularios. Es necesario analizar el tipo de actividad, la
                cantidad de socios, el capital inicial, la responsabilidad de cada
                integrante, la administración, la proyección del negocio y las
                obligaciones fiscales y societarias que surgirán después de la
                inscripción.
              </p>
              <p>
                Asesoramos en la constitución de sociedades comerciales en IGJ
                CABA, incluyendo:
              </p>
              <ListaCheck>
                <li>SAS.</li>
                <li>SRL.</li>
                <li>SA.</li>
                <li>Otros tipos societarios, según el caso.</li>
                <li>Análisis de la estructura más conveniente.</li>
                <li>Preparación de documentación.</li>
                <li>Redacción o revisión de instrumentos societarios.</li>
                <li>Inscripción ante IGJ.</li>
                <li>Seguimiento del trámite hasta su finalización.</li>
                <li>Asesoramiento posterior a la constitución.</li>
              </ListaCheck>
              <p>
                Una sociedad bien constituida desde el inicio permite evitar
                problemas futuros entre socios, errores registrales, dificultades
                bancarias o inconvenientes frente a organismos fiscales.
              </p>
            </Bloque>

            <CtaIntermedio titulo="¿Necesitás un certificado o un trámite en IGJ?" texto="Contanos qué te piden y te decimos cómo avanzar." whatsapp={WHATSAPP} />

            <Bloque img="/stock/stock41.jpg" alt="Transformación y disolución de sociedades">
              <Titulo id="transformacion">
                Transformación, modificación y disolución de sociedades
              </Titulo>
              <p>
                Las sociedades pueden cambiar con el tiempo. Es común que se
                modifique la composición accionaria, se incorporen nuevos socios,
                cambien las autoridades, se reforme el estatuto, se altere el
                objeto social, se actualice el domicilio o se decida transformar o
                disolver la sociedad.
              </p>
              <p>
                En Estudio Contable Dillon acompañamos estos procesos mediante la
                preparación, revisión y gestión de la documentación necesaria.
              </p>
              <p>
                Realizamos trámites vinculados con:
              </p>
              <ListaCheck>
                <li>Transformación de sociedades.</li>
                <li>Disolución de sociedades comerciales.</li>
                <li>Modificación de estatutos.</li>
                <li>Cambio de autoridades.</li>
                <li>Modificación de composición accionaria.</li>
                <li>Cambio de domicilio.</li>
                <li>Reforma de objeto social.</li>
                <li>Actualización de datos registrales.</li>
                <li>Inscripción de decisiones societarias ante IGJ.</li>
              </ListaCheck>
              <p>
                Estas gestiones requieren precisión, especialmente cuando
                involucran actas, publicaciones, instrumentos privados o públicos,
                certificaciones, dictámenes, formularios y seguimiento
                administrativo.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="modificacion">
                Modificación de estatutos, autoridades y composición accionaria
              </Titulo>
              <p>
                La actualización de estatutos, autoridades y composición
                accionaria es fundamental para que la sociedad mantenga su
                situación formal en orden.
              </p>
              <p>
                Una sociedad que no actualiza sus autoridades, no inscribe cambios
                relevantes o no mantiene correctamente sus libros puede tener
                dificultades para operar, abrir cuentas bancarias, presentarse
                ante organismos, obtener financiamiento, firmar contratos o
                acreditar representación legal.
              </p>
              <p>
                En nuestro estudio asistimos en la preparación de actas,
                documentación respaldatoria y presentaciones necesarias para
                registrar este tipo de modificaciones.
              </p>
              <p>
                El objetivo es que la información formal de la sociedad refleje
                correctamente su realidad actual.
              </p>
            </Bloque>

            <Bloque img="/stock/stock41.avif" alt="Vistas y seguimiento IGJ">
              <Titulo id="vistas">
                Vistas y seguimiento de expedientes ante IGJ
              </Titulo>
              <p>
                Muchas presentaciones ante IGJ pueden recibir observaciones o
                vistas. Esto no necesariamente implica un problema grave, pero sí
                requiere responder en tiempo y forma con documentación adecuada.
              </p>
              <p>
                En Estudio Contable Dillon realizamos el seguimiento de
                expedientes y asistimos en la contestación de vistas, revisando el
                motivo de la observación y preparando la respuesta
                correspondiente.
              </p>
              <p>
                Este servicio es clave para evitar demoras innecesarias y avanzar
                con la inscripción o aprobación del trámite.
              </p>
              <p>
                Nos ocupamos de monitorear el estado de los expedientes, revisar
                requerimientos y orientar al cliente sobre los pasos necesarios
                para completar la gestión.
              </p>
            </Bloque>

            <Bloque>
              <Titulo>Publicaciones legales y Artículo 60</Titulo>
              <p>
                Gestionamos publicaciones legales vinculadas con trámites
                societarios, incluyendo publicaciones del Artículo 60,
                especialmente en casos de designación de autoridades u otras
                modificaciones que deban ser informadas conforme a la normativa
                vigente.
              </p>
              <p>
                La publicación correcta de edictos y avisos legales es parte
                fundamental de muchos trámites societarios. Un error en el texto,
                en los datos de la sociedad o en los plazos puede generar
                observaciones o demoras.
              </p>
              <p>
                Por eso, revisamos la información antes de avanzar y coordinamos
                la publicación según el trámite correspondiente.
              </p>
            </Bloque>

            <Bloque img="/stock/stock42.avif" alt="Libros societarios">
              <Titulo id="libros">
                Libros societarios actualizados
              </Titulo>
              <p>
                El mantenimiento de los libros societarios es una obligación
                importante para sociedades comerciales. Los libros permiten
                documentar decisiones, reuniones, composición societaria,
                movimientos de acciones o cuotas, autoridades y demás actos
                relevantes de la vida societaria.
              </p>
              <p>
                En Estudio Contable Dillon asistimos en el mantenimiento
                actualizado de libros societarios, incluyendo la preparación de
                actas y el ordenamiento de la documentación necesaria.
              </p>
              <p>
                Entre los libros y registros que pueden requerir seguimiento se
                encuentran:
              </p>
              <ListaCheck>
                <li>Libro de actas.</li>
                <li>Libro de registro de accionistas o socios.</li>
                <li>Libro diario.</li>
                <li>Libro inventario y balances.</li>
                <li>Libros especiales según el tipo societario.</li>
                <li>Documentación respaldatoria de reuniones y decisiones.</li>
              </ListaCheck>
              <p>
                Mantener los libros en orden no es solo una formalidad. Es una
                medida preventiva que brinda respaldo frente a socios, organismos,
                bancos, terceros y eventuales conflictos.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="reuniones">
                Preparación y conducción de reuniones societarias
              </Titulo>
              <p>
                Las reuniones societarias deben prepararse correctamente para que
                sus decisiones tengan validez y puedan ser documentadas de manera
                adecuada.
              </p>
              <p>
                Brindamos asistencia en la preparación y conducción de reuniones
                societarias, incluyendo:
              </p>
              <ListaCheck>
                <li>Fijación del orden del día.</li>
                <li>Preparación de convocatoria.</li>
                <li>Redacción de actas.</li>
                <li>Revisión de documentación respaldatoria.</li>
                <li>Registro de decisiones.</li>
                <li>Formalización de designación de autoridades.</li>
                <li>Aprobación de estados contables.</li>
                <li>Tratamiento de temas societarios relevantes.</li>
              </ListaCheck>
              <p>
                Este servicio es especialmente útil para sociedades que necesitan
                ordenar su funcionamiento interno o documentar decisiones
                importantes con respaldo formal.
              </p>
            </Bloque>

            <Bloque img="/stock/stock42.jpg" alt="Sociedades del exterior">
              <Titulo>Sociedades y sucursales del exterior</Titulo>
              <p>
                También brindamos asistencia en trámites vinculados con sociedades
                y sucursales del exterior, incluyendo inscripción, actualización
                de información y servicios generales de bookkeeping.
              </p>
              <p>
                Las sociedades extranjeras que operan o participan en estructuras
                locales pueden requerir documentación específica, inscripción
                registral, presentación de estados contables, designación de
                representantes o cumplimiento de obligaciones periódicas.
              </p>
              <p>
                En estos casos, es fundamental contar con asesoramiento
                profesional para ordenar la documentación y cumplir con los
                requisitos aplicables.
              </p>
            </Bloque>

            <Bloque>
              <Titulo>
                Acuerdos societarios entre socios o accionistas
              </Titulo>
              <p>
                Los acuerdos entre socios o accionistas son herramientas útiles
                para regular relaciones internas, definir reglas de
                funcionamiento, establecer derechos y obligaciones, prever
                mecanismos de salida, ordenar la toma de decisiones y reducir
                conflictos futuros.
              </p>
              <p>
                En Estudio Contable Dillon asistimos en la negociación, confección
                e implementación de acuerdos societarios, trabajando sobre la
                documentación necesaria y acompañando el proceso desde una mirada
                técnica y práctica.
              </p>
              <p>
                Estos acuerdos pueden ser especialmente importantes en empresas
                familiares, startups, sociedades con nuevos inversores o proyectos
                donde existen varios socios con distintos roles.
              </p>
              <p>
                Una estructura clara desde el inicio puede evitar discusiones
                costosas más adelante.
              </p>
            </Bloque>

            <Bloque img="/stock/stock44.jpg" alt="Estatutos y reglamentos">
              <Titulo>Confección de estatutos y reglamentos</Titulo>
              <p>
                La confección de estatutos y reglamentos internos requiere
                precisión. Estos documentos definen aspectos centrales del
                funcionamiento de la sociedad o entidad: objeto, administración,
                representación, decisiones, mayorías, derechos de socios,
                obligaciones, fiscalización y mecanismos de funcionamiento.
              </p>
              <p>
                Asesoramos en la redacción, revisión y adecuación de estatutos y
                reglamentos, buscando que el documento responda a la realidad del
                proyecto y no sea simplemente un modelo genérico.
              </p>
              <p>
                Cada sociedad tiene necesidades distintas. Por eso, es importante
                que la documentación societaria acompañe la actividad real y la
                forma en que los socios esperan organizarse.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="certificados">
                Certificados Contables
              </Titulo>
              <p className="!text-lg lg:!text-xl !font-semibold !text-tinta-900">
                Emisión de certificados contables legalizados en CABA
              </p>
              <p>
                En Estudio Contable Dillon emitimos distintos tipos de
                certificados contables a solicitud de particulares, profesionales,
                empresas o instituciones que necesitan acreditar una determinada
                situación económica, financiera, patrimonial, fiscal o
                previsional.
              </p>
              <p>
                Los certificados contables pueden ser requeridos por bancos,
                organismos públicos, entidades privadas, escribanías,
                inmobiliarias, instituciones educativas, empresas, juzgados u
                otros terceros que necesitan constatar información respaldada por
                un profesional en Ciencias Económicas.
              </p>
              <p>
                Nuestros certificados son confeccionados por profesional contable
                y, cuando corresponde, legalizados ante el Consejo Profesional de
                Ciencias Económicas de la Ciudad Autónoma de Buenos Aires.
              </p>
              <p>
                Este tipo de documentación requiere revisar antecedentes,
                comprobantes y respaldo suficiente. Por eso, antes de emitir un
                certificado, analizamos la información disponible y solicitamos la
                documentación necesaria para que el informe refleje correctamente
                la situación que se pretende acreditar.
              </p>
            </Bloque>

            <Bloque img="/stock/stock45.jpg" alt="Certificado de ingresos">
              <Titulo id="cert-ingresos">
                Certificado de ingresos
              </Titulo>
              <p>
                Uno de los certificados más solicitados es el certificado de
                ingresos. Puede ser requerido para alquilar una vivienda,
                solicitar un crédito, presentar documentación ante una entidad
                bancaria, justificar capacidad económica o acreditar ingresos ante
                terceros.
              </p>
              <p>
                Emitimos certificados de ingresos provenientes de distintas
                fuentes, como:
              </p>
              <ListaCheck>
                <li>Sueldos percibidos.</li>
                <li>Ventas.</li>
                <li>Honorarios profesionales.</li>
                <li>Actividad comercial.</li>
                <li>Alquileres.</li>
                <li>Intereses.</li>
                <li>Dividendos.</li>
                <li>Otros ingresos personales o empresariales.</li>
              </ListaCheck>
              <p>
                Cada certificado se confecciona según la información respaldatoria
                disponible. No todos los casos son iguales: un empleado en
                relación de dependencia, un{" "}
                <Link
                  href="/monotributo"
                  className={LINK}
                >
                  monotributista
                </Link>
                , un responsable inscripto, un profesional independiente o una
                sociedad requieren análisis y documentación distinta.
              </p>
            </Bloque>

            <Bloque>
              <Titulo>Certificado de sueldos percibidos</Titulo>
              <p>
                El certificado de{" "}
                <Link href="/sueldos" className={LINK}>
                  sueldos percibidos
                </Link>{" "}
                permite acreditar ingresos laborales obtenidos durante un período
                determinado. Puede ser solicitado por bancos, inmobiliarias,
                organismos, instituciones educativas o terceros interesados.
              </p>
              <p>
                Para su confección, se revisan recibos de sueldo, constancias
                laborales u otra documentación que permita respaldar los importes
                informados.
              </p>
              <p>
                Este certificado resulta útil cuando una persona necesita
                demostrar ingresos formales de manera clara y respaldada por
                profesional contable.
              </p>
            </Bloque>

            <Bloque img="/stock/stock46.jpg" alt="Certificado de ingresos por ventas">
              <Titulo>Certificado de ingresos por ventas</Titulo>
              <p>
                El certificado de ingresos por ventas puede ser requerido por
                comerciantes, profesionales, monotributistas, responsables
                inscriptos, empresas o sociedades que necesitan acreditar el nivel
                de facturación o ingresos derivados de su actividad.
              </p>
              <p>
                Para emitirlo, revisamos facturación, comprobantes emitidos,
                registros contables, declaraciones juradas y demás documentación
                respaldatoria.
              </p>
              <p>
                Este certificado puede ser necesario para operaciones bancarias,
                alquileres comerciales, licitaciones, análisis crediticios,
                trámites institucionales o presentaciones ante terceros.
              </p>
            </Bloque>

            <Bloque>
              <Titulo id="manif-bienes">
                Manifestación de bienes
              </Titulo>
              <p>
                La manifestación de bienes permite declarar y acreditar la
                composición patrimonial de una persona o empresa en un momento
                determinado. Puede incluir inmuebles, vehículos, cuentas
                bancarias, inversiones, participaciones societarias, bienes
                registrables y otros activos.
              </p>
              <p>
                Este tipo de certificado suele ser requerido en operaciones
                importantes, trámites bancarios, presentaciones patrimoniales,
                procesos administrativos o situaciones donde se necesita respaldar
                solvencia económica.
              </p>
              <p>
                En Estudio Contable Dillon confeccionamos manifestaciones de
                bienes revisando la documentación correspondiente y aplicando
                criterios profesionales para presentar la información de manera
                clara y ordenada.
              </p>
            </Bloque>

            <Bloque img="/stock/stock43.avif" alt="Origen lícito de fondos">
              <Titulo id="origen-fondos">
                Certificado de origen lícito de fondos
              </Titulo>
              <p>
                El certificado de origen lícito de fondos es solicitado con
                frecuencia en operaciones inmobiliarias, bancarias, societarias,
                inversiones, transferencias patrimoniales u otras transacciones
                donde se requiere justificar la procedencia de los fondos
                utilizados.
              </p>
              <p>
                Este certificado exige especial cuidado. No se trata solamente de
                informar un monto, sino de revisar documentación que permita
                respaldar el origen declarado: ingresos, ventas, ahorros,
                préstamos, dividendos, indemnizaciones, operaciones patrimoniales
                u otras fuentes justificables.
              </p>
              <p>
                En Estudio Contable Dillon asistimos en la preparación de
                certificados de origen lícito de fondos, solicitando y revisando
                la documentación necesaria para confeccionar un informe adecuado
                al destino del trámite.
              </p>
            </Bloque>

            <Bloque>
              <Titulo>
                Informe sobre cumplimiento de obligaciones impositivas y
                previsionales
              </Titulo>
              <p>
                También emitimos informes sobre cumplimiento de obligaciones{" "}
                <Link href="/impuestos" className={LINK}>
                  impositivas
                </Link>{" "}
                y previsionales. Estos documentos pueden ser requeridos por
                empresas, organismos, entidades contratantes, licitaciones,
                procesos de auditoría o terceros que necesitan verificar la
                situación fiscal y previsional de una persona o sociedad.
              </p>
              <p>
                Para su confección se revisa la situación del contribuyente,
                presentaciones efectuadas, pagos realizados, deuda existente,
                constancias fiscales y demás información relevante.
              </p>
              <p>
                Este tipo de informe permite acreditar orden fiscal y previsional,
                algo especialmente importante para empresas que contratan con
                terceros, participan en procesos formales o necesitan demostrar
                cumplimiento.
              </p>
            </Bloque>

            <Bloque img="/stock/stock47.jpg" alt="Trámites con seguimiento profesional">
              <Titulo>
                Trámites contables con seguimiento profesional
              </Titulo>
              <p>
                La gestión de trámites contables y societarios requiere algo más
                que presentar papeles. Requiere entender qué se pide, por qué se
                pide, qué documentación respalda la presentación y cuáles pueden
                ser las consecuencias de hacerlo mal.
              </p>
              <p>
                En Estudio Contable Dillon trabajamos con una metodología
                ordenada: analizamos el trámite, solicitamos la documentación
                necesaria, preparamos la presentación, realizamos el seguimiento y
                mantenemos informado al cliente durante el proceso.
              </p>
              <p>
                Nuestro objetivo es reducir tiempos, evitar errores y brindar un
                servicio claro para que cada cliente pueda resolver sus gestiones
                con respaldo profesional.
              </p>
            </Bloque>
          </ColumnasServicio>
        </CuerpoServicio>

        <CtaFinal titulo="Consultá por trámites societarios o certificados contables" whatsapp={WHATSAPP}>
          <p>
            Si necesitás constituir una sociedad, modificar autoridades,
            actualizar libros societarios, responder una vista de IGJ,
            preparar actas, gestionar publicaciones legales o solicitar un
            certificado contable en CABA, podemos ayudarte.
          </p>
          <p>
            En Estudio Contable Dillon brindamos asesoramiento profesional
            para trámites contables y societarios en Capital Federal, con
            atención personalizada y seguimiento de cada gestión.
          </p>
          <p>
            <Link
              href="/contacto"
            >
              Contactanos
            </Link>{" "}
            y contanos qué trámite necesitás realizar. Te vamos a indicar qué
            documentación hace falta, cuáles son los pasos a seguir y cómo
            podemos ayudarte a resolverlo de manera ordenada.
          </p>
        </CtaFinal>

        <PreguntasServicio titulo="Preguntas frecuentes sobre trámites societarios y certificados contables" faqs={tramitesFAQs} />
      </main>
    </>
  );
};

export default Tramites;
