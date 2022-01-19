import { useContext } from "react";
import { AdminContext } from "../contexts/adminAuth/index";

export const adminAuth = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");

    }
    return context;
}