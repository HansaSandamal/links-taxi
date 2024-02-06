// PackageTable.js
import React from "react";

const PackageTable = ({ packages }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Package Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {packages.map((pkg, index) => (
          <tr key={index}>
            <td>{pkg.name}</td>
            <td>{pkg.price}</td>
            <td>{pkg.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PackageTable;
