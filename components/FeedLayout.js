import { useState } from "react";
import SideNavBar from "./feeds/SideNavBar";
import Modal from "./Modal";

let FeedLayout = ({ children }) => {
  const [urlModal, setUrlModal] = useState(false);

  const urlModalOpenFunc = () => {
    console.log("urlModal 값", urlModal);
    setUrlModal(!urlModal);
  };

  return (
    <>
      {urlModal ? (
        <div className="flex">
          {" "}
          <SideNavBar
            urlModal={urlModal}
            setUrlModal={setUrlModal}
            urlModalOpenFunc={urlModalOpenFunc}
          />
          <Modal
            urlModal={urlModal}
            setUrlModal={setUrlModal}
            urlModalOpenFunc={urlModalOpenFunc}
          />
        </div>
      ) : (
        <div className="flex">
          <SideNavBar
            urlModal={urlModal}
            setUrlModal={setUrlModal}
            urlModalOpenFunc={urlModalOpenFunc}
          />
          {children}
        </div>
      )}
    </>
  );
};
export default FeedLayout;
