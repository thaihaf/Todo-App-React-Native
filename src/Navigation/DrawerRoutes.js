import IconStrings from "../Contants/IconStrings";
import NavigationStrings from "../Contants/NavigationStrings";
import { HomeStack, CategoriesStack, TasksStack } from "./Stack";
import {
  SignIn,
  SignUp,
  RecoveryPassword,
  ConfirmCode,
  ConfirmNewPass,
  TimeTables,
} from "../Screens";
import { HomeTab } from "./Tab";
export default [
  {
    name: NavigationStrings.HOME_STACK,
    component: HomeStack,
    iconName: IconStrings.icHome,
    lable: NavigationStrings.HOME,
  },
  {
    name: NavigationStrings.CATEGORIES_STACK,
    component: CategoriesStack,
    iconName: IconStrings.icCategory,
    lable: NavigationStrings.CATEGORIES,
  },
  {
    name: NavigationStrings.TASKS_STACK,
    component: TasksStack,
    iconName: IconStrings.icTasks,
    lable: NavigationStrings.TASKS,
  },
  {
    name: NavigationStrings.HOME_TABS,
    component: HomeTab,
    iconName: IconStrings.icTasks,
    lable: NavigationStrings.HOME_TABS,
  },
];
