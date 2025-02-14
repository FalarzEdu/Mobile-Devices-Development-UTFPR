import { useRouter } from "expo-router";

export const handleLogin = (username: string, password: string, router: any) => {
    if (username === "Fulano" && password === "123") {
        router.push("/listing");
    }
}