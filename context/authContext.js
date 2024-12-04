import { createContext, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        police: action.payload.police,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        police:null,
        loading: false,
      };
    case "LODING":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        police:null,
        loading: true,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    police:null,
    isAuthenticated: false,
    loading: true,
  });

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        const police = await AsyncStorage.getItem("user");
        if (user && police) {
          dispatch({
            type: "LOGIN",
            payload: {user:JSON.parse(user),police:JSON.parse(police)},
          });
        }else{
            dispatch({
                type: "LOGOUT",
              });
        }
      } catch (error) {
        console.error("Failed to load user", error);
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
