// Texto completo del calendario 2026 (mismo contenido que antes, nuevo formato).
// Cada sección conserva su ancla (#iva, #bp, ...) para no romper links ni sitelinks.

const Seccion = ({ id, titulo, destacado, children }) => (
  <article id={id} className="scroll-mt-24 border border-tinta-100 rounded-2xl p-5 md:p-8">
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
      <h2 className="text-[21px] md:text-[26px] font-bold tracking-tight leading-tight text-tinta-900">{titulo}</h2>
      {destacado && (
        <span className="self-start md:self-auto shrink-0 text-[13px] md:text-sm font-bold text-ambar-800 bg-ambar-50 border border-[#F6E2BF] px-3 py-1.5 rounded-full">
          {destacado}
        </span>
      )}
    </div>
    <div className="mt-4 flex flex-col gap-3 text-base md:text-[17px] leading-[1.7] text-[#2B344A] [&_b]:text-tinta-900 [&_b]:font-bold">
      {children}
    </div>
  </article>
);

const Taxes = () => {
  return (
    <div className="flex flex-col gap-5">
    <Seccion id="iva" titulo="Impuesto al Valor Agregado (IVA)" destacado="Del 18 al 22 de cada mes">
      <p>
            Los vencimientos para las presentaciones y los pagos irán, en
            términos generales, <b>del 18 al 22 de cada mes</b>, con los
            corrimientos correspondientes cuando esas fechas coincidan con días
            feriados o inhábiles. Por ejemplo, para los contribuyentes que no
            tienen el beneficio de pago diferido, los vencimientos de enero de
            2026, correspondientes a la declaración jurada de diciembre de 2025,
            irán <b>desde el 19 al 23 de enero</b>, dependiendo de la
            finalización del número de CUIT y comenzando con las terminaciones 0
            y 1.
      </p>
      <p>
            En este impuesto continúa siendo relevante verificar si el
            contribuyente cuenta con beneficios vigentes, como el{" "}
            <b>pago diferido</b>, en los casos en que resulte aplicable para
            Micro y Pequeñas empresas que mantengan actualizado el certificado
            MiPyME y la opción correspondiente.
      </p>
    </Seccion>
    <Seccion id="bp" titulo="Bienes Personales">
      <p>
            La <b>declaración jurada</b> de Bienes Personales correspondiente al
            período fiscal 2025 tuvo prórroga: el <b>pago</b> del saldo venció el{" "}
            <b>27 de julio de 2026</b> y la <b>presentación</b> se extendió hasta
            el <b>30 de octubre de 2026</b>, para todas las terminaciones de CUIT.
      </p>
      <p>
            Los vencimientos de{" "}
            <b>Bienes Personales de participaciones societarias</b>, que presentan
            y pagan las sociedades por sus integrantes, no se modificaron: la
            presentación fue del <b>11 al 16 de junio de 2026</b> y el pago del{" "}
            <b>12 al 17 de junio de 2026</b>, según la terminación de CUIT.
      </p>
      <p>
            Para los empleados en <b>relación de dependencia y jubilados</b> que
            deban presentar declaraciones juradas informativas, el vencimiento
            general será el <b>30 de junio de 2026</b>, salvo que existan
            modificaciones normativas posteriores.
      </p>
      <p>
            Los <b>anticipos de Ganancias y Bienes Personales</b> de personas
            humanas tendrán vencimientos durante febrero, abril, agosto, octubre
            y diciembre de 2026, agrupados según la terminación de CUIT y
            considerando siempre los corrimientos por días inhábiles.
      </p>
    </Seccion>
    <Seccion id="ig" titulo="Impuesto a las Ganancias">
      <p>
            Las <b>declaraciones juradas anuales</b> de Ganancias de personas
            humanas correspondientes al período fiscal 2025 vencen junto con las de
            Bienes Personales: el pago del saldo resultante venció el{" "}
            <b>27 de julio de 2026</b> y la presentación se prorrogó hasta el{" "}
            <b>30 de octubre de 2026</b>.
      </p>
      <p>
            Los sujetos que únicamente deban presentar el{" "}
            <b>impuesto cedular</b> también quedaron alcanzados por la prórroga, con
            vencimiento el <b>27 de julio de 2026</b>.
      </p>
      <p>
            Las declaraciones juradas anuales de las sociedades vencen en el{" "}
            <b>quinto mes posterior al cierre de ejercicio</b>. Para los cierres
            de diciembre de 2025, los vencimientos se ubican entre los días{" "}
            <b>13 y 15 de mayo de 2026</b>, según la terminación del CUIT. Los
            anticipos de sociedades vencerán a partir del sexto mes posterior al
            mes de cierre del ejercicio, siempre considerando los días hábiles;
            de no ser así, los vencimientos se corren al día hábil siguiente.
      </p>
      <p>
            Los <b>anticipos de personas humanas</b> continuarán distribuidos
            durante el año, con vencimientos en febrero, abril, agosto, octubre
            y diciembre de 2026, agrupados por terminación de CUIT. Para los
            empleados que deban presentar la declaración informativa
            simplificada de Ganancias, el vencimiento general será el{" "}
            <b>30 de junio de 2026</b>.
      </p>
    </Seccion>
    <Seccion id="pip" titulo="Percepciones de impuesto a las ganancias y bienes personales">
      <p>
            El importe abonado en concepto de percepciones por operaciones
            alcanzadas, como compra de moneda extranjera o consumos con tarjeta
            en el exterior, cuando correspondan, podrá consultarse desde el
            servicio <b>“Mis Retenciones”</b>.
      </p>
      <p>
            Luego, esas percepciones podrán computarse como <b>
              pago a cuenta
            </b>{" "}
            hasta la concurrencia del impuesto determinado en Ganancias y Bienes
            Personales. Aquellos contribuyentes que no tributen esos impuestos
            deberán tramitar la devolución ante <b>ARCA</b>, siguiendo el
            procedimiento habilitado para cada caso.
      </p>
      <p>
            Los empleados en relación de dependencia podrán informar estos
            importes a través del sistema <b>SIRADIG – Trabajador</b>, para que
            el empleador los considere en la liquidación anual del impuesto,
            hasta el límite del impuesto retenido durante el año. El saldo que
            eventualmente no pueda recuperarse por esa vía deberá solicitarse
            mediante el procedimiento correspondiente.
      </p>
    </Seccion>
    <Seccion id="cc" titulo="Cuarta Categoría" destacado="SIRADIG: hasta el 31 de marzo">
      <p>
            Los empleados en relación de dependencia tendrán que informar las
            percepciones, deducciones y demás datos correspondientes al período
            fiscal 2025 en el sistema{" "}
            <b>“SIRADIG – Trabajador”, hasta el 31 de marzo de 2026</b>.
      </p>
      <p>
            Allí podrán cargar, entre otros conceptos, percepciones sufridas, el
            porcentaje computable del impuesto sobre los débitos y créditos
            bancarios, gastos médicos, deducciones generales y vínculos
            familiares. Las empresas tendrán tiempo de confeccionar la{" "}
            <b>liquidación anual hasta el 30 de abril de 2026</b>, debiendo
            retener o devolver la diferencia del impuesto en la liquidación de
            sueldos correspondiente.
      </p>
    </Seccion>
    <Seccion id="cas" titulo="Cargas sociales y aportes jubilatorios" destacado="Del 9 al 13 de cada mes">
      <p>
            Los vencimientos de las <b>cargas sociales</b> de empleadores irán,
            en términos generales, del <b>9 al 13 de cada mes</b> posterior al
            período devengado, dependiendo de la terminación del CUIT y de los
            corrimientos por días inhábiles.
      </p>
      <p>
            Los aportes obligatorios del personal de casas particulares
            vencerán, en general, el día 10 de cada mes o el día hábil
            siguiente. Los aportes voluntarios tendrán vencimiento general el
            día 15 de cada mes, también con los corrimientos correspondientes.
      </p>
      <p>
            Las cuotas de <b>autónomos</b> vencerán entre los días 5 y 9 de cada
            mes, según la terminación de CUIT y considerando siempre los días
            hábiles.
      </p>
    </Seccion>
    <Seccion id="ps" titulo="Participaciones societarias, autoridades y apoderados">
      <p>
            El <b>Régimen de información anual</b> que deben presentar las
            sociedades, correspondiente al período fiscal 2025, vencerá durante
            julio de 2026. Los vencimientos se producirán los días{" "}
            <b>28, 29 y 30 de julio</b>, agrupados según la terminación del
            CUIT.
      </p>
      <p>
            La información deberá presentarse a través del servicio
            correspondiente habilitado por <b>ARCA</b>. En los casos en que se
            modifiquen los integrantes de las sociedades, autoridades o
            apoderados, la información deberá presentarse dentro del plazo
            previsto por la normativa vigente, contado desde que se produjo la
            modificación.
      </p>
    </Seccion>
    <Seccion id="sicore" titulo="Retenciones y percepciones (SICORE / SIRE)" destacado="DDJJ: del 9 al 13 · 1ª quincena: del 21 al 23">
      <p>
            El pago a cuenta correspondiente a la{" "}
            <b>primera quincena de cada mes</b> vencerá, en términos generales,
            entre los días <b>21 y 23</b>, según la terminación del CUIT y los
            corrimientos por días inhábiles.
      </p>
      <p>
            En cuanto a las <b>declaraciones juradas mensuales</b> y el ingreso
            del saldo correspondiente, los vencimientos se ubicarán entre los
            días <b>9 y 13 de cada mes</b>, agrupados según la finalización del
            número de CUIT.
      </p>
    </Seccion>
    <Seccion id="mono" titulo="Régimen Simplificado (Monotributo)" destacado="Día 20 de cada mes">
      <p>
            El pago mensual del Monotributo{" "}
            <b>vencerá todos los días 20 de cada mes</b> o el primer día hábil
            siguiente, en caso de coincidir con feriados o días inhábiles.
      </p>
      <p>
            Las <b>recategorizaciones</b> semestrales vencen el{" "}
            <b>5 de febrero</b> (por el segundo semestre de 2025) y el{" "}
            <b>5 de agosto de 2026</b> (por el primer semestre de 2026),
            utilizando las tablas vigentes para cada período. Sólo deberán realizar el trámite aquellos pequeños
            contribuyentes que hayan tenido modificaciones en sus parámetros de
            facturación, alquileres devengados, superficie afectada o consumo de
            energía, según corresponda.
      </p>
      <p>
            Luego de cada recategorización, las nuevas cuotas deberán abonarse a
            partir de los meses de febrero y agosto, respectivamente. Quienes no
            hayan tenido cambios en su encuadre no deberán realizar el trámite,
            aunque deberán abonar el importe actualizado que corresponda a su
            categoría.
      </p>
    </Seccion>
    <Seccion id="ii" titulo="Impuestos internos" destacado="Del 18 al 20 de cada mes">
      <p>
            Las <b>declaraciones juradas mensuales</b> de impuestos internos,
            excepto cigarrillos, vencerán entre los días{" "}
            <b>18 y 20 de cada mes</b>, considerando los días hábiles y la
            agrupación por terminación de CUIT.
      </p>
      <p>
            Cuando alguna de esas fechas coincida con un día inhábil, el
            vencimiento se trasladará al día hábil inmediato siguiente.
      </p>
    </Seccion>
    <Seccion id="cm" titulo="Convenio Multilateral" destacado="Del 15 al 18 de cada mes">
      <p>
            El vencimiento de las <b>declaraciones juradas mensuales</b> de
            Convenio Multilateral irá, en términos generales,{" "}
            <b>del 15 al 18 de cada mes</b>, en días hábiles y agrupado por los
            números finales de inscripción.
      </p>
      <p>
            La <b>declaración jurada anual CM05</b> correspondiente al período
            fiscal 2025 vencerá el <b>30 de junio de 2026</b>. Para su
            presentación deberá aplicarse el coeficiente unificado que
            corresponda, de acuerdo con la normativa vigente.
      </p>
    </Seccion>
    <Seccion id="fc" titulo="Fondo Cooperativo" destacado="Del 11 al 13">
      <p>
            Los vencimientos correspondientes al <b>Fondo Cooperativo</b> para
            el año 2026 se producirán, en términos generales, entre los días{" "}
            <b>11 y 13</b>, dependiendo de la terminación del CUIT del
            contribuyente.
      </p>
      <p>
            La <b>declaración jurada anual</b> tendrá vencimiento de acuerdo con
            el cronograma aplicable para este tributo, considerando los días
            hábiles y los corrimientos que correspondan.
      </p>
    </Seccion>
    <Seccion id="vaf" titulo="Vencimientos del Alivio Fiscal">
      <p>
            En la información del calendario 2026 no surge un bloque específico
            de vencimientos del Alivio Fiscal como sí aparecía en el texto
            anterior. En caso de mantenerse beneficios, prórrogas o regímenes
            especiales aplicables a determinados contribuyentes, corresponderá
            verificar cada situación particular con la <b>normativa vigente</b>{" "}
            y con el calendario actualizado de <b>ARCA</b> antes de comunicarlo
            públicamente. El portal oficial de ARCA mantiene la información de
            vencimientos y trámites tributarios actualizada.
      </p>
    </Seccion>
    </div>
  );
};

export default Taxes;
