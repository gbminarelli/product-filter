const Checkbox = (props) => {
  const handleChange = (event) => {
    props.handleChange(event.target.value);
  };

  return e(
    "div",
    null,
    e("input", {
      type: "checkbox",
      value: props.value,
      onChange: handleChange,
      id: "checkbox",
    }),
    e("label", { htmlFor: "checkbox" }, "Only show products in stock")
  );
};
