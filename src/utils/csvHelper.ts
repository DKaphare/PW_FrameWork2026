//creste a generic method which will help to take the data from csv
//download liberary from terminal command ->npm run csv-parse -in package.json CSV-parse got added with recent version number
import fs from 'fs' ;//File system ->its like file reader in POM;
import {parse} from 'csv-parse/sync';  //all thred should wotk in sync/parallel mode so used sync

export class csvHelper {

    static readCsv(filePath: string): Record<string, string>[] {
         return parse(fs.readFileSync(filePath, 'utf-8'), {
            columns: true, //first row as headers
            skip_empty_lines: true,
            trim: true,
            relax_column_count: true,
        }) as Record<string, string>[];
    }
}

// 1:37
