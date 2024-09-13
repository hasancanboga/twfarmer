// Only works in HQ page
function findDiscounts() {
    let buildingRows = document.querySelectorAll('#buildings tr[id^="main_buildrow_"]');

    let discounts = [];

    buildingRows.forEach(row => {
        if (row.querySelector('.cost_wood') === null) return;
        let originalWood = parseInt(row.querySelector('.cost_wood').getAttribute('data-cost'));
        let originalStone = parseInt(row.querySelector('.cost_stone').getAttribute('data-cost'));
        let originalIron = parseInt(row.querySelector('.cost_iron').getAttribute('data-cost'));

        let discountWood = originalWood * 0.2;
        let discountStone = originalStone * 0.2;
        let discountIron = originalIron * 0.2;

        let totalDiscount = Math.floor(discountWood + discountStone + discountIron);

        discounts.push(`${row.id.replace('main_buildrow_', '')} ---> ${totalDiscount}`);
    });

    alert(discounts.join('\n'));
}

findDiscounts()
