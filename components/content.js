const arrayContent = [
  { name: "Impuesto al Valor Agregado (IVA)", link: "#iva" },
  { name: "Bienes Personales", link: "#bp" },
  { name: "Impuesto a las Ganancias", link: "#ig" },
  {
    name: "Percepciones de impuesto a las ganancias y bienes personales",
    link: "#pip",
  },
  { name: "Cuarta Categoría", link: "#cc" },
  { name: "Cargas sociales y aportes jubilatorios", link: "#cas" },
  {
    name: "Participaciones societarias, autoridades y apoderados",
    link: "#ps",
  },
  { name: "Retenciones y percepciones (SICORE / SIRE)", link: "#sicore" },
  { name: "Régimen Simplificado (Monotributo)", link: "#mono" },
  { name: "Impuestos internos", link: "#ii" },
  { name: "Convenio Multilateral", link: "#cm" },
  { name: "Fondo Cooperativo", link: "#fc" },
  { name: "Vencimientos del Alivio Fiscal", link: "#vaf" },
];

const Content = () => {
  const handleClick = (e, link) => {
    e.preventDefault();
    const id = link.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="p-4 bg-white rounded-2xl border border-gray-200 w-fit">
      <h2 className="text-sm font-semibold opacity-80 mb-1">Contenidos</h2>
      <ul className="list-decimal text-xs ml-6 opacity-90">
        {arrayContent.map((item, i) => (
          <li className="hover:underline decoration-gray-500 mb-1" key={i}>
            <a href={item.link} onClick={(e) => handleClick(e, item.link)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
