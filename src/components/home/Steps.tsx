"use client";

import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { APP_URL } from "@/constants";

const steps = [
  {
    name: "Empieza",
    description: "Ingresá los ingredientes que tengas a mano.",
    image:
      "https://res.cloudinary.com/fuddy/image/upload/v1703176150/landing%20page/mockup-empieza_zoz8dt.png",
  },
  {
    name: "Elige",
    description:
      "Explora recetas saludables basadas en tus preferencias y los ingredientes proporcionados.",
    image:
      "https://res.cloudinary.com/fuddy/image/upload/v1703176151/landing%20page/mockup-elige_jkgqtq.png",
  },
  {
    name: "Aprende",
    description:
      "Descubre propiedades nutricionales, recetas e información para una alimentación consciente.",
    image:
      "https://res.cloudinary.com/fuddy/image/upload/v1703176151/landing%20page/mockup-aprende_dvip4u.png",
  },
];

function Steps() {
  const [activeStep, setActiveStep] = useState(steps[0]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="vertical-padding bg-primary-100" id="pasos">
      <div className="inner-width mt-8 space-y-4 lg:space-y-10">
        {/* title */}
        <div className="space-y-4 lg:space-y-6 text-center max-w-prose mx-auto [text-wrap:balance]">
          <h2 className="text-3xl lg:text-5xl leading-tight font-medium">
            Al alcance de 3 pasos
          </h2>
          <p className="lg:text-lg">
            Queremos brindarte una experiencia única y que se adapte a tus
            necesidades alimenticias.
          </p>
        </div>

        {/* content */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-center text-center lg:text-left">
          {/* steps + comenzar */}
          <div className="lg:col-span-5 lg:col-start-2">
            <ul
              className="text-brand text-4xl lg:text-7xl font-semibold leading-tight space-y-4"
              role="tablist"
            >
              {steps.map((step) => {
                const isActive = step.name === activeStep.name;
                return (
                  <li
                    className={`${
                      isActive
                        ? "text-brand"
                        : "text-primary-400 hover:text-primary-500"
                    } flex gap-2 items-center w-min mx-auto lg:mx-0 transition cursor-pointer`}
                    key={step.name}
                    role="tab"
                    onClick={() => setActiveStep(step)}
                  >
                    {step.name}
                    {isActive && <BsArrowRight size={32} />}
                  </li>
                );
              })}
            </ul>

            <button
              className="btn bg-white text-brand inline-flex mt-4 lg:mt-10"
              onClick={handleOpenModal} // Abrir modal al hacer clic
            >
              Comenzar
            </button>
          </div>

          <div className="lg:flex lg:items-start lg:col-span-5">
            <Image
              className="h-72 lg:h-auto w-56 mx-auto object-cover object-top"
              src={activeStep.image}
              alt="Captura de pantalla de la app"
              width={224}
              height={463}
            />
            <p className="max-w-[22.5rem] mx-auto lg:-ml-16 bg-white py-6 px-10 rounded-[1.25rem] lg:rounded-bl-none shadow-[0px_4px_4px_0px_#00000025]">
              {activeStep.description}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">Elige una opción</h3>
            <div className="space-y-4">
              <a
                href="https://app.fuddy.click/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-brand hover:bg-white hover:text-brand hover:border-brand border text-white w-full block text-center"
              >
                App Web
              </a>
              <button
                className="btn bg-brand cursor-not-allowed text-white w-full relative group"
                disabled
              >
                <span className="group-hover:hidden">App Móvil</span>
                <span className="hidden group-hover:inline">
                  Lento pero seguro
                </span>
              </button>
            </div>
            <button
              className="flex gap-2 items-center justify-center py-2 px-4 hover:bg-brand rounded-full text-center hover:text-white tracking-wide transition font-medium bg-white text-black hover:border-brand border mt-4 text-sm"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Steps;
