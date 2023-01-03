export const copyURL = () => {
  const copyBtn = document.querySelector(".button__copy") as HTMLButtonElement;

  copyBtn.addEventListener("click", () => {
    const path = window.location.href;
    navigator.clipboard.writeText(path);
    copyBtn.innerHTML = "Copied";
    setTimeout(() => {
      copyBtn.innerHTML = "Copy";
    }, 1000);
  });
};
