import * as yup from "yup";

export const changePasswordValidator = yup.object({
  new_password: yup
    .string()
    .required("Please enter a new password.")
    .min(5, "Your new password must be at least 5 characters long.")
    .matches(
      /[a-z]/,
      "Your new password must contain at least one lowercase letter."
    )
    .matches(
      /[A-Z]/,
      "Your new password must contain at least one uppercase letter."
    )
    .matches(/\d/, "Your new password must contain at least one number."),
  confirm_new_password: yup
    .string()
    .required("Please confirm your new password.")
    .oneOf(
      [yup.ref("new_password")],
      "The new passwords you entered do not match. Please try again."
    ),
});
