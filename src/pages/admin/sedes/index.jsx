import { Button } from "@mui/material";
import Table from "./table";
import CreateIcon from '@mui/icons-material/Create';

const data = [
    {
        id: 1,
        name: 'Institucion educativa obando',
        ubicacion: 'obando',
        departamento: 'huila',
        tipoInstitucion: 'pública',
        logos: 'https://4.bp.blogspot.com/-EZibMLxki6Y/U_qYl576FmI/AAAAAAAAAD8/z0PUMBRQNLE/s1600/ESCUDO%2BIEO.jpg',
        status: 'Activo',

    },
    {
        id: 2,
        name: 'Carlos ramon',
        ubicacion: 'san agustin',
        departamento: 'huila',
        tipoInstitucion: 'privada',
        logos: 'https://i.ytimg.com/vi/8Jan_tRUkDk/mqdefault.jpg',
        status: 'Activo',

    }
]

export default function Sedes() {
    return (
        <>
            <div className="head-table">
                <div>
                    <h2 className="color-gray">Sedes</h2>
                </div>
                <div className="head-new-table">
                    <Button variant="outlined" size="small"><CreateIcon /></Button>
                </div>
            </div>
            <div>
                <Table data={data} />
            </div>

        </>
    );
}




