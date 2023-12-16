import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { Avatar, Button, ButtonGroup } from "@mui/material";

export default function Table({
    data
}) {


    const columns = [
        {
            field: "actions",
            headerName: "",
            width: 100,
            renderCell: (params) => (
                <>
                    <ButtonGroup
                        size="small"
                        disableElevation
                        variant="outlined"
                        aria-label="Disabled elevation buttons"
                    >
                        <Button><CreateIcon /></Button>
                        <Button color="error"><DeleteIcon /></Button>
                    </ButtonGroup>
                </>
            ),
        },
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Nombre", width: 200 },
        {
            field: "logos",
            headerName: "logos",
            width: 100,
            renderCell: (params) => (
                <>
                    <Avatar alt={params.row.name} src={params.row.logos} />
                </>
            ),
        },
        { field: "ubicacion", headerName: "Ubicacion", width: 200 },
        { field: "departamento", headerName: "Departamento", width: 200 },
        { field: "tipoInstitucion", headerName: "Tipo Institucion", width: 100 },
        { field: "status", headerName: "Status", width: 100 },
        { field: "status", headerName: "Status", width: 100 },
        { field: "status", headerName: "Status", width: 100 },
    ];


    return (

        <DataGrid
            columns={columns}
            rows={data}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
        />
    );
}
