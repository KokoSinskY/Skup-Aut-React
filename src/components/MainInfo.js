import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";
import { theme } from "../theme";

const MainInfo = () => {
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <Grid
      container
      item
      paddingY={2}
      xs={12}
      sm={12}
      md={12}
      lg={6}
      sx={{ justifyContent: "center", color: primaryColor }}
    >
      <List sx={{ border: `2px solid${secondaryColor}`, borderRadius: "50px", mx: 1 }}>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor }}>
            <Check />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.4em" }}
            primary="Dojazd do klienta i oględziny GRATIS!"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor }}>
            <Check />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.4em" }}
            primary="Zakup auta natychmiast po ustaleniu ceny."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor }}>
            <Check />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.4em" }}
            primary="Odbiór własną lawetą."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor }}>
            <Check />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.4em" }}
            primary="Wszystkie formalności załatwiamy na miejscu."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor }}>
            <Check />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.4em" }}
            primary="Kontakt codziennie do 23."
          />
        </ListItem>
      </List>
    </Grid>
  );
};

export default MainInfo;
