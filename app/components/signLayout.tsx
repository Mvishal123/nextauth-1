import React from "react";

const SignLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen bg-blue-200 items-center justify-evenly">
      <div className="w-3/4 h-3/4 grid lg:grid-cols-2 grid-cols-1">
        <section className="relative bg-gradient-to-t from-blue-500 to-indigo-500">
          <img
            src={"./assets/img1.png"}
            alt=""
            className="absolute bottom-0 bg-contain z-10"
          />
          <img
            src={"./assets/cloud_1.png"}
            alt=""
            className="cloud_1"
          />
          <img
            src={"./assets/cloud_2.png"}
            alt=""
            className="cloud_2"
          />
        </section>
        <section className="bg-slate-100">{children}</section>
      </div>
    </main>
  );
};

export default SignLayout;
