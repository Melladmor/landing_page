"use client";
import React, { useState } from "react";
import Button from "../Buttons/Button";
type FormInput = {
  company: string;
  name: string;
  phone_number: string;
  email: string;
  details: string;
  confirm: boolean;
};
type Props = {};

const FormContact = (props: Props) => {
  const [form, setForm] = useState<FormInput>({
    company: "",
    confirm: true,
    details: "",
    email: "",
    name: "",
    phone_number: "",
  });

  const onChange = (e: React.ChangeEvent<any>) => {
    const { name, value, checked } = e.target;
    const inputValue = e.target.type === "checkbox" ? checked : value;
    setForm((prev) => {
      return { ...prev, [name]: inputValue };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(form));
  };
  return (
    <div className="bg-white rounded-tl-[50px] lg:h-[600px] lg:p-20 md:p-16 sm:p-14 xs:p-12 shadow-xl">
      <h2 className="h4 mb-8">Connect With Your Next Great Hire Today!</h2>

      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-8">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-3">
          <label className="input input-bordered  input-md flex items-center gap-2">
            Company
            <input
              type="text"
              name="company"
              value={form.company}
              className="grow "
              placeholder="Company"
              onChange={onChange}
            />
          </label>
          <label className="input input-bordered  input-md flex items-center gap-2">
            Your Name
            <input
              type="text"
              name="name"
              value={form.name}
              className="grow "
              placeholder="Company"
              onChange={onChange}
            />
          </label>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-3">
          <label className="input input-bordered  input-md flex items-center gap-2">
            Phone Number
            <input
              type="number"
              name="phone_number"
              value={form.phone_number}
              className="grow "
              placeholder="Company"
              onChange={onChange}
            />
          </label>
          <label className="input input-bordered  input-md flex items-center gap-2">
            Email
            <input
              type="text"
              className="grow"
              name="email"
              value={form.email}
              placeholder="Company"
              onChange={onChange}
            />
          </label>
        </div>

        <div>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Project Details"
            name="details"
            value={form.details}
            onChange={onChange}></textarea>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer justify-start">
            <input
              type="checkbox"
              className="checkbox"
              name="confirm"
              checked={form.confirm}
              onChange={onChange}
            />
            <span className="label-text ml-3">
              By sending this form I confirm that I have read and accept the
              Privacy Policy
            </span>
          </label>
        </div>
        <div className="flex w-full">
          <Button variant="colored" type="submit" withIcon>
            GET CONSULTATION
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
