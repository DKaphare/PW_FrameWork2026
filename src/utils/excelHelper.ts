import xlsx from 'xlsx';//which is not having {} means its module

export class excelHelper{
    static readExcel(filepath:string,sheetName:string){
    const workbook=xlsx.readFile(filepath); //pointing to whole workbook
  const sheet=  workbook.Sheets[sheetName];//bcoz data is in the form of array so usd,[]
  return  xlsx.utils.sheet_to_json<Record<string,string>>(sheet,{defval: ""}) //transfer data into sheet

}
}