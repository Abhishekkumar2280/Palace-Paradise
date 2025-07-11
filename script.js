const items = [
  { name: "Paneer Butter Masala", price: 200 },
  { name: "Chicken Biryani", price: 250 },
  { name: "Veg Thali", price: 180 },
  { name: "Dal Tadka", price: 150 },
  { name: "Butter Naan", price: 40 },
  { name: "Tandoori Roti", price: 30 },
  { name: "Cold Drink", price: 50 },
  { name: "Gulab Jamun", price: 60 },
  { name: "Fried Rice", price: 160 },
  { name: "Manchurian", price: 170 }
];

const menuTable = document.getElementById("menu");

// Populate menu table with items and quantity inputs
items.forEach((item, index) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.name}</td>
    <td>₹${item.price}</td>
    <td><input type="number" id="qty-${index}" value="0" min="0"></td>
  `;

  menuTable.appendChild(row);
});

function calculateTotal() {
  let total = 0;

  items.forEach((item, index) => {
    const qtyInput = document.getElementById(`qty-${index}`);
    const qty = parseInt(qtyInput.value) || 0;
    total += qty * item.price;
  });

  const discountInput = document.getElementById("discount");
  const discount = parseFloat(discountInput.value) || 0;
  const discountedTotal = total - (total * discount / 100);

  document.getElementById("summary").innerHTML = `
    <strong>Total: ₹${total.toFixed(2)}</strong><br>
    <strong>Discount: ${discount}%</strong><br>
    <strong>Final Amount: ₹${discountedTotal.toFixed(2)}</strong>
  `;
}
