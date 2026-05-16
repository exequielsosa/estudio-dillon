const ServiceMenu = ({ items }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100; // altura del navbar fijo
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="p-4 bg-white rounded-2xl border border-gray-200 w-full md:w-fit mt-6 mb-2">
      <p className="text-sm font-semibold opacity-80 mb-1">Contenidos</p>
      <ul className="list-decimal text-xs ml-6 opacity-90">
        {items.map(({ name, id }, i) => (
          <li className="hover:underline decoration-gray-500 mb-1" key={i}>
            <a href={`#${id}`} onClick={(e) => handleClick(e, id)}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceMenu;
