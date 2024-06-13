"use client";
import { useState } from "react";
import "../../styles/globals.css";
import Header from "./Header.js";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({});
  const [lastSentTime, setLastSentTime] = useState(null);
  const minTimeBetweenEmails = 60000; // 60 segundos

  const canSendEmail = () => {
    if (!lastSentTime) return true;
    const elapsedTime = Date.now() - lastSentTime;
    return elapsedTime >= minTimeBetweenEmails;
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
    }
  };

  const handleFocus = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
  };

  const sendEmail = (ev) => {
    ev.preventDefault();

    let currentErrors = {};
    if (!name) currentErrors.name = true;
    if (!phone) currentErrors.phone = true;
    if (!email) currentErrors.email = true;

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      toast.error(
        `Os campos seguintes são obrigatórios: ${Object.keys(
          currentErrors
        ).join(", ")}`
      );
      return;
    }

    if (!canSendEmail()) {
      toast.error("Por favor, espere um momento antes de reenviar o email.");
      return;
    }

    const templateParams = {
      from_name: name,
      company: company,
      role: role,
      phone: phone,
      email: email,
      description: description,
    };

    setLastSentTime(Date.now());
    emailjs
      .send(
        "service_x89js8n",
        "template_luqv0i9",
        templateParams,
        "ybE8JTIka0NAeBCk9"
      )
      .then((res) => {
        toast.success("Email enviado!");
        setName("");
        setCompany("");
        setRole("");
        setPhone("");
        setEmail("");
        setDescription("");
        setErrors({});
      })
      .catch((error) => {
        toast.error(
          "Erro ao enviar o email. Tente novamente mais tarde.",
          error
        );
      });
  };

  return (
    <div className="h-[100vh] bg-[#F3F4F6] max-[1024px]:h-full ">
      <ToastContainer />
      <Header />
      <section className=" flex justify-center items-start flex-row gap-[10rem] max-[1024px]:gap-[5rem] pt-[2rem] self-center max-[1024px]:flex-col max-[1024px]:items-center ">
        <div className="flex flex-col gap-12 max-[1024px]:items-center">
          <h1 className="text-3xl font-regular bg-clip-text text-[#262625] text-start leading-normal max-[1024px]:text-center">
            Quer fazer um <br />
            <b className="font-semibold text-[#7678ED]">orçamento gratuito?</b>
          </h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-6">
              <div className="w-[3rem] bg-white h-[3rem] rounded-full flex items-center justify-center">
                <Icon
                  icon="line-md:phone-twotone"
                  className="text-[#F18701] text-3xl"
                />
              </div>
              <div>
                <p className="text-[#262625] font-light">Telefone:</p>
                <p className="text-[#262625]">+55 (62) 99614-1741</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <div className="w-[3rem] bg-white h-[3rem] rounded-full flex items-center justify-center">
                <Icon
                  icon="line-md:email-twotone"
                  className="text-[#F18701] text-3xl"
                />
              </div>
              <div>
                <p className="text-[#262625] font-light">Email:</p>
                <p className="text-[#262625]">codepenguin.dev@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <div className="w-[3rem] bg-white h-[3rem] rounded-full flex items-center justify-center">
                <Icon
                  icon="line-md:my-location"
                  className="text-[#F18701] text-3xl"
                />
              </div>
              <div>
                <p className="text-[#262625] font-light">Endereço:</p>
                <p className="text-[#262625]">Goiânia-GO</p>
              </div>
            </div>
          </div>
        </div>
        <form
          className="flex flex-col gap-4 w-[30rem] max-[1024px]:mb-[4rem] max-[1024px]:w-[80%]"
          onSubmit={sendEmail}
        >
          <div className="input-container">
            <input
              type="text"
              className={`border-2 rounded-lg py-3 px-4 bg-[#F3F4F6] ${
                errors.name ? "border-red-500" : "border-slate-300"
              }`}
              placeholder=" "
              value={name}
              onChange={handleInputChange(setName, "name")}
              onFocus={() => handleFocus("name")}
              required
            />
            <label htmlFor="name">
              Nome Completo <span className="required">*</span>
            </label>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="border-2 rounded-lg border-slate-300  py-3 px-4 bg-[#F3F4F6]"
              placeholder=" "
              value={company}
              onChange={handleInputChange(setCompany, "company")}
              onFocus={() => handleFocus("company")}
            />
            <label htmlFor="company">Nome da Empresa</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="border-2 border-slate-300 rounded-lg py-3 px-4 bg-[#F3F4F6]"
              placeholder=" "
              value={role}
              onChange={handleInputChange(setRole, "role")}
              onFocus={() => handleFocus("role")}
            />
            <label htmlFor="role">Cargo</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              className={`border-2 rounded-lg py-3 px-4 bg-[#F3F4F6] ${
                errors.phone ? "border-red-500" : "border-slate-300"
              }`}
              placeholder=" "
              value={phone}
              onChange={handleInputChange(setPhone, "phone")}
              onFocus={() => handleFocus("phone")}
              required
            />
            <label htmlFor="phone">
              Telefone <span className="required">*</span>
            </label>
          </div>
          <div className="input-container">
            <input
              type="email"
              className={`border-2 rounded-lg py-3 px-4 bg-[#F3F4F6] ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
              placeholder=" "
              value={email}
              onChange={handleInputChange(setEmail, "email")}
              onFocus={() => handleFocus("email")}
              required
            />
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
          </div>
          <div className="input-container">
            <textarea
              className="border-2 border-slate-300 rounded-lg py-3 px-4 bg-[#F3F4F6] "
              placeholder=" "
              value={description}
              onChange={handleInputChange(setDescription, "description")}
              onFocus={() => handleFocus("description")}
            />
            <label htmlFor="description">Descrição</label>
          </div>
          <button className="px-4 py-2 bg-[#7678ED] w-[40%] rounded-full text-neutral-50 mt-6 max-[1024px]:self-center">
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
