import Image from "next/image";

function Start() {
  return (
    <section className="inner-width lg:mt-[-5rem] md:mt-[1rem]  vertical-padding text-center lg:text-left grid lg:grid-cols-2 lg:gap-x-6 items-center">
      <div className="grid gap-4 lg:gap-6 lg:place-items-start">
        <h1 className="text-3xl lg:text-6xl leading-tight font-medium">
          Descubre recetas saludables y económicas💣
        </h1>
        <p className="lg:text-lg">
          Encuentra con
          <strong className="text-brand"> Fuddy </strong>
          la comida perfecta para tu estilo de vida. Nuestra plataforma
          totalmente gratuita genera recetas con lo que tienes en tu heladera.
          🥗
        </p>
        <a className={`btn `} href="/#por-qué-fuddy">
          Sobre Fuddy
        </a>
      </div>
      <Image
        className="w-full h-auto"
        src="https://res.cloudinary.com/fuddy/image/upload/v1703176107/landing%20page/plato_1_tyu52c.png"
        width={483}
        height={512}
        alt=""
      />
    </section>
  );
}

export default Start;
