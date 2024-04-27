import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { useState } from "react";
import ThanksMail from "../components/thanks";
import { useRouter } from "next/router";
import { sendContactForm } from "../lib/api";

const initValues = {
  name: "",
  email: "",
  subject: "Mensaje de estudio-dillon.com ",
  message: "",
};

const initState = { isLoading: false, error: "", values: initValues };

const FormContact = () => {
  const [state, setState] = useState(initState);
  const [success, setSuccess] = useState(false);

  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault(); // Esto evita la recarga de la página
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      console.log("pasa");
      await sendContactForm(values);
      setState(initState);
      setSuccess(true);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  const router = useRouter();
  const route = router.asPath;

  const disabled =
    state.values.name.length > 1 &&
    state.values.email.length > 1 &&
    state.values.message.length > 1;

  const handleClose = () => {
    setState(initState);
    setSuccess(false);
  };

  return (
    <div className="mb-5 mt-10 w-full flex items-center justify-center">
      <div className="w-full md:w-[600px] border-[1px] border-[#3f83f8] rounded-lg bg-white pb-3 px-8 h-[500px] flex items-center flex-col justify-center shadow-md">
        {isLoading ? (
          <>
            <div className="w-full justify-center items-center h-[500px] flex">
              <div className="loader"></div>
            </div>
          </>
        ) : success ? (
          <ThanksMail handleClick={handleClose} />
        ) : (
          <>
            {route !== "/contacto" && (
              <h2 className="mt-6 font-semibold opacity-80 text-lg">
                Comunicate con nosotros
              </h2>
            )}
            <form
              id="contact-form"
              onSubmit={(e) => onSubmit(e)}
              className="flex flex-col w-full max-w-[600px] mt-5"
            >
              <div className="mb-2 block">
                <Label htmlFor="name" value="Nombre y Apellido" />
              </div>
              <TextInput
                type="text"
                id="name"
                name="name"
                value={values.name}
                sizing="md"
                onChange={handleChange}
                placeholder="ingresa tu nombre"
              />
              <div className="mb-2 mt-4 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                type="email"
                id="email"
                name="email"
                value={values.email}
                placeholder="ingresa tu email"
                required={true}
                onChange={handleChange}
              />
              <div className="mb-2 block mt-3">
                <Label htmlFor="comment" value="Detalle" />
              </div>
              <Textarea
                id="message"
                name="message"
                value={values.message}
                placeholder="Dejanos el motivo de tu consulta..."
                required={true}
                rows={4}
                onChange={handleChange}
              />
              <div className="mb-4 mt-4 w-full flex items-end justify-center">
                <Button color="light" type="submit" disabled={!disabled}>
                  Enviar
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default FormContact;
