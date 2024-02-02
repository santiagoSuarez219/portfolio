import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

const alertCopy = () => {
  toast.success("Email copiado al portapapeles", {
    style: {
      background: "#333",
      color: "#fff",
      fontSize: "1rem",
    },
  });
};

const ContactContainer = ({ text, icon: Icon, value, link }) => {
  return (
    <>
      {value == "correo" ? (
        <CopyToClipboard text={text}>
          <div
            className="flex items-center mt-4 gap-2 text-base md:text-lg lg:text-xl text-gray-color cursor-pointer"
            onClick={() => alertCopy()}
          >
            <div className="icon-container">
              <Icon className="text-green-color" />
            </div>
            <h3 className="lg:hover:text-green-color transition-all">{text}</h3>
          </div>
        </CopyToClipboard>
      ) : (
        <CopyToClipboard text={text}>
          <a
            href={link}
            target="_blanck"
            className="flex mt-2 items-center gap-2 text-base md:text-lg lg:text-xl text-gray-color cursor-pointer"
          >
            <div className="icon-container">
              <Icon className="text-green-color" />
            </div>
            <h3 className="lg:hover:text-green-color transition-all">{text}</h3>
          </a>
        </CopyToClipboard>
      )}
    </>
  );
};

export default ContactContainer;
