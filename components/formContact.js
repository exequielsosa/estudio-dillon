import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";
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
      values: { ...prev.values, [target.name]: target.value },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
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
    <div className="mb-5 mt-10 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
        {/* Columna izquierda: texto SEO */}
        <section
          aria-label="Servicios contables - Estudio Dillon"
          className="flex flex-col justify-start px-2"
        >
          <h2 className="text-lg font-semibold opacity-80 mb-3">
            Consultá por nuestros servicios contables
          </h2>
          <p className="opacity-70 text-base">
            Si estás buscando un contador en Capital Federal, necesitás ordenar
            tu situación fiscal, inscribirte en el{" "}
            <Link href="/monotributo" className="text-blue-700 hover:underline">
              monotributo
            </Link>
            ,{" "}
            <Link href="/impuestos" className="text-blue-700 hover:underline">
              liquidar impuestos
            </Link>
            , gestionar una empresa o recibir asesoramiento contable para tu
            negocio, podemos ayudarte.
          </p>
          <p className="opacity-70 text-base mt-3">
            En Estudio Contable Dillon trabajamos para que tus impuestos estén
            en orden, tus{" "}
            <Link
              href="/vencimientos"
              className="text-blue-700 hover:underline"
            >
              vencimientos
            </Link>{" "}
            bajo control y tus decisiones cuenten con respaldo profesional.
          </p>
          <p className="opacity-70 text-base mt-3">
            Contactanos y contanos tu situación. Te ayudamos a encontrar la
            mejor forma de organizar tu contabilidad, cumplir con tus
            obligaciones y ganar tranquilidad para enfocarte en lo más
            importante: hacer crecer tu actividad.
          </p>
        </section>

        {/* Columna derecha: formulario */}
        <div className="border border-[#10207A] rounded-lg bg-white px-8 py-6 flex flex-col justify-center shadow-md">
          {isLoading ? (
            <div className="w-full flex justify-center items-center min-h-[300px]">
              <div className="loader" />
            </div>
          ) : success ? (
            <ThanksMail handleClick={handleClose} />
          ) : (
            <>
              {route !== "/contacto" && (
                <h2 className="font-semibold opacity-80 text-lg mb-2">
                  Comunicate con nosotros
                </h2>
              )}
              <form
                id="contact-form"
                onSubmit={(e) => onSubmit(e)}
                className="flex flex-col w-full mt-3"
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
                <div className="mb-2 mt-4 w-full flex items-end justify-center">
                  <Button color="light" type="submit" disabled={!disabled}>
                    Enviar
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormContact;
