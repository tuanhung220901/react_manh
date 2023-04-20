import { Outlet } from "react-router";

function AccountLayout() {
  return (
    <div className="mt-28 tablet:mt-32 tablet:mb-32">
      <div className="mt-10 flex-1 tablet:mt-0">
        <Outlet />
      </div>
    </div>
  );
}

export default AccountLayout;
