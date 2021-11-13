import ThemeToggle from "../features/theme-toggle/ThemeToggle";
import {Box, Container} from "@mui/material";

export default function Header() {
    return (
        <header>
            <Container>
                <Box component="nav" sx={{flexGrow: 1, backgroundColor: "background.default"}}>
                    <ThemeToggle/>
                </Box>
            </Container>
        </header>
    );
}