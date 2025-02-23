import SlideBar from "@/components/molecules/SlideBar";
import Image from "next/image";

export default function MainScreen() {
    return (
        <div className="container">
            <SlideBar />
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Bienvenido</h1>
                    <div className="text-center">
                        <Image src="/img/png/logo.png" alt="Logo" width={200} height={200} />
                    </div>
                    <div>
                        <ul>
                            <li><i className="fa-solid fa-house"></i> house</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">Iniciar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}