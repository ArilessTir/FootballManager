import React from "react";
import { playerData } from "../../data/player";
import TableLine from "../TableLine/index";
const Table = ({}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table  w-full">
        <thead className="">
          <tr>
            <th></th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Age</th>
            <th>Poste</th>
            <th>Nationalité</th>
            <th>Match</th>
            <th>Buts</th>
            <th>Passes</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {playerData.map((player) => {
            return <TableLine data={player} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
