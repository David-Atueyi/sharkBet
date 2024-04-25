import * as yup from "yup";
import { minAge } from "../../../base/constant/minimumAge";

export const signUpFormValidator = yup.object({
  email: yup
    .string()
    .required("Email address is required")
    .email("Invalid email format")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email format"
    ),
  user_name: yup
    .string()
    .required("User name is required")
    .min(5, "User name must have at least 5 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number"),
  date_of_birth: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date")
    .test(
      "is-age-eligible",
      "You must be at least 18 years old",
      function (value) {
        if (!value) return;
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          return age - 1 >= minAge;
        }

        return age >= minAge;
      }
    ),
});
