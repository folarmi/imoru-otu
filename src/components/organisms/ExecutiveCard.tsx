// interface ExecutiveCardProps {
//   id?: string | number;
//   img?: string | null;
//   execName: string;
//   name: string; // full name
//   bio: string;
// }

// export const ExecutiveCard: React.FC<ExecutiveCardProps> = ({
//   id,
//   img,
//   execName,
//   name,
//   bio,
// }) => {
//   // extract first & last initial
//   const getInitials = (fullName: string) => {
//     if (!fullName) return "";

//     const parts = fullName.trim().split(" ");

//     if (parts.length === 1) {
//       return parts[0].charAt(0).toUpperCase(); // single name
//     }

//     return (
//       parts[0].charAt(0).toUpperCase() +
//       parts[parts.length - 1].charAt(0).toUpperCase()
//     );
//   };

//   const initials = getInitials(execName);

//   const avatarFallback = (
//     <div
//       className="w-full h-full flex items-center justify-center
//       bg-gradient-to-br from-green_200 via-green_300 to-green_400
//       text-white font-bold text-5xl rounded-t-2xl"
//     >
//       {initials}
//     </div>
//   );

//   const hasImage = img && img.trim() !== "";

//   return (
//     <div key={id} className="text-center md:text-left">
//       <div className="w-full h-[296px] rounded-t-2xl overflow-hidden mb-4">
//         {hasImage ? (
//           <img src={img!} alt={name} className="w-full h-full object-cover" />
//         ) : (
//           avatarFallback
//         )}
//       </div>

//       <p className="text-gray_900 font-medium text-lg md:text-xl pb-1">
//         {execName}
//       </p>

//       <p className="playfair text-lg text-green_300 pb-2">{name}</p>

//       <p className="text-sm text-green_200 leading-relaxed text-justify">
//         {bio}
//       </p>
//     </div>
//   );
// };

interface ExecutiveCardProps {
  id?: string | number;
  img?: string | null;
  execName: string;
  name: string; // full name including titles like Mrs, Dr, etc.
  bio: string;
}

export const ExecutiveCard: React.FC<ExecutiveCardProps> = ({
  id,
  img,
  execName,
  name,
  bio,
}) => {
  const getInitials = (fullName: string) => {
    if (!fullName) return "";

    const titlesToIgnore = [
      "mr",
      "Mr",
      "mrs",
      "ms",
      "miss",
      "dr",
      "prof",
      "pastor",
      "rev",
    ];
    const parts = fullName
      ?.trim()
      ?.split(/\s+/)
      ?.filter((word) => !titlesToIgnore.includes(word.toLowerCase())); // remove titles

    if (parts.length === 0) return "";

    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    }

    const first = parts[0].charAt(0).toUpperCase();
    const last = parts[parts.length - 1].charAt(0).toUpperCase();

    return first + last;
  };

  const initials = getInitials(execName);

  const avatarFallback = (
    <div
      className="w-full h-full flex items-center justify-center
      bg-gradient-to-br from-green_200 via-green_300 to-green_400
      text-white font-bold text-5xl rounded-t-2xl"
    >
      {initials}
    </div>
  );

  const hasImage = img && img.trim() !== "";

  return (
    <div key={id} className="text-center md:text-left">
      <div className="w-full h-[296px] rounded-t-2xl overflow-hidden mb-4">
        {hasImage ? (
          <img src={img!} alt={name} className="w-full h-full object-cover" />
        ) : (
          avatarFallback
        )}
      </div>

      <p className="text-gray_900 font-medium text-lg md:text-xl pb-1">
        {execName}
      </p>

      <p className="playfair text-lg text-green_300 pb-2">{name}</p>

      <p className="text-sm text-green_200 leading-relaxed text-justify">
        {bio}
      </p>
    </div>
  );
};
