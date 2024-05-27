import BlogPost from "./BlogPost";

const blogPosts = [
  {
    title: "El Consumo de Alimentos Ultraprocesados",
    text: "Los alimentos ultraprocesados son productos industriales que han sufrido múltiples procesos de fabricación y contienen ingredientes artificiales, aditivos y conservantes.",
    blogURL: "https://blog.fuddy.click/posts/003_alimentos_ultraprocesados/",
    imageURL:
      "https://res.cloudinary.com/draig/image/upload/v1702020945/fuddy/portada/fg3bhrwnn9ncszkt6qpn.jpg",
  },
  {
    title: "Ideas para Loncheras Saludables",
    text: "Una lonchera saludable es esencial para mantener la energía y el enfoque durante todo el día. Estas ideas no solo son adecuadas para llevar al trabajo o la escuela, sino que también son versátiles y deliciosas para todas las edades.",
    blogURL: "https://blog.fuddy.click/posts/007_loncheras_saludables",
    imageURL:
      "https://res.cloudinary.com/draig/image/upload/v1702021046/fuddy/portada/m0yv7jafrgyca5q0nuj7.jpg",
  },
  {
    title: "Nutrición y Sostenibilidad Ambiental",
    text: "Explramos consejos específicos que no solo mejoran nuestra nutrición, sino que también tienen un impacto positivo en el medio ambiente.",
    blogURL:
      "https://blog.fuddy.click/posts/010_nutricion_sostenibilidad_ambiente",
    imageURL:
      "https://res.cloudinary.com/draig/image/upload/v1702021047/fuddy/portada/qgpayni0srkksidybcb0.jpg",
  },
];

function NutritionInLatam() {
  return (
    <section
      className="inner-width vertical-padding space-y-4 lg:space-y-10"
      id="nutrición"
    >
      <div className="space-y-4 lg:space-y-6 text-center max-w-prose mx-auto [text-wrap:balance]">
        <h2 className="text-3xl lg:text-5xl leading-tight font-medium">
          La importancia de la nutrición en Latam
        </h2>
        <p className="lg:text-lg">
          Visitá nuestro blog para conocer sobre cómo podemos generar un impacto
          positivo a través de una buena alimentación.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {blogPosts.map((blog) => (
          <BlogPost key={blog.title} {...blog} />
        ))}
      </div>
    </section>
  );
}

export default NutritionInLatam;
