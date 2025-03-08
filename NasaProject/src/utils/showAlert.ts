import Swal from "sweetalert2";

export const showAlert = async ({
  title = "Alert",
  message = "Something happened!",
  icon = "info",
  confirmButtonText = "OK",
  showCancelButton = false,
  cancelButtonText = "Cancel",
}: {
  title?: string;
  message: string;
  icon?: "success" | "error" | "warning" | "info" | "question";
  confirmButtonText?: string;
  showCancelButton?: boolean;
  cancelButtonText?: string;
}): Promise<boolean> => {
  const result = await Swal.fire({
    title,
    text: message,
    icon,
    confirmButtonText,
    showCancelButton,
    cancelButtonText,
  });

  return result.isConfirmed;
};
