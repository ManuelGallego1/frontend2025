import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-screen">
        <Image
          src="/img/png/Home.jpg"
          alt="Imagen principal"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
          <Image src="/img/logo.png" alt="Logo" width={300} height={300} />
          <Link href="/login">
            <button className="rounded-full bg-[#D42E4D] text-white px-6 py-2 text-lg hover:bg-[#5a0612] transition-all">
              Iniciar Sesión
            </button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <p className="text-lg font-medium">
            Bienvenido a nuestra plataforma, donde ofrecemos los mejores servicios.
          </p>
        </div>
      </div>
    </div>
  );
}
