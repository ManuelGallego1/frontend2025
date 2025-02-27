import TableFijo from "@/components/molecules/TableFijo"; 

export default function VerFijoPage() {
    return (
        <div className="overflow-x-auto w-[85vw] h-[90vh] overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4">Ventas Fijo</h1>
            <TableFijo />
        </div>
    );
}
