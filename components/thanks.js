import { Label, TextInput, Textarea, Button } from "flowbite-react";

export const ThanksMail = ({ handleClick }) => {
  return (
    <div className="flex w-full flex-col items-center py-10" data-aos="zoom-in">
      <img src="/mail-sent.svg" alt="mail" className="w-[120px]" />
      <h1 className="text-black mt-5 text-2xl text-center">
        Gracias por tu mensaje
      </h1>
      <p className="text-black mt-4 text-lg text-center">
        Tu mensaje ha sido recibido y te responderemos a la mayor brevedad
        posible.
      </p>
      <div className="flex w-full justify-center mt-8">
        <Button color="light" type="submit" onClick={handleClick}>
          Enviar otro mensaje
        </Button>
      </div>
    </div>
  );
};

export default ThanksMail;
