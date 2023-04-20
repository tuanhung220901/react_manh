import { InputTypeModel, SubNavModel } from "models";

export const listSubNav: SubNavModel[] = [
  {
    href: "",
    title: "Account",
  },
];

export const offerListNav: SubNavModel[] = [
  {
    href: "/account",
    title: "Account",
  },
  {
    href: "account/offers",
    title: "Offers",
  },
];

export const offerListDetailNav: SubNavModel[] = [
  {
    href: "/account",
    title: "Account",
  },
  {
    href: "/account/offers",
    title: "Offers",
  },
  {
    href: "/",
    title: "Detail Offer",
  },
];

export const biddingListDetailNav: SubNavModel[] = [
  {
    href: "/account",
    title: "Account",
  },
  {
    href: "/account/offers",
    title: "Offers",
  },
  {
    href: "/",
    title: "Detail Bidding",
  },
];

export const listNavAccount = [
  { title: "Personal information", href: "/account" },
  {
    title: "Offer list",
    href: "/account/offers",
  },
];
