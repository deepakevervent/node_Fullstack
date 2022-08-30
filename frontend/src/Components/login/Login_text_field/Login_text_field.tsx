import React, {Component} from "react";
import "./Login_text_field.scss";

interface Props {
  name: string;
  placeholder: string;
  type: string;
  icons: string;
  attrname: string;
  value: string;
  value_update: Function;
  warn_status: Number;
}

const Login_text_field: React.FC<Props> = ({
  name,
  type,
  placeholder,
  icons,
  attrname,
  value,
  value_update,
  warn_status,
}) => {
  return (
    <div
      className={
        warn_status == 0
          ? icons
          : warn_status == 1
          ? icons + " validfield"
          : icons + " invalidfield"
      }
    >
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => value_update(attrname, e.target.value)}
      />
    </div>
  );
};

export default Login_text_field;
