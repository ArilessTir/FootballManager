import React from "react";
import PlayerInfo from "../components/PlayerInfo";
import { playerData } from "../data/player";
import { useParams } from "react-router-dom";
import {
  GiFrance,
  GiSoccerField,
  GiSoccerBall,
  GiShakingHands,
  GiCalendar,
} from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { Radar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import PlayerIcon from "../components/PlayerIcon";
Chart.register(...registerables);

const Player = () => {
  const { id } = useParams();
  const player = playerData[id - 1];

  const test = [
    { icon: <GiCalendar cl />, text: `${player.Age} ans` },
    { icon: <GiSoccerField />, text: `${player.Poste}` },
    { icon: <GrLocation />, text: `${player.Nationalité}` },
    { icon: <GiSoccerBall />, text: `${player.Buts}` },
    { icon: <GiShakingHands />, text: `${player.Passes}` },
  ];
  const data = {
    labels: [
      "Defence",
      "Physique",
      "Vitesse",
      "Creativite",
      "Attaque",
      "Technique",
      "Tete",
      "Mental",
    ],
    datasets: [
      {
        label: `${player.Prenom},${player.Nom}`,
        data: player.Statistique,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const config = {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scale: {
      min: 0,
      max: 100,
      ticks: {
        display: false,
      },
    },
  };

  return (
    <section className="flex flex-col items-center h-[100vh] py-5">
      <PlayerIcon />
      <div className="flex space-x-10 my-10">
        {test.map((data) => {
          return <PlayerInfo data={data} />;
        })}
      </div>
      <div className=" w-80 h-80 bg-white rounded-xl">
        <Radar data={data} options={config} />
      </div>
    </section>
  );
};

export default Player;
