import SideNavBar from "./feeds/SideNavBar";

let FeedLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideNavBar />
      {children}
    </div>
  );
};
export default FeedLayout;
