import {
	Categories,
	ChangePassword,
	Home,
	Logout,
	Profile,
	Tasks,
} from "../../Screens";
import { TaskActions } from "../../Components";
import NavigationStrings from "../../Contants/NavigationStrings";
import IconStrings from "../../Contants/IconStrings";

export default [
	{
		name: NavigationStrings.HOME,
		component: Home,
		iconName: IconStrings.icHome,
		lable: NavigationStrings.HOME,
	},
	{
		name: NavigationStrings.CATEGORIES,
		component: Categories,
		iconName: IconStrings.icCategory,
		lable: NavigationStrings.CATEGORIES,
	},
	{
		name: NavigationStrings.TASKS,
		component: Tasks,
		iconName: IconStrings.icTasks,
		lable: NavigationStrings.TASKS,
	},
	{
		name: NavigationStrings.TASK_ACTIONS,
		component: TaskActions,
		iconName: IconStrings.icHome,
		lable: NavigationStrings.TASK_ACTIONS,
		options: { presentation: "modal" }
	},
	{
		name: NavigationStrings.PROFILE,
		component: Profile,
		iconName: IconStrings.icProfile,
		lable: NavigationStrings.PROFILE,
	},
	{
		name: NavigationStrings.CHANGE_PASSWORD,
		component: ChangePassword,
		iconName: IconStrings.icEdit,
		lable: NavigationStrings.CHANGE_PASSWORD,
		options: { presentation: "modal" }
	},
	{
		name: NavigationStrings.LOGOUT,
		component: Logout,
		iconName: IconStrings.icEdit,
		lable: NavigationStrings.LOGOUT
	},
];
