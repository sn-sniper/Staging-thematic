import SongsFilter from "@components/ui/SongsFilter/SongsFilter";
import SongsPreview from "@components/songs/SongsPreview";
import "@styles/SongsPage.css";

const Songs = () => {
  return (
    <div className="w-full h-screen flex justify-center gap-4 songs">
      <SongsFilter />
      <SongsPreview />
    </div>
  );
};

export default Songs;
