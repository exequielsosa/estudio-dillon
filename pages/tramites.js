import Link from "next/link";
import HeaderImage from "@/components/headerImage";
import FAQAccordion from "@/components/faqAccordion";
import ServiceMenu from "@/components/serviceMenu";
import SeoTramites from "@/components/seo/seoTramites";
import { tramitesFAQs } from "@/lib/faqs/tramites";

const tramitesMenu = [
  { name: "Trámites societarios en IGJ", id: "igj" },
  { name: "Constitución de sociedades", id: "constitucion" },
  { name: "Transformación y disolución", id: "transformacion" },
  { name: "Modificación de estatutos y autoridades", id: "modificacion" },
  { name: "Vistas y seguimiento ante IGJ", id: "vistas" },
  { name: "Libros societarios", id: "libros" },
  { name: "Reuniones societarias", id: "reuniones" },
  { name: "Certificados Contables", id: "certificados" },
  { name: "Certificado de ingresos", id: "cert-ingresos" },
  { name: "Manifestación de bienes", id: "manif-bienes" },
  { name: "Origen lícito de fondos", id: "origen-fondos" },
];

const Tramites = () => {
  return (
    <>
      <SeoTramites />
      <main className="flex flex-col w-full">
        <HeaderImage
          image="/header/tramites.jpg"
          alt="Gestión de trámites ante AFIP - Estudio Contable Dillon"
        />

        <div className="w-full flex flex-col mb-10">
          <article>
            <h1 className="mt-8 text-2xl font-semibold">
              Gestión de Trámites Contables y Societarios
            </h1>
            <p className="mt-2 text-lg font-medium opacity-80">
              Trámites societarios, certificados contables y gestiones ante
              organismos en Capital Federal
            </p>

            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon brindamos un servicio integral de
              gestión de trámites contables, societarios y administrativos para
              personas, profesionales, empresas, sociedades comerciales y
              entidades que necesitan cumplir con requisitos formales ante
              organismos públicos, instituciones financieras, entidades privadas
              o autoridades de control.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Sabemos que muchos trámites requieren tiempo, documentación
              específica, seguimiento técnico y conocimiento de los
              procedimientos aplicables. Una presentación incompleta, un dato
              mal informado o una demora en la respuesta puede generar
              observaciones, vistas, rechazos o la necesidad de volver a iniciar
              una gestión. Por eso, nuestro objetivo es acompañar a cada cliente
              con un servicio claro, ordenado y profesional.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Desde nuestro estudio contable en Capital Federal, gestionamos
              trámites ante la Inspección General de Justicia —IGJ—, organismos
              fiscales, consejos profesionales, entidades bancarias y otras
              instituciones que puedan requerir documentación contable,
              societaria, fiscal o patrimonial.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Trabajamos tanto con clientes que necesitan iniciar una sociedad
              desde cero como con empresas ya constituidas que requieren
              mantener actualizada su documentación, modificar autoridades,
              regularizar libros, preparar actas, emitir certificados contables
              o responder requerimientos administrativos.
            </p>
          </article>

          <ServiceMenu items={tramitesMenu} />

          <article>
            <h2 id="igj" className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Trámites societarios en IGJ CABA
            </h2>
            <p className="opacity-70 text-base">
              La gestión societaria requiere cumplir con normas específicas y
              mantener actualizada la información formal de la sociedad. En
              CABA, muchos de estos trámites se realizan ante la Inspección
              General de Justicia, organismo encargado de la registración y
              fiscalización de sociedades comerciales, asociaciones civiles,
              fundaciones y otras entidades.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon ofrecemos asistencia en trámites
              societarios ante IGJ, incluyendo constitución de sociedades,
              modificaciones estatutarias, inscripción de autoridades,
              publicaciones legales, seguimiento de expedientes, contestación de
              vistas y mantenimiento de documentación societaria.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Nuestro servicio está orientado a emprendedores, socios,
              accionistas, empresas familiares, pymes, startups y compañías que
              necesitan una gestión societaria prolija y respaldada por
              profesionales.
            </p>
          </article>

          <article>
            <h2
              id="constitucion"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Constitución de sociedades comerciales
            </h2>
            <p className="opacity-70 text-base">
              La constitución de una sociedad es una decisión importante. No se
              trata solamente de elegir una forma jurídica y completar
              formularios. Es necesario analizar el tipo de actividad, la
              cantidad de socios, el capital inicial, la responsabilidad de cada
              integrante, la administración, la proyección del negocio y las
              obligaciones fiscales y societarias que surgirán después de la
              inscripción.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Asesoramos en la constitución de sociedades comerciales en IGJ
              CABA, incluyendo:
            </p>
            <ul className="list-disc ml-6 mt-3 opacity-70 text-base space-y-1">
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
            </ul>
            <p className="mt-4 opacity-70 text-base">
              Una sociedad bien constituida desde el inicio permite evitar
              problemas futuros entre socios, errores registrales, dificultades
              bancarias o inconvenientes frente a organismos fiscales.
            </p>
          </article>

          <article>
            <h2
              id="transformacion"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Transformación, modificación y disolución de sociedades
            </h2>
            <p className="opacity-70 text-base">
              Las sociedades pueden cambiar con el tiempo. Es común que se
              modifique la composición accionaria, se incorporen nuevos socios,
              cambien las autoridades, se reforme el estatuto, se altere el
              objeto social, se actualice el domicilio o se decida transformar o
              disolver la sociedad.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon acompañamos estos procesos mediante la
              preparación, revisión y gestión de la documentación necesaria.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Realizamos trámites vinculados con:
            </p>
            <ul className="list-disc ml-6 mt-3 opacity-70 text-base space-y-1">
              <li>Transformación de sociedades.</li>
              <li>Disolución de sociedades comerciales.</li>
              <li>Modificación de estatutos.</li>
              <li>Cambio de autoridades.</li>
              <li>Modificación de composición accionaria.</li>
              <li>Cambio de domicilio.</li>
              <li>Reforma de objeto social.</li>
              <li>Actualización de datos registrales.</li>
              <li>Inscripción de decisiones societarias ante IGJ.</li>
            </ul>
            <p className="mt-4 opacity-70 text-base">
              Estas gestiones requieren precisión, especialmente cuando
              involucran actas, publicaciones, instrumentos privados o públicos,
              certificaciones, dictámenes, formularios y seguimiento
              administrativo.
            </p>
          </article>

          <article>
            <h2
              id="modificacion"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Modificación de estatutos, autoridades y composición accionaria
            </h2>
            <p className="opacity-70 text-base">
              La actualización de estatutos, autoridades y composición
              accionaria es fundamental para que la sociedad mantenga su
              situación formal en orden.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Una sociedad que no actualiza sus autoridades, no inscribe cambios
              relevantes o no mantiene correctamente sus libros puede tener
              dificultades para operar, abrir cuentas bancarias, presentarse
              ante organismos, obtener financiamiento, firmar contratos o
              acreditar representación legal.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En nuestro estudio asistimos en la preparación de actas,
              documentación respaldatoria y presentaciones necesarias para
              registrar este tipo de modificaciones.
            </p>
            <p className="mt-4 opacity-70 text-base">
              El objetivo es que la información formal de la sociedad refleje
              correctamente su realidad actual.
            </p>
          </article>

          <article>
            <h2
              id="vistas"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Vistas y seguimiento de expedientes ante IGJ
            </h2>
            <p className="opacity-70 text-base">
              Muchas presentaciones ante IGJ pueden recibir observaciones o
              vistas. Esto no necesariamente implica un problema grave, pero sí
              requiere responder en tiempo y forma con documentación adecuada.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon realizamos el seguimiento de
              expedientes y asistimos en la contestación de vistas, revisando el
              motivo de la observación y preparando la respuesta
              correspondiente.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este servicio es clave para evitar demoras innecesarias y avanzar
              con la inscripción o aprobación del trámite.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Nos ocupamos de monitorear el estado de los expedientes, revisar
              requerimientos y orientar al cliente sobre los pasos necesarios
              para completar la gestión.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Publicaciones legales y Artículo 60
            </h2>
            <p className="opacity-70 text-base">
              Gestionamos publicaciones legales vinculadas con trámites
              societarios, incluyendo publicaciones del Artículo 60,
              especialmente en casos de designación de autoridades u otras
              modificaciones que deban ser informadas conforme a la normativa
              vigente.
            </p>
            <p className="mt-4 opacity-70 text-base">
              La publicación correcta de edictos y avisos legales es parte
              fundamental de muchos trámites societarios. Un error en el texto,
              en los datos de la sociedad o en los plazos puede generar
              observaciones o demoras.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Por eso, revisamos la información antes de avanzar y coordinamos
              la publicación según el trámite correspondiente.
            </p>
          </article>

          <article>
            <h2
              id="libros"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Libros societarios actualizados
            </h2>
            <p className="opacity-70 text-base">
              El mantenimiento de los libros societarios es una obligación
              importante para sociedades comerciales. Los libros permiten
              documentar decisiones, reuniones, composición societaria,
              movimientos de acciones o cuotas, autoridades y demás actos
              relevantes de la vida societaria.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon asistimos en el mantenimiento
              actualizado de libros societarios, incluyendo la preparación de
              actas y el ordenamiento de la documentación necesaria.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Entre los libros y registros que pueden requerir seguimiento se
              encuentran:
            </p>
            <ul className="list-disc ml-6 mt-3 opacity-70 text-base space-y-1">
              <li>Libro de actas.</li>
              <li>Libro de registro de accionistas o socios.</li>
              <li>Libro diario.</li>
              <li>Libro inventario y balances.</li>
              <li>Libros especiales según el tipo societario.</li>
              <li>Documentación respaldatoria de reuniones y decisiones.</li>
            </ul>
            <p className="mt-4 opacity-70 text-base">
              Mantener los libros en orden no es solo una formalidad. Es una
              medida preventiva que brinda respaldo frente a socios, organismos,
              bancos, terceros y eventuales conflictos.
            </p>
          </article>

          <article>
            <h2
              id="reuniones"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Preparación y conducción de reuniones societarias
            </h2>
            <p className="opacity-70 text-base">
              Las reuniones societarias deben prepararse correctamente para que
              sus decisiones tengan validez y puedan ser documentadas de manera
              adecuada.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Brindamos asistencia en la preparación y conducción de reuniones
              societarias, incluyendo:
            </p>
            <ul className="list-disc ml-6 mt-3 opacity-70 text-base space-y-1">
              <li>Fijación del orden del día.</li>
              <li>Preparación de convocatoria.</li>
              <li>Redacción de actas.</li>
              <li>Revisión de documentación respaldatoria.</li>
              <li>Registro de decisiones.</li>
              <li>Formalización de designación de autoridades.</li>
              <li>Aprobación de estados contables.</li>
              <li>Tratamiento de temas societarios relevantes.</li>
            </ul>
            <p className="mt-4 opacity-70 text-base">
              Este servicio es especialmente útil para sociedades que necesitan
              ordenar su funcionamiento interno o documentar decisiones
              importantes con respaldo formal.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Sociedades y sucursales del exterior
            </h2>
            <p className="opacity-70 text-base">
              También brindamos asistencia en trámites vinculados con sociedades
              y sucursales del exterior, incluyendo inscripción, actualización
              de información y servicios generales de bookkeeping.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Las sociedades extranjeras que operan o participan en estructuras
              locales pueden requerir documentación específica, inscripción
              registral, presentación de estados contables, designación de
              representantes o cumplimiento de obligaciones periódicas.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En estos casos, es fundamental contar con asesoramiento
              profesional para ordenar la documentación y cumplir con los
              requisitos aplicables.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Acuerdos societarios entre socios o accionistas
            </h2>
            <p className="opacity-70 text-base">
              Los acuerdos entre socios o accionistas son herramientas útiles
              para regular relaciones internas, definir reglas de
              funcionamiento, establecer derechos y obligaciones, prever
              mecanismos de salida, ordenar la toma de decisiones y reducir
              conflictos futuros.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon asistimos en la negociación, confección
              e implementación de acuerdos societarios, trabajando sobre la
              documentación necesaria y acompañando el proceso desde una mirada
              técnica y práctica.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Estos acuerdos pueden ser especialmente importantes en empresas
              familiares, startups, sociedades con nuevos inversores o proyectos
              donde existen varios socios con distintos roles.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Una estructura clara desde el inicio puede evitar discusiones
              costosas más adelante.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Confección de estatutos y reglamentos
            </h2>
            <p className="opacity-70 text-base">
              La confección de estatutos y reglamentos internos requiere
              precisión. Estos documentos definen aspectos centrales del
              funcionamiento de la sociedad o entidad: objeto, administración,
              representación, decisiones, mayorías, derechos de socios,
              obligaciones, fiscalización y mecanismos de funcionamiento.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Asesoramos en la redacción, revisión y adecuación de estatutos y
              reglamentos, buscando que el documento responda a la realidad del
              proyecto y no sea simplemente un modelo genérico.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Cada sociedad tiene necesidades distintas. Por eso, es importante
              que la documentación societaria acompañe la actividad real y la
              forma en que los socios esperan organizarse.
            </p>
          </article>

          <article>
            <h2
              id="certificados"
              className="mt-10 mb-3 text-lg font-semibold opacity-70"
            >
              Certificados Contables
            </h2>
            <p className="mt-2 text-lg font-medium opacity-80 mb-3">
              Emisión de certificados contables legalizados en CABA
            </p>
            <p className="opacity-70 text-base">
              En Estudio Contable Dillon emitimos distintos tipos de
              certificados contables a solicitud de particulares, profesionales,
              empresas o instituciones que necesitan acreditar una determinada
              situación económica, financiera, patrimonial, fiscal o
              previsional.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Los certificados contables pueden ser requeridos por bancos,
              organismos públicos, entidades privadas, escribanías,
              inmobiliarias, instituciones educativas, empresas, juzgados u
              otros terceros que necesitan constatar información respaldada por
              un profesional en Ciencias Económicas.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Nuestros certificados son confeccionados por profesional contable
              y, cuando corresponde, legalizados ante el Consejo Profesional de
              Ciencias Económicas de la Ciudad Autónoma de Buenos Aires.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este tipo de documentación requiere revisar antecedentes,
              comprobantes y respaldo suficiente. Por eso, antes de emitir un
              certificado, analizamos la información disponible y solicitamos la
              documentación necesaria para que el informe refleje correctamente
              la situación que se pretende acreditar.
            </p>
          </article>

          <article>
            <h2
              id="cert-ingresos"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Certificado de ingresos
            </h2>
            <p className="opacity-70 text-base">
              Uno de los certificados más solicitados es el certificado de
              ingresos. Puede ser requerido para alquilar una vivienda,
              solicitar un crédito, presentar documentación ante una entidad
              bancaria, justificar capacidad económica o acreditar ingresos ante
              terceros.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Emitimos certificados de ingresos provenientes de distintas
              fuentes, como:
            </p>
            <ul className="list-disc ml-6 mt-3 opacity-70 text-base space-y-1">
              <li>Sueldos percibidos.</li>
              <li>Ventas.</li>
              <li>Honorarios profesionales.</li>
              <li>Actividad comercial.</li>
              <li>Alquileres.</li>
              <li>Intereses.</li>
              <li>Dividendos.</li>
              <li>Otros ingresos personales o empresariales.</li>
            </ul>
            <p className="mt-4 opacity-70 text-base">
              Cada certificado se confecciona según la información respaldatoria
              disponible. No todos los casos son iguales: un empleado en
              relación de dependencia, un{" "}
              <Link
                href="/monotributo"
                className="text-blue-700 hover:underline"
              >
                monotributista
              </Link>
              , un responsable inscripto, un profesional independiente o una
              sociedad requieren análisis y documentación distinta.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Certificado de sueldos percibidos
            </h2>
            <p className="opacity-70 text-base">
              El certificado de{" "}
              <Link href="/sueldos" className="text-blue-700 hover:underline">
                sueldos percibidos
              </Link>{" "}
              permite acreditar ingresos laborales obtenidos durante un período
              determinado. Puede ser solicitado por bancos, inmobiliarias,
              organismos, instituciones educativas o terceros interesados.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Para su confección, se revisan recibos de sueldo, constancias
              laborales u otra documentación que permita respaldar los importes
              informados.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este certificado resulta útil cuando una persona necesita
              demostrar ingresos formales de manera clara y respaldada por
              profesional contable.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Certificado de ingresos por ventas
            </h2>
            <p className="opacity-70 text-base">
              El certificado de ingresos por ventas puede ser requerido por
              comerciantes, profesionales, monotributistas, responsables
              inscriptos, empresas o sociedades que necesitan acreditar el nivel
              de facturación o ingresos derivados de su actividad.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Para emitirlo, revisamos facturación, comprobantes emitidos,
              registros contables, declaraciones juradas y demás documentación
              respaldatoria.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este certificado puede ser necesario para operaciones bancarias,
              alquileres comerciales, licitaciones, análisis crediticios,
              trámites institucionales o presentaciones ante terceros.
            </p>
          </article>

          <article>
            <h2
              id="manif-bienes"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Manifestación de bienes
            </h2>
            <p className="opacity-70 text-base">
              La manifestación de bienes permite declarar y acreditar la
              composición patrimonial de una persona o empresa en un momento
              determinado. Puede incluir inmuebles, vehículos, cuentas
              bancarias, inversiones, participaciones societarias, bienes
              registrables y otros activos.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este tipo de certificado suele ser requerido en operaciones
              importantes, trámites bancarios, presentaciones patrimoniales,
              procesos administrativos o situaciones donde se necesita respaldar
              solvencia económica.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon confeccionamos manifestaciones de
              bienes revisando la documentación correspondiente y aplicando
              criterios profesionales para presentar la información de manera
              clara y ordenada.
            </p>
          </article>

          <article>
            <h2
              id="origen-fondos"
              className="mt-8 mb-3 text-lg font-semibold opacity-70"
            >
              Certificado de origen lícito de fondos
            </h2>
            <p className="opacity-70 text-base">
              El certificado de origen lícito de fondos es solicitado con
              frecuencia en operaciones inmobiliarias, bancarias, societarias,
              inversiones, transferencias patrimoniales u otras transacciones
              donde se requiere justificar la procedencia de los fondos
              utilizados.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este certificado exige especial cuidado. No se trata solamente de
              informar un monto, sino de revisar documentación que permita
              respaldar el origen declarado: ingresos, ventas, ahorros,
              préstamos, dividendos, indemnizaciones, operaciones patrimoniales
              u otras fuentes justificables.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon asistimos en la preparación de
              certificados de origen lícito de fondos, solicitando y revisando
              la documentación necesaria para confeccionar un informe adecuado
              al destino del trámite.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Informe sobre cumplimiento de obligaciones impositivas y
              previsionales
            </h2>
            <p className="opacity-70 text-base">
              También emitimos informes sobre cumplimiento de obligaciones{" "}
              <Link href="/impuestos" className="text-blue-700 hover:underline">
                impositivas
              </Link>{" "}
              y previsionales. Estos documentos pueden ser requeridos por
              empresas, organismos, entidades contratantes, licitaciones,
              procesos de auditoría o terceros que necesitan verificar la
              situación fiscal y previsional de una persona o sociedad.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Para su confección se revisa la situación del contribuyente,
              presentaciones efectuadas, pagos realizados, deuda existente,
              constancias fiscales y demás información relevante.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Este tipo de informe permite acreditar orden fiscal y previsional,
              algo especialmente importante para empresas que contratan con
              terceros, participan en procesos formales o necesitan demostrar
              cumplimiento.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Trámites contables con seguimiento profesional
            </h2>
            <p className="opacity-70 text-base">
              La gestión de trámites contables y societarios requiere algo más
              que presentar papeles. Requiere entender qué se pide, por qué se
              pide, qué documentación respalda la presentación y cuáles pueden
              ser las consecuencias de hacerlo mal.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon trabajamos con una metodología
              ordenada: analizamos el trámite, solicitamos la documentación
              necesaria, preparamos la presentación, realizamos el seguimiento y
              mantenemos informado al cliente durante el proceso.
            </p>
            <p className="mt-4 opacity-70 text-base">
              Nuestro objetivo es reducir tiempos, evitar errores y brindar un
              servicio claro para que cada cliente pueda resolver sus gestiones
              con respaldo profesional.
            </p>
          </article>

          <article>
            <h2 className="mt-8 mb-3 text-lg font-semibold opacity-70">
              Consultá por trámites societarios o certificados contables
            </h2>
            <p className="opacity-70 text-base">
              Si necesitás constituir una sociedad, modificar autoridades,
              actualizar libros societarios, responder una vista de IGJ,
              preparar actas, gestionar publicaciones legales o solicitar un
              certificado contable en CABA, podemos ayudarte.
            </p>
            <p className="mt-4 opacity-70 text-base">
              En Estudio Contable Dillon brindamos asesoramiento profesional
              para trámites contables y societarios en Capital Federal, con
              atención personalizada y seguimiento de cada gestión.
            </p>
            <p className="mt-4 opacity-70 text-base">
              <Link
                href="/contacto"
                className="text-blue-700 hover:underline font-medium"
              >
                Contactanos
              </Link>{" "}
              y contanos qué trámite necesitás realizar. Te vamos a indicar qué
              documentación hace falta, cuáles son los pasos a seguir y cómo
              podemos ayudarte a resolverlo de manera ordenada.
            </p>
          </article>

          <section className="mt-10">
            <h2 className="mb-4 text-lg font-semibold opacity-70">
              Preguntas frecuentes sobre trámites societarios y certificados
              contables
            </h2>
            <FAQAccordion faqs={tramitesFAQs} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Tramites;
