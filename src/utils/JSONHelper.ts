
import fs from 'fs';

export class JSONHelper {
    static readJson(filePath: string): Record<string, string>[] {
        const jsonData=fs.readFileSync(filePath,'utf-8');
        return JSON.parse(jsonData);
    }
}