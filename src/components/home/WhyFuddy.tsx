import {
  ComunidadConsciente,
  EducacionNutricional,
  SolucionPractica,
} from "@/icons";

const items = [
  {
    Icon: SolucionPractica,
    title: "Una solución práctica",
    text: "Brindamos una solución en la que comer bien, rico y sano no sea un imposible. Y lo hacemos con lo que tengas en tu heladera.",
  },
  {
    Icon: EducacionNutricional,
    title: "Educación nutricional",
    text: "En cada una de nuestras recetas brindamos información nutricional para que estés al tanto de lo que consumís.",
  },
  {
    Icon: ComunidadConsciente,
    title: "Comunidad consciente",
    text: "Únete a nuestra comunidad para recibir información, noticias y conectarte con personas que se interesan por lo mismo que vos.",
  },
];

function WhyFuddy() {
  return (
    <section
      className="inner-width vertical-padding space-y-4 lg:space-y-10"
      id="por-qué-fuddy"
    >
      <div className="space-y-4 mt-6 lg:space-y-6 text-center max-w-prose mx-auto [text-wrap:balance]">
        <h2 className="text-3xl lg:text-5xl leading-tight font-medium">
          ¿Por qué Fuddy?
        </h2>
        <p className="lg:text-lg">
          Creemos en una buena alimentación, para generar un impacto positivo en
          nosotros y en el medio ambiente.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {items.map((item) => (
          <div
            className="space-y-4 lg:space-y-6 lg:py-8 flex-1"
            key={item.title}
          >
            <item.Icon className="h-14" aria-hidden={true} />
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyFuddy;
