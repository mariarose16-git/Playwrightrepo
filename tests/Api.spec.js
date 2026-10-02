import { test,expect } from "allure-playwright";
import { request } from "node:http";
test('GET request to fetch Users', async({request})=>{

    const response=await request.get('https://jsonplaceholder.typicode.com/users/1')
    expect(response.ok()).toBeTruthy();
    // for converting response code to json (then only you can print response code)
    const result= await response.json();
    console.log(result);
})

test.only('POST request to create User', async({request})=>{

    const response=await request.post('https://jsonplaceholder.typicode.com/users',{

    data:{
        name:'Deepak',
        email:'dp@gmail.com',

    }
    })
    expect(response.status()).toBe(201)
    // to validate name is there ie response body
    const result=await response.json();
    console.log(result);
})

//patch request - need to update user datail in partial format

test.only('Patch request update request partially',async({request})=>{

    const response=await request.patch('https://jsonplaceholder.typicode.com/users',{
        data:{
          name:'Maria'

        }
        
    })
})