import * as React from "react";
import Paper from "@mui/material/Paper";

import {
  FilteringState,
  GroupingState,
  IntegratedFiltering,
  IntegratedGrouping,
  IntegratedPaging,
  IntegratedSelection,
  IntegratedSorting,
  PagingState,
  SelectionState,
  SearchState,
  EditingState,
  SortingState,
} from "@devexpress/dx-react-grid";
import {
  DragDropProvider,
  Grid,
  GroupingPanel,
  PagingPanel,
  Table,
  TableGroupRow,
  TableHeaderRow,
  TableSelection,
  Toolbar,
  SearchPanel,
  TableColumnResizing,
} from "@devexpress/dx-react-grid-material-ui";

import {
  ColorsTypeProvider,
  ImagesTypeProvider,
  CurrencyTypeProvider,
  ColorTypeProvider,
} from "./DataGridProvider";

const DataGrid = ({
  rows = [],
  columns = [],
  selection = [],
  showSort,
  showEdit,
  showSelect,
  showGroup,
  showSearchBar,
  defaultColumnWidth,
  tableColumnExtensions,
  onSelectionChange = () => {},
  // onCommitChanges = () => {},
}) => {
  const [colorColumn] = React.useState(["color"]);
  const [colorsColumn] = React.useState(["colors"]);

  const [imageColumn] = React.useState(["primaryImages"]);
  const [currencyColumn] = React.useState(["price", "newPrice"]);
  const [pageSizes] = React.useState([5, 10, 15]);
  const [defaultColumnWidths, setDefaultColumnWidths] = React.useState(
    defaultColumnWidth ? defaultColumnWidth : []
  );

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <CurrencyTypeProvider for={currencyColumn} />
        <ImagesTypeProvider for={imageColumn} />
        <ColorsTypeProvider for={colorsColumn} />
        <ColorTypeProvider for={colorColumn} />

        <FilteringState />
        <SortingState />
        <EditingState />
        <SelectionState
          selection={selection}
          onSelectionChange={onSelectionChange}
          showSelectionColumn={true}
        />
        <SearchState />

        <GroupingState />
        <PagingState />

        <IntegratedGrouping />
        <IntegratedFiltering />
        <IntegratedSorting />
        <IntegratedPaging />
        <IntegratedSelection />

        {showGroup && <DragDropProvider />}

        <Table
          columnExtensions={tableColumnExtensions ? tableColumnExtensions : []}
        />
        <TableColumnResizing
          columnWidths={defaultColumnWidths}
          onColumnWidthsChange={setDefaultColumnWidths}
          minColumnWidth={55}
        />

        <TableHeaderRow showSortingControls={showSort} />
        <TableSelection
          showSelectAll={showSelect}
          highlightRow
          selectByRowClick
          showSelectionColumn={showSelect}
        />
        <TableGroupRow />
        {(showGroup || showSearchBar) && <Toolbar />}
        {showSearchBar && <SearchPanel />}
        {showGroup && <GroupingPanel showSortingControls={true} />}
        <PagingPanel pageSizes={pageSizes} />
      </Grid>
    </Paper>
  );
};
export default DataGrid;
