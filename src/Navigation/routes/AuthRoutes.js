import IconStrings from "../../Contants/IconStrings";
import NavigationStrings from "../../Contants/NavigationStrings";
import {
	SignIn,
	SignUp,
} from "../../Screens";

export default [
	{
		name: NavigationStrings.SIGNIN,
		component: SignIn,
		iconName: IconStrings.icHome,
		lable: NavigationStrings.SIGNIN,
	},
	{
		name: NavigationStrings.SIGNUP,
		component: SignUp,
		iconName: IconStrings.icCategory,
		lable: NavigationStrings.SIGNUP,
	},
	
];
