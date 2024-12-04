import { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header-profile";
import NIC from "../../components/wallet/nicCard";
import Passport from "../../components/wallet/passportCard";
import DrivingLicence from "../../components/wallet/drivingLicenceCard";
import OfficerDetails from "../../components/wallet/officerDetails";
import { useCards } from "../../api/useCards";
import ProfileCard from "../../components/profileCard";
import { useAuthContext } from "@/hooks/useAuthContext";
import { use } from "i18next";

const profile = () => {
  const { getNIC, getDrivingLicence, getPassport, getOfficerDetails } =
    useCards();

  const [officerDetails, setOfficerDetails] = useState({});

  const { user,police } = useAuthContext();
  useEffect(() => {
    if (user) {
      setOfficerDetails({user,police});
    }
  }, [user]);

  const nic = getNIC();
  const licence = getDrivingLicence();
  const passport = getPassport();
  // const officerDetails = getOfficerDetails();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-full min-h-screen w-screen  bg-secondry-2 flex justify-start items-center gap-y-4">
          <View className="w-full">
            <Header
              back={true}
              styles={{ container: "bg-secondry-1 border-secondry-1" }}
            ></Header>
          </View>

          <ProfileCard></ProfileCard>

          <View className="w-[90%] mt-[-10px]">
            <OfficerDetails officerDetails={officerDetails}></OfficerDetails>
          </View>
          {/* 
          
          <View className='w-[90%]'>
            <NIC nic={nic}></NIC>
          </View>
          <View className='w-[90%] '>
            <DrivingLicence licence ={licence} ></DrivingLicence>
          </View>
          <View className='w-[90%] '>
           <Passport passport={passport}></Passport>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
