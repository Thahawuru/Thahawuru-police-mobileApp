import {
  View,
  Text,
  StatusBar,
  Image,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { Tabs, Redirect, router } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { icons } from "../../constants";
// import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
// import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
// import { faQrcode } from "@fortawesome/free-solid-svg-icons/faQrcode";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

const TabIcon = ({ icon, name, focused, customStyle }) => {
  return (
    <View
      className=" flex justify-center items-center flex-col "
      style={customStyle?.container}
    >
      <View style={customStyle?.containerIcon}>
        {name === "fuigitivePersonss" || name === "fuigitiveVehicless" ? (
          <View className="items-center justify-center ">
            <Image
              source={icon}
              resizeMode="contain"
              // tintColor={color}
              className="w-8 h-8"
            />
            {/* <Text className={`${focused ? 'font-psemibold' : 'font-pregular'}`} 
              
            >
                {name}
            </Text> */}
          </View>
        ) : (
          <>
            {/* <MaterialIcons
              name={icon}
              color={focused ? "#4A249D" : name === "Scan" ? "white" : "grey"}
              className="W-20 h-20"
              size={customStyle?.icon.size || 25}
              style={customStyle?.icon}
            ></MaterialIcons> */}
            <MaterialCommunityIcons
              name={icon}
              color={focused ? "#0F0D4B" : name === "Scan" ? "white" : "grey"}
              className="W-20 h-20"
              size={customStyle?.icon.size || 25}
              style={customStyle?.icon}
            />
          </>
        )}
      </View>
      {name === "Scan" && (
        <Text
          className={`${
            focused ? "text-blue-700" : "text-slate-500"
          } uppercase text-xs  w-full pt-1`}
        >
          {/* {name} */}
        </Text>
      )}
    </View>
  );
};

const TabsLayout = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () =>
      setIsKeyboardVisible(true)
    );
    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () =>
      setIsKeyboardVisible(false)
    );
  });
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          backgroundColor: "#F2EEFB",
          tabBarStyle: {
            backgroundColor: "#FFF",
            height: isKeyboardVisible ? 0 : 65,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={"home"} focused={focused} name={"Home"} />
            ),
          }}
        />
        <Tabs.Screen
          name="fuigitivePersons"
          options={{
            title: "fuigitivePersons",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"account-search"}
                focused={focused}
                name={"fuigitivePersons"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="scan"
          options={{
            title: "Scan",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"qrcode"}
                focused={focused}
                name={"Scan"}
                customStyle={{
                  containerIcon: {
                    backgroundColor: focused ? "#001d3d" : "#0F0D4B",
                    // transform: [{ translateY: -5 }],
                    borderRadius: 55,
                    // borderWidth: 2,
                    // borderColor: "red",
                    padding: 10,
                    height: 70,
                    width: 70,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  container: {
                    transform: [{ translateY: isKeyboardVisible ? 30 : -6 }],
                    // borderRadius: 55,
                    // borderWidth: 2,
                    // borderColor: "red",
                    padding: 10,
                  },
                  icon: {
                    size: 35,
                    style: {
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 5,
                    },
                  },
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="fuigitiveVehicles"
          options={{
            title: "Vehicles",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"car"}
                focused={focused}
                name={"fuigitiveVehicles"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={"account"} focused={focused} name={"Profile"} />
            ),
          }}
        />
        <Tabs.Screen
          name="qrpage"
          options={{
            title: "Wallet ID",
            headerShown: false,
            href: null,
            presentation: "modal",
          }}
        />
        <Tabs.Screen
          name="(settings)"
          options={{
            title: "Settings",
            headerShown: true,
            href: null,
            presentation: "modal",
          }}
        />

        <Tabs.Screen
          name="scanview/[id]"
          options={{
            title: "scanndetails",
            headerShown: false,
            href: null,
            presentation: "modal",
          }}
        />

        <Tabs.Screen
          name="personDetails/[id]"
          options={{
            title: "Person Details",
            headerShown: true,
            href: null,
            headerStyle: {
              backgroundColor: "#001d3d",
            },
            headerTitleStyle: {
              fontSize: 18,
            },
            headerTintColor: "#fff",
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
      </Tabs>
      <StatusBar style="light" backgroundColor={"#001d3d"} />
    </>
  );
};

export default TabsLayout;
