import * as yup from "yup";

export const logInFormValidator = yup.object({
  email: yup
    .string()
    .required("Email address is required")
    .email("Invalid email format")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email format"
    ),
  password: yup
    .string()
    .required("Password is required"),
});
