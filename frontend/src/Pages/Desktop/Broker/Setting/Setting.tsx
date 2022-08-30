import React, {Component} from "react";
import ChangePassword from "./ChangePassword/ChangePassword";
import Department from "./Department/Department";
import Location from "./Loaction/Location";
import Themes from "./Themes/Themes";
interface Props {
  pageStatus: string;
}

const Setting: React.FC<Props> = ({pageStatus}) => {
  return (
    <div>
      {pageStatus == "password" ? <ChangePassword /> : null}
      {pageStatus == "department" ? <Department/> : null}
      {pageStatus == "location" ? <Location/> : null}
      {pageStatus == "themes" ? <Themes/> : null}
    </div>
  );
};

export default Setting;
