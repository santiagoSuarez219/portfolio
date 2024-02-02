const ContactMe = () => {
  return (
    <section className="mt-8 flex flex-col items-center">
      <h2 className="text-3xl text-center md:text-5xl">Contact Me</h2>
      <form className="mt-4 flex flex-wrap justify-between gap-4 w-full md:w-[70%] max-auto">
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
          className="border rounded-lg px-4 py-6 min-w-full max-w-full w-full min-h-[100px] max-h-60 focus-input"
        ></textarea>
        <input
          type="submit"
          value="Contactame"
          className="bg-green-color w-full py-4 px-14 mx-auto cursor-pointer rounded-lg"
        />
      </form>
    </section>
  );
};
export default ContactMe;
