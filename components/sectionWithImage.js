import Image from "next/image";

const SectionWithImage = ({ image, alt, imageRight = true, children }) => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 my-6">
      <div
        className={`lg:col-span-2 ${imageRight ? "" : "lg:order-2"}`}
      >
        {children}
      </div>
      <div
        className={`relative w-full aspect-[4/3] lg:aspect-auto lg:h-[80%] lg:self-end rounded-xl overflow-hidden shadow-sm ${
          imageRight ? "" : "lg:order-1"
        }`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </article>
  );
};

export default SectionWithImage;
