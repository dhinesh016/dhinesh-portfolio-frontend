import * as yup from "yup";

let ValidateSchema=yup.object({
   username:yup.string().min(3,"atleast 3 requeried").required(),
   email:yup.string().min(6,"atleast 6 requeried").required(),
   mobile:yup.number().typeError("enter valide number").integer().min(999999999,"minimum and 10 digits allowed"),
   message:yup.string().min(8,"atleast 8 requeried").required(),
})
export default ValidateSchema;