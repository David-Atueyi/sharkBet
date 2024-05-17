import * as yup from "yup";

const validateMinimumTopUp = (value: string) => parseInt(value) >= 100;
const validateMaximumTopUp = (value: string) => parseInt(value) <= 1000000000;

export const depositValidator = yup.object({
  card_number: yup
    .string()
    .required("Please provide card number")
    .matches(/^\d{16}$/, "Invalid card number"),
  expiry_date: yup
    .string()
    .required("expiry date required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid date format (MM/YY)"),
  cvv: yup
    .string()
    .required("CVV is required")
    .matches(/^\d{3}$/, "CVV must be 3 digits"),
  top_up: yup
    .string()
    .required("Top up amount is required")
    .test("minimum", "Min top up: NGN 100", validateMinimumTopUp)
    .test("maximum", "Max top up: NGN 2,000,000,000", validateMaximumTopUp),
});
