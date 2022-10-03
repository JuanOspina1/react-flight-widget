import React from "react";
import TableLetter from "./TableLetter";

const TableCell = ({ word, index }) => {
  return (
    <td>
      {Array.from(word).map((letter, _index) => (
        <TableLetter letter={letter} index={_index} key={_index} />
      ))}
    </td>
  );
};

export default TableCell;
