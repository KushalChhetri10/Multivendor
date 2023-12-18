import { createAsyncThunk } from "@reduxjs/toolkit";
import lwpAxios from "../../config/axiosConfig";
import { AxiosError } from "axios";

interface LoginData {
  name?: string;
  email: string;
  password: string;
  rememberMe?: boolean;
}

export const loginAsync = createAsyncThunk(
  "user/login",
  async (loginData: LoginData) => {
    try {
      const response = await lwpAxios.post("/user/login", loginData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new Error("Login failed:" + error.response?.data.message);
      } else {
        return Promise.reject();
      }
    }
  }
);
export const createUserAsync = createAsyncThunk(
  "user/create",
  async (loginData: LoginData) => {
    try {
      const response = await lwpAxios.post("/user/create", loginData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new Error("Login failed:" + error.response?.data.message);
      } else {
        return Promise.reject();
      }
    }
  }
);
export const activateUserAsync = createAsyncThunk(
  "user/activation",
  async (token: string) => {
    try {
      const response = await lwpAxios.get(`/user/activation/${token}`);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new Error("Login failed:" + error.response?.data.message);
      } else {
        return Promise.reject();
      }
    }
  }
);
