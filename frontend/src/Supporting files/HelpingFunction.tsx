export function validateEmail(email: string) {
  var re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z-])+\.)+([a-zA-Z]{2,4})+$/;
  return re.test(email);
}

export function validatePincode(pincode: string) {
  if (pincode.toString() == "111111" || pincode.toString() == "000000") {
    return false;
  } else if (pincode != undefined) {
    if (pincode.toString().length == 6) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function validateRegno(reg_no: string) {
  var re = /^[A-Z]{2,2}[0-9]{2}[A-Z]{0,3}[0-9]{4,4}$/;
  var re_dl = /^[A-Z]{2,2}[0-9]{1,2}[A-Z]{0,3}[0-9]{4,4}$/;
  if (reg_no.substring(0, 2) == "DL") {
    return re_dl.test(reg_no);
  }
  return re.test(reg_no);
}

export function validateFullName(full_name: string) {
  if (full_name != undefined) {
    var name = full_name.toString().trim();
    if (name.includes(" ")) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function validateMobileNumber(mobile_no: string) {
  if (mobile_no != undefined && mobile_no != null) {
    var mobile = mobile_no.toString().trim();
    if (
      mobile.toString().length == 10 &&
      parseInt(mobile.substring(0, 1)) >= 6
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
