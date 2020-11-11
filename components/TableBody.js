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

const noResults = (data) => {
  for (const [key, value] of Object.entries(data)) {
    if (value.length) {
      return false;
    }
  }
  return true;
};

const TableBody = (props) => {
  return e(
    "tbody",
    null,
    noResults(props.tableData)
      ? e("tr", null, e("td", { colSpan: 2, id: "no-results" }, "No results"))
      : null,
    ...getTableSections(props.tableData)
  );
};
