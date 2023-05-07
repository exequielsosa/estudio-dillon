import Image from "next/image";

const HeaderImage = ({image}) => {
  return (
    <>
    <div className="flex w-full justify-center flex-col items-center mt-6">
      <Image
        src={image}
        width="600"
        height="400"
        alt="contacto"
        style={{ objectFit: "cover", borderRadius: 16 }}
      />
      </div>
    </>
  );
};

export default HeaderImage;
