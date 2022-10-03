import * as React from "react";
import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
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
  EditingState,
  SortingState,
  DataTypeProvider,
} from "@devexpress/dx-react-grid";
import {
  DragDropProvider,
  Grid,
  GroupingPanel,
  PagingPanel,
  Table,
  TableFilterRow,
  TableGroupRow,
  TableHeaderRow,
  TableSelection,
  Toolbar,
  TableEditColumn,
} from "@devexpress/dx-react-grid-material-ui";
import {
  Plugin,
  Template,
  TemplateConnector,
  TemplatePlaceholder,
} from "@devexpress/dx-react-core";
import PopupEdit from "../PopupEdit";

const availableFilterOperations = [
  "equal",
  "notEqual",
  "greaterThan",
  "greaterThanOrEqual",
  "lessThan",
  "lessThanOrEqual",
];

const PREFIX = "Demo";
const classes = {
  currency: `${PREFIX}-currency`,
  numericInput: `${PREFIX}-numericInput`,
};
const StyledInput = styled(Input)(() => ({
  [`& .${classes.numericInput}`]: {
    fontSize: "14px",
    width: "100%",
  },
}));
const StyledI = styled("i")(({ theme }) => ({
  [`& .${classes.currency}`]: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const getInputValue = (value) => (value === undefined ? "" : value);

const getColor = (amount) => {
  if (amount < 3000) {
    return "#F44336";
  }
  if (amount < 5000) {
    return "#FFC107";
  }
  if (amount < 8000) {
    return "#FF5722";
  }
  return "#009688";
};
const PopupEditing = React.memo(({ popupComponent: Popup }) => (
  <Plugin>
    <Template name="popupEditing">
      <TemplateConnector>
        {(
          {
            rows,
            getRowId,
            addedRows,
            editingRowIds,
            createRowChange,
            rowChanges,
          },
          {
            changeRow,
            changeAddedRow,
            commitChangedRows,
            commitAddedRows,
            stopEditRows,
            cancelAddedRows,
            cancelChangedRows,
          }
        ) => {
          const isNew = addedRows.length > 0;
          let editedRow;
          let rowId;
          if (isNew) {
            rowId = 0;
            editedRow = addedRows[rowId];
          } else {
            [rowId] = editingRowIds;
            const targetRow = rows.filter((row) => getRowId(row) === rowId)[0];
            editedRow = { ...targetRow, ...rowChanges[rowId] };
          }

          const processValueChange = ({ target: { name, value } }) => {
            console.log(name, value)

            const changeArgs = {
              rowId,
              change: createRowChange(editedRow, value, name),
            };
            if (isNew) {
              changeAddedRow(changeArgs);
            } else {
              changeRow(changeArgs);
            }
          };
          const rowIds = isNew ? [0] : editingRowIds;
          
          const applyChanges = () => {
            if (isNew) {
              commitAddedRows({ rowIds });
            } else {
              stopEditRows({ rowIds });
              commitChangedRows({ rowIds });
            }
          };
          const cancelChanges = () => {
            if (isNew) {
              cancelAddedRows({ rowIds });
            } else {
              stopEditRows({ rowIds });
              cancelChangedRows({ rowIds });
            }
          };

          const open = editingRowIds.length > 0 || isNew;
          return (
            <Popup
              open={open}
              row={editedRow}
              onChange={processValueChange}
              onApplyChanges={applyChanges}
              onCancelChanges={cancelChanges}
            />
          );
        }}
      </TemplateConnector>
    </Template>
    <Template name="root">
      <TemplatePlaceholder />
      <TemplatePlaceholder name="popupEditing" />
    </Template>
  </Plugin>
));
const CurrencyEditor = ({ onValueChange, value }) => {
  const handleChange = (event) => {
    const { value: targetValue } = event.target;
    if (targetValue.trim() === "") {
      onValueChange(undefined);
      return;
    }
    onValueChange(parseInt(targetValue, 10));
  };
  return (
    <StyledInput
      type="number"
      classes={{
        input: classes.numericInput,
      }}
      fullWidth={true}
      value={getInputValue(value)}
      inputProps={{
        min: 0,
        placeholder: "Filter...",
      }}
      onChange={handleChange}
    />
  );
};

const CurrencyFormatter = ({ value }) => (
  <StyledI className={classes.currency} style={{ color: getColor(value) }}>
    {value.toLocaleString("en-US", { style: "currency", currency: "USD" })}
  </StyledI>
);

const CurrencyTypeProvider = (props) => (
  <DataTypeProvider
    formatterComponent={CurrencyFormatter}
    editorComponent={CurrencyEditor}
    availableFilterOperations={availableFilterOperations}
    {...props}
  />
);
const getRowId = (row) => row.id;

const DataGrid = ({
  rows = [],
  columns = [],
  selection = [],
  showFilter = false,
  showEdit = false,
  showSelect = false,
  showGroup = false,
  showSearchBar = false,
  onSelectionChange = () => {},
  onCommitChanges = () => {},

}) => {

  const [pageSizes] = React.useState([5, 10, 15]);
  const [currencyColumns] = React.useState(["amount"]);

  return (
    <Paper>
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <FilteringState />
        <SortingState />
        <EditingState onCommitChanges={onCommitChanges} />
        <SelectionState
          selection={selection}
          onSelectionChange={onSelectionChange}
          showSelectionColumn={true}
        />
        <GroupingState />
        <PagingState />

        <IntegratedGrouping />
        <IntegratedFiltering />
        <IntegratedSorting />
        <IntegratedPaging />
        <IntegratedSelection />

        <CurrencyTypeProvider for={currencyColumns} />

        {showGroup && <DragDropProvider />}

        <Table />
        <TableSelection
          showSelectAll={showSelect}
          highlightRow
          selectByRowClick
          showSelectionColumn={showSelect}
        />

        <TableHeaderRow showSortingControls={true} />
        {showFilter && <TableFilterRow showFilterSelector={true} />}
        {showEdit && <TableEditColumn showAddCommand showEditCommand />}
        <TableGroupRow />
        {(showGroup || showSearchBar) && <Toolbar />}
        {showGroup && <GroupingPanel showSortingControls={true} />}
        <PagingPanel pageSizes={pageSizes} />
        <PopupEditing popupComponent={PopupEdit} />
      </Grid>
    </Paper>
  );
};
export default DataGrid;
