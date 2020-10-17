import React from "react";
import { useSelector } from "react-redux";
import { VscChevronDown } from "react-icons/vsc";
import "./sales-table.css";

function SalesTable() {
  const data = useSelector((state) => state.sales);
  const tableLabels = [
    "WEEK ENDING",
    "RETAIL SALES",
    "WHOLESALE SALES",
    "UNITS SOLD",
    "RETAILER MARGIN",
  ];

  const addCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="container background-white">
      <table className="sales-table">
        <thead>
          <tr>
            {tableLabels.map((label) => (
              <th key={label} className="sales-head">
                {label}
                <VscChevronDown className="table-icon" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.weekEnding}>
              {/* assuming weekEnding will be unique */}
              <td>{d.weekEnding}</td>
              <td>${addCommas(d.retailSales)}</td>
              <td>${addCommas(d.wholesaleSales)}</td>
              <td>{addCommas(d.unitsSold)}</td>
              <td>${addCommas(d.retailerMargin)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
