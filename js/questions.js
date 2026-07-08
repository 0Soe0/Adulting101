function categorySelectDropdown() {
  const categorySelect = document.getElementById("categorySelect");

  categorySelect.addEventListener("change", function() {
    const selectedValue = categorySelect.value;

    // optional: don't redirect if they pick "All categories"
    if (selectedValue === "all") {
      return;
    }

    window.location.href = "wip.html";
  });
}

categorySelectDropdown();