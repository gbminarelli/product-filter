const Table = (props) => {
  return e(
    "table",
    null,
    e(
      "thead",
      null,
      e("tr", null, e("th", null, "Name"), e("th", null, "Price"))
    ),
    e(TableBody, { tableData: props.tableData })
  );
};
