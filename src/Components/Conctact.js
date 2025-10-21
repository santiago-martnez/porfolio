import React from "react";
import './Contact.css';

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

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
      {/* FORMULARIO INVISIBLE PARA NETLIFY */}
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        netlify-honeypot="bot-field" 
        hidden
      >
        <input type="hidden" name="form-name" value="contact" />
        <input name="name" />
        <input name="email" />
        <textarea name="message"></textarea>
      </form>

      {/* FORMULARIO VISIBLE PARA EL USUARIO */}
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
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <button type="submit">Enviar</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
