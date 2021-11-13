import {Brightness4, Brightness7} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "./themeToggleSlice";

export default function ThemeToggle() {
    const themeMode = useSelector((state) => (state.themeToggle.theme));
    const dispatch = useDispatch();

    return (
        <>
            <IconButton sx={{backgroundColor:"background.default"}} onClick={() => {dispatch(changeTheme())}}>
                {themeMode === "light" ? <Brightness7 sx={{backgroundColor:"background.default"}}/> : <Brightness4 sx={{backgroundColor:"background.default"}}/>}
            </IconButton>
        </>
    );
}