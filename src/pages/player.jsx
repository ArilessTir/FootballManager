import React from "react"
import PlayerInfo from "../components/PlayerInfo"
import {FaBirthdayCake} from 'react-icons/fa'
import {GiFrance,GiSoccerField,GiSoccerBall,GiShakingHands} from 'react-icons/gi'
import { Radar } from "react-chartjs-2"
import { Chart, registerables } from 'chart.js';
import PlayerIcon from "../components/PlayerIcon"
Chart.register(...registerables);

const Player = () =>{
    const test = [
        {icon:<FaBirthdayCake/>,text:"26 ans"},
        {icon:<GiSoccerField/>,text:"Mo.Offensif"},
        {icon:<GiFrance/>,text:"Français"},
        {icon:<GiSoccerBall/>,text:"5"},
        {icon:<GiShakingHands/>,text:"15"},
    ]
    const data = {
        labels: [
            'Defence',
            'Physique',
            'Vitesse',
            'Creativite',
            'Attaque',
            'Technique',
            'Tete',
            'Mental'
          ],
        datasets: [{
            label: 'My First Dataset',
            data: [0, 85, 70, 90, 80,85, 50,60],
        }],
        options: {
            elements: {
              line: {
                borderWidth: 3
              }
            },
                        scale: {
                        min: 0,
                        max: 100,
                        ticks: {
                            display: false
                         }
                    },
          },
      };

    return(
        <div>
            <PlayerIcon />
            <div className="flex space-x-10">
                {test.map(data=>{
                    return(
                        <PlayerInfo data={data}/>
                    )
                })}
            </div>
            <div className=" w-80 h-80 bg-white">                
                <Radar 
                    data={data}
                />
            </div>
        </div>
    )
}

export default Player