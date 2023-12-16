import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { Button, ButtonGroup } from "@mui/material";

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
        { field: "lastName", headerName: "Apellido", width: 200 },
        { field: "role", headerName: "Rol", width: 200 },
        { field: "status", headerName: "Status", width: 200 },
    ];


    return (
        <div>
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
        </div>
    );
}
