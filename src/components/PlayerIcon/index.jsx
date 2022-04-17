import React from "react";
import profil from "../../assets/images/profil.jpg"

const PlayerIcon = () =>{
    return(
        <div className=" h-52 w-52 rounded-full bg-white overflow-hidden">
            <img src={profil} alt="" className="max-w-full object-cover" />
        </div>
    )
}

export default PlayerIcon;