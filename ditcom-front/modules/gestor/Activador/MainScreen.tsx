import Image from "next/image";
import StatsActivador1 from "@/components/molecules/statistics/StatsActivador1"; 
import StatsActivador2 from "@/components/molecules/statistics/StatsActivador2";
import VerFijoButton from "@/components/atoms/VerFijoButton";
import VerMovilButton from "@/components/atoms/VerMovilButton";

export default function MainScreen() {
    return (
        <div className="container">
            <StatsActivador1 />
            <StatsActivador2 />
            <VerFijoButton />
            <VerMovilButton />
            
            
        </div>
        
    );
}