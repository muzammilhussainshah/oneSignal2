// <<<<<<< HEAD
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../Screens/Authentication/Login';
import SignUp from '../Screens/Authentication/SignUp';
import ForgetPassword from '../Screens/Authentication/ForgetPassword';
import Codeverify from '../Screens/Authentication/CodeVerify';
import ActivateAccount from '../Screens/Authentication/SignUp/activateAccount';
import ConfirmPassword from '../Screens/Authentication/confirmPassword/confirmPassword';
import Home from '../Screens/Home';
import Pin from '../Screens/Pin';
import Search from '../Screens/Search';
import Gift from '../Screens/Gift';
import CheckOut from '../Screens/CheckOut';
import Basket from '../Screens/basket';
import DietryRequirements from '../Screens/DietryRequirements';
import Product from '../Screens/Product';
import Yard from '../Screens/Yard';
import CreateYard from '../Screens/Yard/createYard';
import FullViewItemCard from '../Screens/Yard/fullViewItemCard';
import IncludeDetails from '../Screens/Yard/includeDetails';

const StackNavigator = createStackNavigator(
  {
    // initital debug},
    // CreateYard: { screen: CreateYard },
    // IncludeDetails: { screen: IncludeDetails },

    // Home: { screen: Home },
    // initital debug},

    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ConfirmPassword: { screen: ConfirmPassword },
    ActivateAccount: { screen: ActivateAccount },
    Codeverify: { screen: Codeverify },
    ForgetPassword: { screen: ForgetPassword },
    Home: { screen: Home },
    Pin: { screen: Pin },
    Search: { screen: Search },
    DietryRequirements: { screen: DietryRequirements },
    CheckOut: { screen: CheckOut },
    Gift: { screen: Gift },
    Basket: { screen: Basket },
    Product: { screen: Product },
    Yard: { screen: Yard },
    CreateYard: { screen: CreateYard },
    FullViewItemCard: { screen: FullViewItemCard },
    IncludeDetails: { screen: IncludeDetails },
  },
  {
    headerMode: 'none',
  },
);

const Routes = createAppContainer(StackNavigator);

export default Routes;
