import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img src={this.props.image} alt={this.props.name} />
        </TableCell>
        <TableCell>
          <h2>{this.props.name}</h2>
        </TableCell>
        <TableCell>
          <p>{this.props.birthday}</p>
        </TableCell>
        <TableCell>
          <p>{this.props.gender}</p>
        </TableCell>
        <TableCell>
          <p>{this.props.job}</p>
        </TableCell>
      </TableRow>
    );
  }
}

export default Customer;
