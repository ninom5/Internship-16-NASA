import React, { useEffect, useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { HeartOff } from "lucide-react";
import { confirmRemoveFavorite } from "@utils/confirmRemoveFavorite";
import { showAlert } from "@utils/showAlert";
import { icon } from "leaflet";

export const FavoriteLocations: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = async (location: string) => {
    const confirmed = await confirmRemoveFavorite(location);
    if (confirmed) {
      const updatedFavorites = favorites.filter((fav) => fav !== location);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      showAlert({
        title: "Success",
        message: `${location} removed from favorites`,
        icon: "success",
      });
    } else {
      showAlert({
        title: "Canceled",
        message: `${location} was not removed from favorites`,
        icon: "info",
      });
    }
  };

  return (
    <Card
      className="w-full max-w-md mx-auto mt-5 shadow-lg rounded-2xl bg-white"
      id="favorite-locations-list"
    >
      <CardContent>
        <Typography
          variant="h6"
          className="text-center font-bold text-gray-800"
        >
          Favorite Locations
        </Typography>
        {favorites.length === 0 ? (
          <Typography className="text-center text-gray-500 mt-2">
            No favorites yet.
          </Typography>
        ) : (
          <List>
            {favorites.map((location, index) => (
              <ListItem
                key={index}
                className="flex justify-between items-center border-b border-gray-200 py-2"
              >
                <ListItemText primary={location} className="text-gray-700" />
                <IconButton
                  onClick={() => removeFavorite(location)}
                  className="text-red-500"
                >
                  <HeartOff size={20} />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
};
