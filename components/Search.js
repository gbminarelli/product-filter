const Search = (props) => {
  const handleChange = (event) => {
    props.handleChange(event.target.value);
  };

  return e("input", {
    type: "text",
    value: props.value,
    onChange: handleChange,
    placeholder: "Search...",
    id: "search",
  });
};
