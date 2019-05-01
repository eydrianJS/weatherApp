export const styles = theme => ({
  cssLabel: {
    "&$cssFocused": {
      color: "#ff9f3f"
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: "#ff9f3f"
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#ff9f3f"
    }
  },
  notchedOutline: {},
  elementsInput: {
    margin: "auto",
    maxWidth: 300
  }
});
