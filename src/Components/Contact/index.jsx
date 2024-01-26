import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";

const Contact = ({ title, value, icon: Icon, link }) => {
  const alertCopy = () => {
    toast.success("Email copiado al portapapeles", {
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <article className="w-max grid justify-items-center">
      <div className="icon-container hover:bg-card-color/50 cursor-pointer">
        {title === "Email" ? (
          <CopyToClipboard text={value}>
            <Icon className="icons" onClick={() => alertCopy()} />
          </CopyToClipboard>
        ) : (
          <a href={link} target="blanck">
            <Icon className="icons" />
          </a>
        )}
        <Toaster />
      </div>
      <h3 className="text-2xl mt-4 mb-2">{title}</h3>
      <p className="font-light">{value}</p>
    </article>
  );
};
export default Contact;
