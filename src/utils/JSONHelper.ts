import fs from'fs';

export class JSONHelper{

   static readJson(filePath:string){
     return JSON.parse(fs.readFileSync(filePath,'utf-8')); //convert JS to object
  }
}
