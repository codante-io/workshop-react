import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(`${name}, ${email}, ${message}`);
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Entre em contato
        </h2>

        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-violet-400">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome
              </label>
              <input
                id="nome"
                type="text"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                placeholder="Seu nome"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                placeholder="Seu email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
              />
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
                placeholder="Sua mensagem"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
              />

              <button
                type="submit"
                className="mt-4 w-full bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-600"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
