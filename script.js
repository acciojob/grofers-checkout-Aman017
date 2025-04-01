const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
function calculateTotalPrice() {
    const prices = document.querySelectorAll(".price");
    let total = 0;
    
    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0;
    });
    
    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    const totalLabelCell = document.createElement("td");
    const totalCell = document.createElement("td");

    totalLabelCell.textContent = "Total Price:";
    totalLabelCell.style.fontWeight = "bold";
    totalCell.textContent = `Rs ${total.toFixed(2)}`;
    totalCell.style.fontWeight = "bold";

    totalRow.appendChild(totalLabelCell);
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
}

calculateTotalPrice();

};

getSumBtn.addEventListener("click", getSum);

