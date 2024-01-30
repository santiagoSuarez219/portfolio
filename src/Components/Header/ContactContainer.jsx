import { BiSolidEnvelope } from "react-icons/bi";
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

const ContactContainer = ({ text, icon: Icon }) => {
  return (
    <CopyToClipboard text={text}>
      <div
        className="flex items-center gap-2 md:gap-4 text-base md:text-lg lg:text-xl text-gray-color cursor-pointer mb-2"
        onClick={() => alertCopy()}
      >
        <div className="icon-container">
          <Icon className="text-green-color" />
        </div>
        <h3 className="hover:text-green-color transition-all">{text}</h3>
      </div>
    </CopyToClipboard>
  );
};
export default ContactContainer;
