import Swal from "sweetalert2";

export const confirmRemoveFavorite = async (
  location: string
): Promise<boolean> => {
  const result = await Swal.fire({
    title: "Remove Favorite?",
    text: `Are you sure you want to remove ${location} from favorites?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, remove it",
    cancelButtonText: "No, keep it",
  });

  return result.isConfirmed;
};
