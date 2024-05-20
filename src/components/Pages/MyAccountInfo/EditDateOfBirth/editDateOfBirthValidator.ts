import * as yup from "yup";
import { minAge } from "../../../base/constant/minimumAge";

export const editDateOfBirthValidator = yup.object({
  old_date_of_birth: yup
    .string()
    .required("Old date of birth is required")
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
  new_date_of_birth: yup
    .string()
    .required("New date of birth is required")
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
