import Image from "next/image";

const HeaderImage = ({ image, alt = "Estudio Contable Dillon" }) => {
  return (
    <div className="flex w-full justify-center flex-col items-center mt-6">
      <Image
        src={image}
        width={1280}
        height={400}
        alt={alt}
        priority
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="rounded-2xl object-cover max-h-[400px] w-full"
      />
    </div>
  );
};

export default HeaderImage;
