import { Slot, useRouter } from "expo-router";
import { useEffect, useState } from "react";

const isLoggedIn = true;

export default function RootLayout() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (isLoggedIn) {
      router.replace("/app/HomeScreen");
    } else {
      router.replace("/auth/LogInScreen");
    }
  }, [ready]);

  return <Slot />;
}