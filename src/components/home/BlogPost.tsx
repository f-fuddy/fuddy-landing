"use client";
import Image from "next/image";
import { BsShare, BsChevronRight } from "react-icons/bs";
import Swal from "sweetalert2";

interface Props {
  title: string;
  text: string;
  blogURL: string;
  imageURL: string;
}

function BlogPost({ title, text, blogURL, imageURL }: Props) {
  const sharePost = () => {
    navigator.clipboard.writeText(blogURL);
    Swal.fire({
      title: "Copiaste el Link",
      text: "Compartelo con quienes creas que le será de utilidad",
      icon: "success",
      timer: 3000,
      confirmButtonColor: "#90FFAF",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
  };

  return (
    <article
      className="flex-1 flex flex-col bg-neutral-100 rounded-[1.25rem] overflow-clip"
      role="contentinfo"
      aria-label="article"
    >
      <Image
        className="w-full h-52 object-cover"
        src={imageURL}
        alt={title}
        width={328}
        height={200}
      />
      {/* body */}
      <div className="h-full flex flex-col gap-4 p-4 lg:p-6">
        <header>
          <h1 className="text-xl font-medium">{title}</h1>
        </header>
        <p>{text}</p>
        {/* links */}
        <div className="w-full flex justify-between mt-auto">
          <div className="flex gap-2 items-center">
            <a
              className="btn btn-sm"
              href={blogURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saber más
            </a>
            <a
              className="p-2 text-sm text-neutral-600 hover:text-brand border-b border-transparent hover:border-brand transition"
              href="https://blog.fuddy.click/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir al blog
              <BsChevronRight className="inline h-2 ml-2" aria-hidden={true} />
            </a>
          </div>
          <button onClick={sharePost}>
            <BsShare title="Compartir link del blog" size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
