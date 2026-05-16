import { Accordion } from "flowbite-react";

const rootTheme = {
  base: "divide-y divide-[#10207A] border border-[#10207A] rounded-lg bg-white overflow-hidden",
  flush: {
    off: "",
    on: "border-b border-[#10207A]",
  },
};

const titleTheme = {
  base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-700 bg-white",
  flush: {
    off: "hover:bg-[#10207A]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10207A]/30",
    on: "!bg-transparent",
  },
  heading: "",
  open: {
    off: "",
    on: "text-[#10207A] bg-white",
  },
  arrow: {
    base: "h-6 w-6 shrink-0 text-[#10207A]",
    open: {
      off: "",
      on: "rotate-180",
    },
  },
};

const contentTheme = {
  base: "py-5 px-5 last:rounded-b-lg first:rounded-t-lg bg-white",
};

const FAQAccordion = ({ faqs }) => {
  return (
    <Accordion collapseAll theme={rootTheme}>
      {faqs.map(({ q, a }, i) => (
        <Accordion.Panel key={i}>
          <Accordion.Title theme={titleTheme}>{q}</Accordion.Title>
          <Accordion.Content theme={contentTheme}>
            <p className="opacity-70 text-sm">{a}</p>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
