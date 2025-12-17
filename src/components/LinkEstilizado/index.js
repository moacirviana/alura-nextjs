import React from "react";

const LinkEstilizado = React.forwardRef((props, ref) => {
  return (
    <span ref={ref} style={{ color: "red" }}>
      {props.children}
    </span>
  );
});

export default LinkEstilizado;
