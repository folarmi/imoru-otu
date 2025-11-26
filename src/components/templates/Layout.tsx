/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../organisms";
import { useSectionRefs } from "@/hooks/useSectionRefs";
import { useState } from "react";

const Layout = () => {
  const { sectionRefs, joinUsRef } = useSectionRefs();
  const [bankAccountModal, setBankAccountModal] = useState(false);

  const toggleBankAccountModal = () => {
    setBankAccountModal(!bankAccountModal);
  };

  return (
    <div className="bg-primary px-6">
      <Header
        sectionRefs={sectionRefs as any}
        toggleBankAccountModal={toggleBankAccountModal}
        bankAccountModal={bankAccountModal}
      />
      <main className="">
        <Outlet
          context={{
            joinUsRef,
            toggleBankAccountModal,
            bankAccountModal,
            sectionRefs,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
