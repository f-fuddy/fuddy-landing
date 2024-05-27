function Newsletter() {
  return (
    <section
      id="newsletter"
      className="vertical-padding bg-neutral-100 bg-[url('/newsletter-bg.png')] bg-cover bg-center"
    >
      <div className="inner-width mt-10">
        <div className="mx-auto max-w-sm space-y-4 lg:space-y-6 text-center">
          <h2 className="text-brand lg:text-lg">Newsletter</h2>
          <p className="text-brand text-3xl lg:text-5xl leading-tight font-medium">
            ¿Quieres recibir más noticias?
          </p>

          <form
            className="flex"
            method="post"
            action="https://gmail.us21.list-manage.com/subscribe/post?u=3835aa72f51fbce79e1da4c2d&amp;id=434775c728&amp;f_id=00075de1f0"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_self"
          >
            <label className="sr-only" htmlFor="mce-EMAIL">
              Ingresa tu email
            </label>
            <input
              className="w-full px-6 h-12 rounded-l-full border border-brand"
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              required
              id="mce-EMAIL"
            />
            <button
              className="px-6 h-12 rounded-r-full border border-brand bg-brand text-white"
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              value="Subscribe"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
