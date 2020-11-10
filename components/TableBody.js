// const e = React.createElement;

const getTableSections = (data) => {
  const sectionsArray = [];
  for (const [key, value] of Object.entries(data)) {
    sectionsArray.push(
      e("tr", null, value.length ? e("th", { colSpan: 2 }, key) : null),
      ...value.map((record) =>
        e(
          "tr",
          null,
          e(
            "td",
            record.stocked ? null : { className: "not-stocked" },
            record.name
          ),
          e("td", null, record.price)
        )
      )
    );
  }
  return sectionsArray;
};

const TableBody = (props) => {
  return e("tbody", null, ...getTableSections(props.tableData));
};

// export { TableBody };
