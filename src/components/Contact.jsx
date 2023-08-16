import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_stvqnd9
// service_522ebwg
// 9qOrYW2KOkwwd0zla

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_522ebwg",
        "template_stvqnd9",
        {
          from_name: form.name,
          to_name: "Angelo S Dorfey",
          from_email: form.email,
          to_email: "usbaliendev@gmail.com",
          message: form.message,
        },
        "9qOrYW2KOkwwd0zla"
      )
      .then(
        () => {
          setLoading(false);
          alert("Muito obrigado. Entrarei em contato assim que possivel.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, algo eu de errado. Por favor tente de novo.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#03030370] border border-[#168bf6] backdrop-blur-[2.5px] shadow-[0px_0px_20px_2px_rgba(22,138,246,0.25)] p-8 rounded-2xl text-center'>
        <p className={styles.sectionSubText}>Entre em contato</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Seu nome...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Seu email...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='O que você gostaria de me dizer?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <div>
            <button
              type='submit'
              className='bg-accent py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-center items-center'>
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
