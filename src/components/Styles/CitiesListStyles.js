export const styles = theme => ({
    menuItem: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& $primary, & $icon": {
          color: theme.palette.common.white
        }
      }
    },
    primary: {},
    icon: {},
    paper: {
      position: "absolute",
      zIndex: 99,
      width: 300
    }
  });