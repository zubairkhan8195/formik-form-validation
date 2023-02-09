import * as Yup from "yup";

export const FormSchema = Yup.object({
    name:Yup.string().min(3,'To Shot').max(6,'To Long').required('Name is a required field'),
    email:Yup.string().email('Invalid Email').required("Email Is Must"),
    // age:Yup.number().min(10).max(50).required("Age Is Must"),
    password:Yup.string().required("Password Is Must").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Enter Strong Password"),
    cpass:Yup.string().required("Confirm Password Is Must").oneOf([Yup.ref('password'),null],"Both Password Must Match")
});