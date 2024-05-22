javascript:

var rows = document.querySelectorAll('#plunder_list tbody tr');

var index = 0;

var interval = setInterval(function () {
    if (index >= rows.length) {
        clearInterval(interval);
        return;
    }

    var row = rows[index];

    var secondCell = row.cells[1];

    if (!secondCell) {
        index++;
        return;
    }

    var seventhCell = row.cells[6];

    var ninthCell = row.cells[8];
    var tenthCell = row.cells[9];

    var img = secondCell.querySelector('img[src*="green.png"], img[src*="yellow.png"]');
    if (img) {
        var isGreen = img.src.includes('green.png');
        var isYellow = img.src.includes('yellow.png');

        if (isGreen) {
            var seventhData = seventhCell.textContent.trim();
            if (seventhData === '?' || seventhData === '0') {
                clickLink(ninthCell, 'a.farm_icon_a');
            } else if (seventhData === '1') {
                clickLink(tenthCell, 'a.farm_icon_b');
            }
        } else if (isYellow) {
            var seventhData = seventhCell.textContent.trim();
            if (seventhData === '?') {
                clickLink(tenthCell, 'a.farm_icon_b');
            }
        }
    }

    index++;
}, 250);

function clickLink(cell, selector) {
    var link = cell.querySelector(selector);
    if (link) {
        link.click();
    }
}