import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required(
      <p className="text-red-500 p-2">*Please enter you&lsquo;r name</p>
    ),
  email: yup
    .string()
    .email(
      <p className="text-red-500 p-2">*Please enter a valid email address</p>
    )
    .required(
      <p className="text-red-500 p-2">
        *Please enter you&lsquo;r email address
      </p>
    ),
  message: yup
    .string()
    .required(
      <p className="text-red-500 p-2">*Please enter you&lsquo;r message</p>
    ),
});

export default schema;
