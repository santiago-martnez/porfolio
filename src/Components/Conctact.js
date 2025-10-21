import React from "react";
import './Contact.css';

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  // Función para codificar los datos del formulario
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  // Maneja el envío del formulario
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        name,
        email,
        message
      }),
    })
      .then(() => {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="formu">
        {submitted ? (
          <div className="thank-you">
            <h2>¡Gracias!</h2>
            <p>Tu mensaje fue enviado correctamente. Te responderé pronto.</p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />

            <h2>Contacto</h2>
            <p className="leading-relaxed">
              En caso de querer contactarse...📲
            </p>

            <div className="columna">
              <div className="datos">
                <hr className="hr" />
                <h1>📍Ubicacion</h1>
                <p>CABA - Argentina</p>
                <h1>💻Github</h1>
                <p>https://github.com/santiago-martnez</p>
                <h1>🔍Linkedin</h1>
                <p>https://www.linkedin.com/in/santiago-martinez-5b869620a/</p>
                <h1>📱Whatsapp</h1>
                <p>1130743164</p>
                <h1>📧Email</h1>
                <p>zantumartinez@gmail.com</p>
                <hr className="hr" />
              </div>

              <div className="casilla">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
