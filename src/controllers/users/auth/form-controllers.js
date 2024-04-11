import AUTH_KEYS from "../../../api/keys/users/auth/auth-keys";
import { api } from "../../../api/axios/instance-axios";

const register = async (values) => {
  const formData = new FormData();
  for (let value in values) {
    formData.append(value, values[value]);
  }
  formData.append("imagePath", values.imagePath.name);
  try {
    const savedUserResponse = await api.post(AUTH_KEYS.REGISTER, { formData });
    if (!savedUserResponse.ok) {
      throw new Error("Failed to register user");
    }
    const savedUser = await savedUserResponse.json();
    return savedUser;
  } catch (error) {
    console.error("Error registering user:", error);
    return null;
  }
};

const login = async (values) => {
  try {
    const loggedUserResponse = await api.post(AUTH_KEYS.LOGIN, {
      values,
    });
    if (!loggedUserResponse.ok) {
      throw new Error("Failed to login user");
    }
    const loggedIn = await loggedUserResponse.data;
    return loggedIn;
  } catch (error) {
    console.error("Error logging user:", error);
    return null;
  }
};

export { register, login };
