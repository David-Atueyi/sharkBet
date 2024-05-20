
import * as yup from "yup";

export const changePasswordValidator = yup.object({
  old_password: yup
    .string()
    .required("Old password is required")
    .min(5, "Old password must be at least 5 characters")
    .matches(/[a-z]/, "Old password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Old password must contain at least one uppercase letter")
    .matches(/\d/, "Old password must contain at least one number"),
  new_password: yup
    .string()
    .required("New password is required")
    .min(5, "New password must be at least 5 characters")
    .matches(/[a-z]/, "New password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "New password must contain at least one uppercase letter")
    .matches(/\d/, "New password must contain at least one number"),
  confirm_new_password: yup
    .string()
    .required("New password is required")
    .min(5, "New password must be at least 5 characters")
    .matches(/[a-z]/, "New password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "New password must contain at least one uppercase letter")
    .matches(/\d/, "New password must contain at least one number"),
});

