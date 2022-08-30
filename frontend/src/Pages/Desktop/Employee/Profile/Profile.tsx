import React, {Component} from "react";
import Familymember from "./Familymember/Familymember";
import House from "./House/House";
import Personaldetails from "./Personaldetails/Personaldetails";
import "./Profile.scss";
import Vehicles from "./Vehicles/Vehicles";
interface Props {
  pageStatus: string;
}

const Profile: React.FC<Props> = ({
  pageStatus,
}) => {
  return (
    <div>
      {pageStatus == "personal_details" ? <Personaldetails/> : null}
      {pageStatus == "family" ? <Familymember/> : null}
      {pageStatus == "vehicles" ? <Vehicles/> : null}
      {pageStatus == "house" ? <House/> : null}
    </div>
  );
};

export default Profile;
