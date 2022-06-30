import React from "react";
import { NavLink, Link } from "react-router-dom";
const TableLine = ({ data }) => {
  const mean = (tab) => {
    const len = tab.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
      res += tab[i];
      console.log(i + "->" + tab[i]);
    }
    return res / len;
  };
  const note = mean(data.Statistique);
  return (
    <>
      <tr className="hover cursor-pointer">
        <th>{data.id}</th>
        <td>{data.Nom}</td>
        <td>
          <NavLink to={`player/${data.id}`}>{data.Prenom} </NavLink>
        </td>
        <td>{data.Age}</td>
        <td>{data.Poste}</td>
        <td>{data.Nationalité}</td>
        <td>{data.Match}</td>
        <td>{data.Buts}</td>
        <td>{data.Passes}</td>
        <td>{note}</td>
      </tr>
    </>
  );
};

export default TableLine;
