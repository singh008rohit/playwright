import { Locator ,Page,expect} from "@playwright/test";
 class LoginPage{

    private login: Locator;
    private name: Locator;
    private signin: Locator;
    private page:Page;
    private email:Locator
    private validateName:Locator;
    private validateEmail:Locator;
    private selectTitle:Locator;
    private password:Locator;

     constructor(page:Page) {  
    this.page=page;
        this.login = page.locator("a[href='/login']");
        this.name = page.getByPlaceholder('Name');
        this.email=page.locator("input[data-qa='signup-email']");
        this.signin = page.locator("button[data-qa='signup-button']");
        this.validateName=page.locator("id=name");
        this.validateEmail=page.locator("id=email");
        this.selectTitle =page.locator("id=uniform-id_gender1");
        this.password=page.getByLabel("password");
        
    }

    async logToAE(name:string,email:string,password:string) {
       await this.page.goto("https://automationexercise.com/");
        await this.login.click();
        await this.name.fill(name); // Changed to `fill` to enter text in input
        await this.email.fill(email);
        await this.signin.click();
expect(await this.validateName.inputValue()).toBe(name);
expect(await this.validateEmail.inputValue()).toBe(email);
await this.selectTitle.click();
await this.password.fill(password);

        
    }
}7

export { LoginPage };
