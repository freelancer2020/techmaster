import React, { useRef } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    height: "100px",
    backgroundColor: "#F2F3F4",
    alignItems: "center",
  },
  brand: {
    color: "#232221",
    fontFamily: "Aclonica",
    cursor: "pointer",
    paddingLeft: theme.spacing(4),
  },
}));

const Header: React.FC = () => {
  const brandRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const changeName = () => {
    return brandRef.current
      ? (brandRef.current.textContent = "TechMaster")
      : null;
  };

  return (
    <Box className={classes.root}>
      <Typography
        innerRef={brandRef}
        onClick={changeName}
        variant="h4"
        className={classes.brand}
        children="Techmaster"
      />
    </Box>
  );
};

export default Header;
