function openDetails(id) {
    const product = products.find(p => p.id === id);

    localStorage.setItem("selectedProduct", JSON.stringify(product));

    window.location.href = "/details.html";
}