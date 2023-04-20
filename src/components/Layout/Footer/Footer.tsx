import { IconFacebook, IconLinkedin, IconYoutube, LogoFooter } from "assets/images";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { footerList } from "./data";

function Footer() {
  const { t } = useTranslation("footer");
  return (
    <Fragment>
      <div className="bg-text-7">
        <div className="layout-padding flex flex-col justify-between gap-y-14 bg-text-7 py-14 text-white tablet:py-20 laptop:flex-row laptop:items-center laptop:gap-y-0 laptop:py-24">
          <div>
            <div className="mt-6">
              Copyright ©2022 <span className="font-bold">N7</span>. All Rights Reserved.
              <br /> Developed by TekLabs
            </div>
            <div className="mt-6 flex gap-x-12">
              <IconFacebook />
              <IconLinkedin />
              <IconYoutube />
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-14 laptop:w-auto laptop:grid-cols-4">
            {footerList.map((footerItem, footerItemIndex) => (
              <div key={footerItemIndex}>
                <div className="text-lg font-bold">{footerItem.title}</div>
                <div>
                  {footerItem.children.map((footerItemChild, footerItemChildIndex) => (
                    <div key={footerItemChildIndex} className="mt-4">
                      {footerItemChild.path ? (
                        <Link to={footerItemChild.path} className="block hover:opacity-80">
                          {footerItemChild.title}
                        </Link>
                      ) : (
                        <div>{footerItemChild.title}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Footer;
