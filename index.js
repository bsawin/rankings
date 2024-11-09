// Import the Cheerio library.
import * as cheerio from 'cheerio';

    const $ = await cheerio.fromURL('https://www.lavuelta.es/en/rankings/stage-4');

    const rankings = [];

    $(".rankingTables__wrapper").find('tr').each((i, row) => {
        const ranking = {};
        $(row).find('td').each((j,col) => {
            switch(j) {
                case 1:
                    ranking['riderName'] = $(col).text().trim();
                case 3:
                    ranking['riderNumber'] = $(col).text().trim();
                case 4:
                    ranking['teamName'] = $(col).text().trim();
                case 5:
                    ranking['riderTime'] = $(col).text().trim();
            };
        });
        rankings.push(ranking);
    });

    console.log(rankings);