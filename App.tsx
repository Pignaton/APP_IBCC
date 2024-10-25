/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StateProvider } from "./src/contexts/StateContext";
import AuthSack from "./src/stacks/AuthSatck";

export default () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <AuthSack />
      </NavigationContainer>
    </StateProvider>
  );
}
