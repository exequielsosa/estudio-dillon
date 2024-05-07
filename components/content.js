import Link from "next/link";

const arrayContent = [
  {
    name: "Impuesto al Valor Agregado (IVA)",
    link: "#iva",
  },
  {
    name: "Bienes Personales",
    link: "#bp",
  },
  {
    name: "Impuesto a las Ganancias",
    link: "#ig",
  },
  {
    name: "Percepciones de impuesto a las ganancias y bienes personales",
    link: "#pip",
  },
  {
    name: "Cuarta Categoría",
    link: "#cc",
  },
  {
    name: "Cargas sociales y aportes jubilatorios",
    link: "#cas",
  },
  {
    name: "Participaciones societarias, autoridades y apoderados",
    link: "#ps",
  },
  {
    name: "Retenciones y percepciones (SICORE)",
    link: "#sicore",
  },
  {
    name: "Régimen Simplificado (Monotributo)",
    link: "#mono",
  },
  {
    name: "Impuestos internos",
    link: "#ii",
  },
  {
    name: "Convenio Multilateral",
    link: "#cm",
  },
  {
    name: "Fondo Cooperativo",
    link: "#fc",
  },
  {
    name: "Vencimientos del Alivio Fiscal",
    link: "#vaf",
  },
];

const Content = () => {
  return (
    <div className="p-4 bg-white rounded-2xl border border-gray-200 w-fit">
      <h2 className="text-sm font-semibold opacity-80 mb-1">Contenidos</h2>
      <ul className="list-decimal text-xs ml-6 opacity-90">
        {arrayContent.map((item, i) => (
          <li className="hover:underline decoration-gray-500 mb-1" key={i}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
