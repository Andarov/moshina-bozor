import toast from "react-hot-toast";

export const notification = (msg = "Muvaffaqiyatli", icon = "🔥") => {
  toast(msg + "!", {
    icon,
    position: "bottom-center",
    style: {
      background: "#333",
      borderRadius: "8px",
      padding: "6px 8px",
      color: "#fff",
      fontSize: "14px",
      fontWeight: "medium",
    },
  });
};
