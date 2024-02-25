const Contact = () => {
  return (
    <main className="flex min-h-mainHeight justify-center font-jost">
      <form className="w-2/4  bg-white">
        <h1 className="font m-5 text-3xl">
          <span className="border-b-4 border-solid">Env</span>oyer une demande
        </h1>

        <label htmlFor="mail">Adresse e-mail</label>
        <input type="email" name="mail" />
        <input type="text" />
        <input type="text" />
        <input type="textarea" />
        <input type="tel" />
        <input type="text" />
      </form>
    </main>
  );
};

export default Contact;
