import React from "react";

const PlayerInfo = ({data}) =>{
    return(
        <div className="flex flex-col items-center">
            {data.icon}
            <p>{data.text}</p>
        </div>
    )
}
export default PlayerInfo