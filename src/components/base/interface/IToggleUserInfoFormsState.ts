export interface IToggleUserInfoFormsState {
  toggleUserInfoForms: {
    user_name: boolean;
    password: boolean;
    date_of_birth: boolean;
  };
  setToggleUserInfoForms: (
    forms: Partial<IToggleUserInfoFormsState["toggleUserInfoForms"]>
  ) => void;
}