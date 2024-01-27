const ContactMe = () => {
  return (
    <section className="py-16 flex flex-col items-center">
      <h2 className="text-4xl mb-16 text-center md:text-5xl">
        Sigamos en contacto
      </h2>
      <form className="flex flex-wrap justify-between gap-8 px-1 max-w-screen-lg max-auto">
        <input
          type="text"
          placeholder="Nombre"
          className="border-b px-2 py-4 flex-grow flex-basis-60 focus-input"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-b px-2 py-4 flex-grow flex-basis-60 focus-input"
        />
        <textarea
          placeholder="Mensaje"
          className="border px-4 py-6 min-w-full max-w-full w-full min-h-[100px] max-h-60 focus-input"
        ></textarea>
        <input
          type="submit"
          value="Contactame"
          className="bg-green-color py-4 px-14 mx-auto cursor-pointer"
        />
      </form>
    </section>
  );
};
export default ContactMe;
