import {
  authOptions,
  getAppDirAuthSession,
  getServerAuthSession,
} from "~/server/auth";
import SessionHandler from "./session";
const LoginComponent = async () => {
  const session = await getAppDirAuthSession();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-200">
      <SessionHandler session={session} />
    </div>
  );
};

export default LoginComponent;
