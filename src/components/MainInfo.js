import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";
import { theme } from "../theme";

const MainInfo = () => {
  const primaryColor = theme.palette.primary.main;

  return (
    <Grid sx={{ color: primaryColor }}>
      <List>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor }}>
            <Check />
          </ListItemIcon>
          <ListItemText primary="Dojazd do klienta i oględziny GRATIS!" />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor }}>
            <Check />
          </ListItemIcon>
          <ListItemText primary="Zakup auta natychmiast po ustaleniu ceny." />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor }}>
            <Check />
          </ListItemIcon>
          <ListItemText primary="Odbiór własną lawetą." />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor }}>
            <Check />
          </ListItemIcon>
          <ListItemText primary="Wszystkie formalności załatwiamy na miejscu." />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor }}>
            <Check />
          </ListItemIcon>
          <ListItemText primary="Kontakt codziennie do 23." />
        </ListItem>
      </List>
    </Grid>
  );
};

export default MainInfo;
