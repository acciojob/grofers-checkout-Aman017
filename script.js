const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0;
    });

    // Check if the `#ans` element exists, if not, create it
    let ansDiv = document.querySelector("#ans");
    if (!ansDiv) {
        ansDiv = document.createElement("div");
        ansDiv.id = "ans";
        document.body.appendChild(ansDiv);
    }

    // Set the total price inside `#ans`
    ansDiv.textContent = `Rs ${total.toFixed(2)}`;
};

getSumBtn.addEventListener("click", getSum);
