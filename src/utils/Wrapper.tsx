import { Suspense } from "react";

interface PropsType {
  children: React.ReactNode;
}

const Wrapper = ({ children }: PropsType) => {
  return <Suspense fallback={<p>Loaiding...</p>}>{children}</Suspense>;
};

export default Wrapper;
