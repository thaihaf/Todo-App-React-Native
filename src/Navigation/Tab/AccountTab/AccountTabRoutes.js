import IconStrings from "../../../Contants/IconStrings";
import NavigationStrings from "../../../Contants/NavigationStrings";
import {
  ChangePassword,
  ConfirmCode,
  ConfirmNewPass,
  RecoveryPassword,
  SignIn,
  SignUp,
} from "../../../Screens";

export default [
  {
    name: NavigationStrings.SIGNIN,
    component: SignIn,
    iconName: IconStrings.icProfile,
  },
  {
    name: NavigationStrings.SIGNUP,
    component: SignUp,
    iconName: IconStrings.icEdit,
  },
  {
    name: NavigationStrings.CHANGE_PASSWORD,
    component: ChangePassword,
    iconName: IconStrings.icEdit,
  },
  {
    name: NavigationStrings.RECOVERY_PASSWORD,
    component: RecoveryPassword,
    iconName: IconStrings.icProfile,
  },
  {
    name: NavigationStrings.CONFIRM_CODE,
    component: ConfirmCode,
    iconName: IconStrings.icEdit,
  },
  {
    name: NavigationStrings.CONFIRM_NEW_PASS,
    component: ConfirmNewPass,
    iconName: IconStrings.icEdit,
  },
];
