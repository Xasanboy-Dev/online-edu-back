import axios from "axios";

const host = "localhost";
const PORT = 8080;

export async function RegisterAuth(
  name: string,
  lastname: string,
  password: string,
  phoneNumber: string
) {
  try {
    if (
      name &&
      lastname &&
      password &&
      phoneNumber &&
      name.length >= 3 &&
      lastname.length >= 3 &&
      password.length >= 6 &&
      phoneNumber.includes("998") &&
      phoneNumber.length == 12
    ) {
      const result = await axios.post(`http://${host}:${PORT}/user/register`, {
        name,
        lastname,
        phoneNumber,
        password,
      });
      console.log(result.data);
    } else {
      return "Foydalanuvchi yaroqsiz yoki allaqachon olingan";
    }
  } catch (error: any) {
    return "Foydalanuvchi yaroqsiz yoki allaqachon olingan";
  }
}

export async function LoginAuth(phoneNumber: string, password: string) {
  try {
    if (phoneNumber && password) {
      const result = await axios.post(`http://${host}:${PORT}/user/login`, {
        password,
        phoneNumber,
      });
      localStorage.setItem("allowed?", result.data.user);
      return "All right";
    } else {
      return "Sizning telefon raqamingiz notogri yoki parolinigz!";
    }
  } catch (error: any) {
    return "Sizning telefon raqamingiz notogri yoki parolinigz!";
  }
}

export async function getUserByToken(token: string) {
  try {
    const user = await axios.get(`http://${host}:${PORT}/user/token`, {
      headers: { Authorization: token },
    });
    return user.data.user;
  } catch (error: any) {
    return false;
  }
}
