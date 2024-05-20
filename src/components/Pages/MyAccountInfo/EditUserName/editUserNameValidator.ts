import * as yup from "yup";

export const editUserNameValidator = yup.object({
  old_user_name: yup.string().required("Old user name is required"),
  new_user_name: yup.string().required("New user name is required"),
});

