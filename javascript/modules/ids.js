function handleButtonClick(event) {
  const categoryId = event.target.getAttribute("data-category");
  console.log("ID del tab activo:", categoryId);
}

export { handleButtonClick };
