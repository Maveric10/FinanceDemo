import { atom } from "recoil";

export const IncomeDetailsAtom = atom({
  key: "incomeDetailsAtom",
  default: getIncomeDetails(),
});

export function getIncomeDetails(data = {}) {
  return {
    incomeType: data?.incomeType || "",
    incomeStatus: data?.incomeStatus || "",
    providerName: data?.providerName || "",
    accountRecieved: data?.accountRecieved || "",
    incomeDate: data?.incomeDate || "",
  };
}
