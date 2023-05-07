import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { useState } from "react";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  });

  const { name, email, phone, comment, subject } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const disabled =
    name.length > 0 &&
    email.length > 0 &&
    phone.length > 0 &&
    comment.length > 0 &&
    subject.length > 0;

  

  return (
    <div className="mb-16 mt-4 w-full flex items-center justify-center">
      <div className="w-full md:w-96 lg:w-1/2 xl:w-1/3">
        <div className="mb-2 block">
          <Label htmlFor="name" value="Nombre y Apellido" />
        </div>
        <TextInput
          id="name"
          type="text"
          sizing="md"
          onChange={handleChange}
          placeholder="ingresa tu nombre"
        />
        <div className="mb-2 mt-4 block">
          <Label htmlFor="email" value="Tu email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="ingresa tu email"
          required={true}
          onChange={handleChange}
        />
        <div className="mb-2 mt-4 block">
          <Label htmlFor="phone" value="Tu teléfono" />
        </div>
        <TextInput
          id="phone"
          type="number"
          placeholder="ingresa tu teléfono"
          required={true}
          onChange={handleChange}
        />
        <div className="mb-2 mt-4 block">
          <Label htmlFor="subject" value="Asunto" />
        </div>
        <TextInput
          id="subject"
          type="text"
          placeholder="Asunto"
          required={true}
          onChange={handleChange}
        />
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Detalle" />
        </div>
        <Textarea
          id="comment"
          placeholder="Dejanos el motivo de tu consulta..."
          required={true}
          rows={4}
          onChange={handleChange}
        />
        <div className="mb-4 mt-4 w-full flex items-end justify-end">
          <Button
            color="light"
            onClick={() => console.log("hola")}
            disabled={!disabled}
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
