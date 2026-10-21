import {APIRequestContext} from '@playwright/test';
export class apiHelper{
    private readonly request :APIRequestContext;
    private readonly baseURL:string;

    constructor(request:APIRequestContext,baseURL:string){
        this.request=request;
        this.baseURL=baseURL;
    }
    //helper methods
    //GET
    async get(endPoint:string,headers?:Record<string,string>){

    //    let response= await this.request.get(`${this.baseURL}${endPoint}`
         let response = await this.request.get(`${this.baseURL}${endPoint}`,{

        headers:headers //right si  de header coming from PW ->h should be small
    });

     return {
            status: response.status(),
            statusText:response.statusText(),
            body:await response.json()

            
        }
}

  //POST
    async post(endPoint: string,data:object, headers?: Record<string, string>) {
        // let response = await this.request.post(`${this.baseURL}${endPoint}`, {
        let response = await this.request.post(`${this.baseURL}${endPoint}`,{
            headers: headers,
            data:data
        });
        console.log(await response.json(), response.status());
        return {
            status: response.status(),
            statusText:response.statusText(),
            body: await response.json()
        }
    }
    //PUT
    async put(endPoint: string,data:object, headers?: Record<string, string>) {
        // let response = await this.request.put(`${this.baseURL}${endPoint}`, {
            let response = await this.request.put(`${this.baseURL}${endPoint}`,{
            headers: headers,
            data:data
        });
    //  console.log(await response.json(), response.status());
        return {
            status: response.status(),
            statusText:response.statusText(),
            body: await response.json()
           
        }
    }
    //delete
    async delete(endPoint: string, headers?: Record<string, string>) {
        let response = await this.request.delete(`${this.baseURL}${endPoint}`, {
            headers: headers,
           
        });
        console.log(response.status());
        return {
            status: response.status(),
            // body: await response.json()
        }
    }
}