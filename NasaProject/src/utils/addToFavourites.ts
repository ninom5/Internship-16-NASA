import Swal from "sweetalert2";

export const addToFavorites = (location: any) => {
  const favoriteLocations: string[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  Swal.fire({
    title: "Add to Favorites?",
    text: `Do you want to add ${location} to your favorites list?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, add to favorites!",
    cancelButtonText: "No, don't add it",
  }).then((result) => {
    if (result.isConfirmed) {
      if (favoriteLocations.includes(location)) {
        Swal.fire(
          "Already Added",
          `${location} is already in your favorites.`,
          "info"
        );
      } else {
        favoriteLocations.push(location);
        localStorage.setItem("favorites", JSON.stringify(favoriteLocations));
        Swal.fire(
          "Added!",
          `${location} has been added to your favorites.`,
          "success"
        );
      }
    } else {
      Swal.fire(
        "Cancelled",
        `${location} was not added to your favorites.`,
        "info"
      );
    }
  });
};
