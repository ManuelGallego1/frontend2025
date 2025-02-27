import TableMovil from "@/components/molecules/TableMovil";
 

export default function VerMovilPage() {
    return (
        <div className="overflow-x-auto w-[85vw] h-[90vh] overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4">Ventas Moviles</h1>
            <TableMovil />
        </div>
    );
}