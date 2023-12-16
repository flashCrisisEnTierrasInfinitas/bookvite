import { Button } from "@mui/material";
import Table from "./table";
import CreateIcon from '@mui/icons-material/Create';

const data = [
    {
        id: 1,
        name: 'jhon mario',
        lastName: 'chilito calderon',
        role: 'Administrador',
        status: 'Activo',

    },
    {
        id: 2,
        name: 'james dario',
        lastName: 'chilito calderon',
        role: 'Profesor',
        status: 'Activo',

    },
    {
        id: 3,
        name: 'juan diego',
        lastName: 'chilito calderon',
        role: 'Estudiante',
        status: 'Activo',

    }
]


export default function Usuarios() {
    return (
        <>
            <div className="head-table">
                <div>
                    <h2 className="color-gray">Usuarios</h2>
                </div>
                <div className="head-new-table">
                    <Button variant="outlined" size="small"><CreateIcon /></Button>
                </div>
            </div>
            <div className="margin-90">
                <Table data={data} />
            </div>

        </>
    );
}