import * as yup from "yup";

const phoneValidator = /^(?:0(?:(?:5[0-9])|(?:7[0-9]))[-\s]{0,1}\d{7})$/;
const passwordValidator = yup
  .string()
  .test(
    "password",
    "Password must contain at least one uppercase letter",
    (value) => /[A-Z]/.test(value)
  )
  .test(
    "password",
    "Password must contain at least one lowercase letter",
    (value) => /[a-z]/.test(value)
  )
  .test("password", "Password must contain at least one number", (value) =>
    /[0-9]/.test(value)
  )
  .test(
    "password",
    "Password must contain at least one special character",
    (value) => /[!@#$%^&*()_+}{":;'?/>.<,]/.test(value)
  )
  .required("Password is required")
  .min(8, "Password must be at least 8 characters");

const registerSchema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  LastName: yup.string().required("last name is required"),
  email: yup
    .string()
    .email("invalid email format, @ - is required")
    .required("email is required"),
  password: passwordValidator,
  phone: yup
    .string()
    .matches(phoneValidator, "Invalid phone number")
    .required("Phone number is required"),
  location: yup.string().notRequired(),
  occupation: yup.string().notRequired(),
  image: yup.string().notRequired(),
  bio: yup.string().notRequired(),
});

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("invalid email format, @ - is required")
    .required("email is required"),
  password: yup.string().required("password is required"),
});

export { registerSchema, loginSchema };
