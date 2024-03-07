import React from "react";

type Props = { childeren: React.ReactNode };

const AuthLayout = ({ childeren }: { childeren: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="p-1 bg-red-500 w-full">Auth NavBar</nav>
      {childeren}
    </div>
  );
};

export default AuthLayout;
