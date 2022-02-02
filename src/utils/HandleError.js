import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

function HandleError({ error, message }) {
    return (
        <>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={error}>
                <MuiAlert severity="error" elevation={6} variant="filled">
                    {message}
                </MuiAlert>
            </Snackbar>
        </>
    )
}

export default HandleError