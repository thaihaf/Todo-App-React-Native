import IconStrings from "../../../Contants/IconStrings";
import NavigationStrings from "../../../Contants/NavigationStrings";
import { EditProfile, Profile } from "../../../Screens";

export default [
  {
    name: NavigationStrings.PROFILE,
    component: Profile,
    iconName: IconStrings.icProfile,
  },
  {
    name: NavigationStrings.EDIT_PROFILE,
    component: EditProfile,
    iconName: IconStrings.icEdit,
  },
];
