function farmDesktop() {

    let rows = document.querySelectorAll('#plunder_list tbody tr');

    let index = 0;

    let interval = setInterval(function () {
        if (index >= rows.length) {
            clearInterval(interval);
            return;
        }

        let row = rows[index];

        let secondCell = row.cells[1];

        if (!secondCell) {
            index++;
            return;
        }

        let seventhCell = row.cells[6];

        let ninthCell = row.cells[8];
        let tenthCell = row.cells[9];

        let img = secondCell.querySelector('img[src*="green.png"], img[src*="yellow.png"]');
        if (img) {
            let isGreen = img.src.includes('green.png');
            let isYellow = img.src.includes('yellow.png');

            if (isGreen) {
                let seventhData = seventhCell.textContent.trim();
                if (seventhData === '?' || seventhData === '0') {
                    clickLink(ninthCell, 'a.farm_icon_a');
                } else if (seventhData === '1') {
                    clickLink(tenthCell, 'a.farm_icon_b');
                }
            } else if (isYellow) {
                let seventhData = seventhCell.textContent.trim();
                if (seventhData === '?') {
                    clickLink(tenthCell, 'a.farm_icon_b');
                }
            }
        }

        index++;
    }, 250);

}

function farmMobile() {
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let index = 0;

    let interval = setInterval(function () {
        if (index >= rows.length) {
            clearInterval(interval);
            return;
        }

        let firstRow = rows[index];
        let thirdRow = rows[index + 2];

        let img = firstRow.querySelector('img[src*="green.png"], img[src*="yellow.png"]');
        if (img) {
            let isGreen = img.src.includes('green.png');
            let isYellow = img.src.includes('yellow.png');

            if (isGreen) {
                let wallData = thirdRow.cells[0].textContent.trim();
                if (wallData === '?' || wallData === '0') {
                    clickLink(firstRow, 'a.farm_icon_a');
                } else if (wallData === '1') {
                    clickLink(firstRow, 'a.farm_icon_b');
                }
            } else if (isYellow) {
                let wallData = thirdRow.cells[0].textContent.trim();
                if (wallData === '?') {
                    clickLink(firstRow, 'a.farm_icon_b');
                }
            }
        }

        index += 3;
    }, 250);
}

function clickLink(cell, selector) {
    let link = cell.querySelector(selector);
    if (link) {
        link.click();
    }
}

function farm() {
    if (document.querySelector('#mobileHeader')) {
        farmMobile();
    } else {
        farmDesktop();
    }
}
farm();