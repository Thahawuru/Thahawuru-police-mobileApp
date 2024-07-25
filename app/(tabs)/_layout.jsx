import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { icons } from "../../constants";
// import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
// import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
// import { faQrcode } from "@fortawesome/free-solid-svg-icons/faQrcode";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const TabIcon = ({ icon, name, focused, customStyle }) => {
  return (
    <View
      className=" flex justify-center items-center flex-col"
      style={customStyle?.container}
    >
      <View style={customStyle?.containerIcon}>
        {name === "fuigitivePersons" || name === "fuigitiveVehicles" ? (
          <View className="items-center justify-center">
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
          <MaterialIcons
            name={icon}
            color={focused ? "#003566" : name === "Scan" ? "white" : "grey"}
            className="W-20 h-20"
            size={customStyle?.icon.size || 25}
            style={customStyle?.icon}
          ></MaterialIcons>
        )}
      </View>
      {name === "Scan" && (
        <Text
          className={`${
            focused ? "text-blue-700" : "text-slate-500"
          } uppercase text-xs`}
        >
          {name}
        </Text>
      )}
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#FFF",
            height: 55,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={"home-filled"} focused={focused} name={"Home"} />
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
                icon={icons.FugPeople}
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
                icon={"qr-code"}
                focused={focused}
                name={"Scan"}
                customStyle={{
                  containerIcon: {
                    backgroundColor: focused ? "#001d3d" : "#003566",
                    // transform: [{ translateY: -15 }],
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
                    transform: [{ translateY: -22 }],
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
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.FugVehicle}
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
              <TabIcon
                icon={"person-outline"}
                focused={focused}
                name={"Profile"}
              />
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
      </Tabs>
      <StatusBar style="light" backgroundColor={"#001d3d"} />
    </>
  );
};

export default TabsLayout;
