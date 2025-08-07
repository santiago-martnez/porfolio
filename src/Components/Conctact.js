import React from "react";
import './Contact.css'


export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="formu">
        <form
          data-netlify="true"
          name="contact"
          onSubmit={handleSubmit}
        >
        <h2>
            Contacto
        </h2>
        <p className="leading-relaxed">
            En caso de querer contactactarse...📲
        </p>
        <div className="columna">
        <div className="datos">
          <hr className="hr"></hr>
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
          <hr className="hr"></hr>
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
              onChange={(e) => setName(e.target.value)}
            />
                   <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
             <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
             <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Enviar
          </button>
          </div>
        </div>
         
        </form>
      </div>
    </section>
  );
}