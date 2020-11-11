class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInStock: false,
      searchValue: "",
      tableData: computedData,
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSerachChange = this.handleSerachChange.bind(this);
    this.getFilteredTableData = this.getFilteredTableData.bind(this);
  }

  getFilteredTableData(stock, query) {
    const newTableData = {};
    for (const [key, value] of Object.entries(computedData)) {
      newTableData[key] = value.filter((record) =>
        stock ? record.stocked : true
      );
    }
    if (query) {
      for (const [key, value] of Object.entries(newTableData)) {
        newTableData[key] = value.filter((record) =>
          record.name.toLowerCase().startsWith(query.toLowerCase())
        );
      }
    }
    return newTableData;
  }

  handleCheckboxChange() {
    this.setState((state) => ({
      showInStock: !state.showInStock,
      tableData: this.getFilteredTableData(
        !state.showInStock,
        state.searchValue
      ),
    }));
  }

  handleSerachChange(value) {
    this.setState((state) => ({
      searchValue: value,
      tableData: this.getFilteredTableData(state.showInStock, value),
    }));
  }

  render() {
    return e(
      "div",
      null,
      e(Search, {
        value: this.state.searchValue,
        handleChange: this.handleSerachChange,
      }),
      e(Checkbox, {
        value: this.state.showInStock,
        handleChange: this.handleCheckboxChange,
      }),
      e(Table, { tableData: this.state.tableData })
    );
  }
}
