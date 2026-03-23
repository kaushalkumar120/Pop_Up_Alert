// Sum function
function sum(a, b) {
    return a + b;
}

// Calculate button
document.getElementById("btn").addEventListener("click", function () {
    let x = 10;
    let y = 20;

    let total = sum(x, y);

    console.log("Total:", total);

    document.getElementById("result").innerText = "Total is: " + total;
});

// Alert button
document.getElementById("alertBtn").addEventListener("click", function () {
    alert("Second Button Clicked!");
});

// Page load alert
window.onload = function () {
    alert("Welcome to JavaScript Project!");
};