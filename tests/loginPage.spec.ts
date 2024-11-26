import { Page,Browser,test,expect } from "@playwright/test";
import { LoginPage } from '../pageObejct/loginPage';
import * as testData from '../utils/testData.json';
const data = testData;
//require('../pageObejct/LoginPage')

test('login test',async({page})=>{


const login= new LoginPage(page);
await login.logToAE(testData.name,testData.email,testData.password);

});


