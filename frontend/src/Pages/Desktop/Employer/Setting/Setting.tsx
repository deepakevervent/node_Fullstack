import React, {Component} from "react";
import ChangePassword from "./ChangePassword/ChangePassword";
import Department from "./Department/Department";
import Location from "./Location/Location";
import Organisation from "./Organisation/Organisation";
interface Props {
  pageStatus: string;
}

const Setting: React.FC<Props> = ({pageStatus}) => {
  return (
    <div>
      {pageStatus == "organisation" ? <Organisation /> : null}
      {pageStatus == "department" ? <Department /> : null}
      {pageStatus == "location" ? <Location /> : null}
      {pageStatus == "password" ? <ChangePassword /> : null}
    </div>
  );
};

export default Setting;
