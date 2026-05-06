import { Redirect } from "expo-router";

export default function App() {
  const userData = {
    token: "asdsdasd",
    name: "Teste",
  };

  const userDataNull = null;

  if (userDataNull) {
    return <Redirect href={"/(private)/home"} />;
  }
  return <Redirect href={"/login"} />;
}
