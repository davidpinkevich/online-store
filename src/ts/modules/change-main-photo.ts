const changeMainPhoto = () => {
  const mainPhoto: HTMLImageElement = document.querySelector(
    ".good-item__photo"
  ) as HTMLImageElement;
  const otherPhotos: NodeListOf<HTMLImageElement> = document.querySelectorAll(
    ".good-item__photo-small"
  );

  const removeActiveClass = () => {
    otherPhotos.forEach((photo) => {
      photo.classList.remove("good-item__photo-active");
    });
  };

  otherPhotos.forEach((photo) => {
    photo.addEventListener("click", () => {
      mainPhoto.src = photo.src;
      removeActiveClass();
      photo.classList.add("good-item__photo-active");
    });
  });
};

export default changeMainPhoto;
