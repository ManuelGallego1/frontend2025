import Image from "next/image";
import StatsPyme1 from "@/components/molecules/statistics/StatsPyme1"; 
import StatsPyme2 from "@/components/molecules/statistics/StatsPyme2";
import VerFijoButton from "@/components/atoms/VerFijoButton";
import VerMovilButton from "@/components/atoms/VerMovilButton";


export default function MainScreen() {
    return (
        <div className="container">
            <StatsPyme1 />
            <StatsPyme2 />
            <VerFijoButton />
            <VerMovilButton />
            
            
        </div>
        
    );
}