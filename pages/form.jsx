import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../components/button";
import Gambar1 from "../public/gambar2.jpg";

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().email().required().label("Email"),
  id: yup
    .string()
    .length(9)
    .matches(/[\bA-Z\b]/)
    .required()
    .label("ID Number"),
  postal: yup
    .string()
    .length(6)
    .matches(/^[0-9]{6}/, "Postal Code must be match: 1-9")
    .required()
    .label("Postal Code"),
  unit_number: yup
    .string()
    .max(6)
    .matches(/[\^-]/, "Use (-) to complete the Unit Number")
    .required()
    .label("Unit Number"),
  donation_amount: yup
    .string()
    .matches(/[\d]/, "Donation Amount must be number")
    .required()
    .label("Donation Amount"),
  address: yup.string().matches(/[\D]/, "Address can't only use digit"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <div className=" w-full h-full flex">
      <div className="w-2/3 cont pt-24">
        <p className="font-sol text-4xl">Let's Donate!</p>
        <form className="pt-9 pb-7" onSubmit={handleSubmit(onSubmitHandler)}>
          <p className="text-xs pl-4">{errors.name?.message}</p>
          <div className="w-full bg-[#F5F5F5] rounded-[35px] px-4 py-2 mb-3">
            <input
              {...register("name")}
              className="bg-[#F5F5F5] w-full placeholder:text-black focus:outline-none"
              placeholder="Name"
              type="text"
              required
            />
          </div>

          <p className="text-xs pl-4">{errors.email?.message}</p>

          <div className="w-full bg-[#F5F5F5] rounded-[35px] px-4 py-2 mb-3">
            <input
              {...register("email")}
              className="bg-[#F5F5F5] w-full placeholder:text-black focus:outline-none"
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <p className="text-xs pl-4">{errors.id?.message}</p>
          <div className="w-full bg-[#F5F5F5] rounded-[35px] px-4 py-2 mb-3">
            <input
              {...register("id")}
              className="bg-[#F5F5F5] w-full placeholder:text-black focus:outline-none"
              placeholder="ID Number"
              type="text"
              required
            />
          </div>
          <p className="text-xs pl-4">{errors.postal?.message}</p>
          <div className="w-full bg-[#F5F5F5] rounded-[35px] px-4 py-2 mb-3">
            <input
              {...register("postal")}
              className="bg-[#F5F5F5] w-full placeholder:text-black focus:outline-none"
              placeholder="Postal Code"
              type="text"
              required
            />
          </div>
          <p className="text-xs pl-4">{errors.unit_number?.message}</p>
          <div className="w-full bg-[#F5F5F5] rounded-[35px] px-4 py-2 mb-3">
            <input
              {...register("unit_number")}
              className="bg-[#F5F5F5] w-full placeholder:text-black focus:outline-none"
              placeholder="Unit Number"
              type="text"
              required
            />
          </div>
          <p className="text-xs pl-4">{errors.donation_amount?.message}</p>
          <div className="w-full bg-[#F5F5F5] rounded-[35px] px-4 py-2 mb-3">
            <input
              {...register("donation_amount")}
              className="bg-[#F5F5F5] w-full placeholder:text-black focus:outline-none"
              placeholder="Donation Amount ($)"
              type="text"
              required
            />
          </div>
          <p className="text-xs pl-4">{errors.address?.message}</p>
          <div className="w-full bg-[#F5F5F5] rounded-[35px] px-4 py-2 mb-3">
            <input
              {...register("address")}
              className="bg-[#F5F5F5] w-full placeholder:text-black focus:outline-none"
              placeholder="Address"
              type="text"
            />
          </div>
          <div className="w-full bg-[#F5F5F5] rounded-[35px] px-4 py-2 mb-3">
            <input
              {...register("remarks")}
              className="bg-[#F5F5F5] w-full placeholder:text-black focus:outline-none "
              placeholder="Remarks (Optional)"
              type="text"
            />
          </div>
          <div className="pt-6">
            <Button text="Submit" type="submit" />
          </div>
        </form>
      </div>
      <div className="w-1/3 bg-[#8CBEA3]">
        <div className="w-full pr-24 pt-24">
          <Image src={Gambar1} alt="Gambar 1" className="rounded-r-xl" />
        </div>
        <div className="w-full pr-24 pt-4">
          <Image src={Gambar1} alt="Gambar 1" className="rounded-r-xl" />
        </div>
      </div>
    </div>
  );
};

export default Form;
