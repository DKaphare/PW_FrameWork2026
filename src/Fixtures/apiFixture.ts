import {test as baseTest} from "@playwright/test"
import {APIRequestContext} from '@playwright/test';
import { apiHelper } from "../api/apiHelper";
// import { request } from "";

//define the type of pageFixture

type APIFixtures={
    AH:apiHelper
};

export let test =baseTest.extend<APIFixtures>({
    AH:async({request},use)=>{
        let AH=new apiHelper(request,process.env.API_BASE_URL!);
        await use(AH);
    }
})
export {expect} from "@playwright/test";