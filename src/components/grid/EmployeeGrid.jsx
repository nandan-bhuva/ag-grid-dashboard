import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  themeQuartz,
  themeBalham,
  themeMaterial,
  themeAlpine
} from "ag-grid-community";
import { AllEnterpriseModule } from "ag-grid-enterprise";
ModuleRegistry.registerModules([AllEnterpriseModule]);

const EmployeeGrid = ({ rowData }) => {

  // Theme State
  const [theme, setTheme] = useState("quartz");

  const themeMap = {
    quartz: themeQuartz,
    balham: themeBalham,
    material: themeMaterial,
    alpine: themeAlpine
  };

  // Columns
  const columnDefs = useMemo(() => [
    {
      headerName: "Employee",
      valueGetter: p => `${p.data.firstName} ${p.data.lastName}`,
      flex: 1
    },
    { field: "email", flex: 1.5 },
    { field: "department", width: 120 },
    { field: "position" },
    { field: "location", width: 120 },
    { field: "age", width: 90 },

    {
      field: "salary",
      headerName: "Salary",
      width: 120,
      valueFormatter: p => `₹ ${p.value?.toLocaleString()}`
    },

    {
      field: "hireDate",
      headerName: "Hire Date",
      valueFormatter: p =>
        new Date(p.value).toLocaleDateString()
    },

    {
      field: "performanceRating",
      headerName: "Rating ⭐",
      width: 110
    },

    {
      field: "projectsCompleted",
      headerName: "Projects",
      width: 110
    },

    {
      field: "skills",
      headerName: "Skills",
      cellRenderer: p => p.value?.join(", ")
    },

    {
      field: "manager",
      headerName: "Manager"
    },

    {
      field: "isActive",
      headerName: "Status",
      width: 110,
      cellRenderer: p => (
        <span className={p.value ? "status active" : "status inactive"}>
          {p.value ? "Active" : "Inactive"}
        </span>
      )
    }

  ], []);

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };

  return (
    <div style={{ width: "100%" }}>

      {/* Theme Selector */}
      <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
        <div>
          <label style={{ marginRight: "8px", fontWeight: "500" }}>
            Look More Theme:
          </label>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{ padding: "6px", borderRadius: "6px" }}
          >
            {Object.keys(themeMap).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* AGrid */}
      <div style={{ width: "100%" }}>
        <AgGridReact
          theme={themeMap[theme]}
          rowData={rowData || []}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={5}
          paginationPageSizeSelector={[5, 10, 20]}
          domLayout="autoHeight"
          // sideBar={true}
          sideBar={{
            toolPanels: [
              {
                id: 'columns',
                labelDefault: 'Columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
                toolPanelParams: {
                  suppressPivotMode: true,
                  suppressRowGroups: false,
                  suppressValues: false
                }
              },
              {
                id: 'filters',
                labelDefault: 'Filters',
                iconKey: 'filter',
                toolPanel: 'agFiltersToolPanel',
                toolPanelParams: {
                  suppressPivotMode: true,
                  suppressRowGroups: false,
                  suppressValues: false,
                }
              },
            ],

            defaultToolPanel: 'columns'
          }}
        />
      </div>

    </div>
  );
};

export default EmployeeGrid;