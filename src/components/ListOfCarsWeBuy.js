import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RemoveIcon from "@mui/icons-material/Remove";
import { theme } from "../theme";

const ListOfCarsWeBuy = () => {
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
      <List sx={{ border: `2px solid${secondaryColor}`, borderRadius: "50px", mx: 1, pr: 5 }}>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor, minWidth: "45px" }}>
            <RemoveIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.4em" }}
            primary="Uszkodzone, rozbite."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor, minWidth: "45px" }}>
            <RemoveIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.4em" }}
            primary="Zmęczone życiem."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor, minWidth: "45px" }}>
            <RemoveIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontSize: "1.4em" }} primary="Zaniedbane." />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor, minWidth: "45px" }}>
            <RemoveIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.4em" }}
            primary="Bez przeglądu."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor, minWidth: "45px" }}>
            <RemoveIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontSize: "1.4em" }} primary="Bez OC." />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor, minWidth: "45px" }}>
            <RemoveIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.4em" }}
            primary="Bez prawa rejestracji."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor, minWidth: "45px" }}>
            <RemoveIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.4em" }}
            primary="Każdą marke."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: primaryColor, minWidth: "45px" }}>
            <RemoveIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.4em" }}
            primary="Osobowe, dostawcze, terenowe."
          />
        </ListItem>
      </List>
    </Grid>
  );
};

export default ListOfCarsWeBuy;
