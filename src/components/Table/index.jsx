import React from "react";
import { playerData } from "../../data/player";
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
          <tr className="hover">
            <th>{playerData[0].id}</th>
            <td>{playerData[0].Nom}</td>
            <td>{playerData[0].Prenom}</td>
            <td>{playerData[0].Age}</td>
            <td>{playerData[0].Poste}</td>
            <td>{playerData[0].Nationalité}</td>
            <td>{playerData[0].Match}</td>
            <td>{playerData[0].Buts}</td>
            <td>{playerData[0].Passes}</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
