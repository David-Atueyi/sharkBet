import { create } from "zustand";
import { getAuthData } from "../utility/Auth/getAuthData";

interface IUserInfo {
  userId: string;
  username: string;
  email: string;
  dob: string;
}

interface IUseGetUserInfo {
  userInfo: IUserInfo;
  setUserInfo: () => Promise<void>;
}

export const useGetUserInfo = create<IUseGetUserInfo>((set) => ({
  userInfo: {
    userId: "",
    username: "",
    email: "",
    dob: "",
  },

  setUserInfo: async () => {
    const authData = await getAuthData();
    if (authData) {
      set((state) => ({
        userInfo: {
          ...state.userInfo,
          userId: authData.user.id,
          username: authData.user.user_metadata.username || "",
          email: authData.user.email || "",
          dob: authData.user.user_metadata.dob || "",
        },
      }));
    }
  },
}));
