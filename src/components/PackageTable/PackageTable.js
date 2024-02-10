import React from "react";
import "./PackageTable.css";

const PackageTable = ({ packages }) => {
  return (
    <table className="table table-striped package-table">
      <thead>
        <tr>
          <th>Package Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {packages.map((pkg, index) => (
          <tr key={index}>
            <td>{pkg.name}</td>
            <td>{pkg.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PackageTable;
