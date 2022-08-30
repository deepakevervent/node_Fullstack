import React, {Component} from "react";
import ChangePassword from "./ChangePassword/ChangePassword";
interface Props {
  pageStatus: string;
}

const Setting: React.FC<Props> = ({pageStatus}) => {
  return (
    <div>
      {pageStatus == "change_password" ? <ChangePassword /> : null}
      {pageStatus == "family" ? null : null}
      {pageStatus == "vehicles" ? null : null}
      {pageStatus == "house" ? null : null}
    </div>
  );
};

export default Setting;
