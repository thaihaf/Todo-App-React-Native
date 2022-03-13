import IconStrings from "../../../Contants/IconStrings";
import NavigationStrings from "../../../Contants/NavigationStrings";
import {
  Categories,
  Home,
  Profile,
  Tasks,
  TimeTables
} from "../../../Screens";

export default [
  {
    name: NavigationStrings.HOME,
    component: Home,
    iconName: IconStrings.icHome,
  },
  {
    name: NavigationStrings.TIME_TABLE,
    component: TimeTables,
    iconName: "fact-check",
  },
  {
    name: NavigationStrings.TASKS,
    component: Tasks,
    iconName: "assignment",
  },
  {
    name: NavigationStrings.CATEGORIES,
    component: Categories,
    iconName: "question-answer",
  },
  {
    name: NavigationStrings.PROFILE,
    component: Profile,
    iconName: "person",
  },
];
