import Image from "next/image";
import StatsAsesor1 from "@/components/molecules/statistics/StatsAsesor1"; 
import StatsAsesor2 from "@/components/molecules/statistics/StatsAsesor2";
import StatsAsesor3 from "@/components/molecules/statistics/StatsAsesor3";

export default function MainScreen() {
    return (
        <div className="container w-full">
            <StatsAsesor1 />
            <StatsAsesor2 />
            <StatsAsesor3 />
        </div>
        
    );
}
