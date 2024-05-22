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

        let img = secondCell.querySelector('img[src*="green"], img[src*="yellow"]');
        if (img) {
            let isGreen = img.src.includes('green');
            let isYellow = img.src.includes('yellow');

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

    let rows = Array.from(document.querySelectorAll('#plunder_list tbody tr'));
    let index = 1;

    let interval = setInterval(function () {
        if (index >= rows.length) {
            clearInterval(interval);
            return;
        }

        let firstRow = rows[index];
        let thirdRow = rows[index + 2];

        let img = firstRow.querySelector('img[src*="green"], img[src*="yellow"]');

        if (img) {
            let isGreen = img.src.includes('green');
            let isYellow = img.src.includes('yellow');

            if (isGreen) {

                let wallData = firstRow.cells[1].textContent.trim()[0];

                if (wallData === '?' || wallData === '0') {
                    clickLink(thirdRow.cells[0], 'a.farm_icon_a');
                } else if (wallData === '1') {
                    clickLink(thirdRow.cells[0], 'a.farm_icon_b');
                }
            } else if (isYellow) {

                let wallData = firstRow.cells[1].textContent.trim()[0];

                if (wallData === '?') {
                    clickLink(thirdRow.cells[0], 'a.farm_icon_b');
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