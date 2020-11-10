// const e = React.createElement;

const Search = (props) => {
  const handleChange = (event) => {
    props.handleChange(event.target.value);
  };

  return e("input", {
    type: "text",
    value: props.value,
    onChange: handleChange,
    // onChange: (event) => handleChange(event, props),
    placeholder: "Search...",
  });
};

// export { Search };
