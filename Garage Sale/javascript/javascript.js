let basketQty = 0; 
let price1, price2, price3, price4, price5 = 0; 
let qty1, qty2, qty3, qty4, qty5 = 0;
let quantity = 0, total = 0;
let n1 = ""; let n2 = ""; let n3 = ""; let n4 = ""; let n5 = "";
        
    function addToCart(divName){ //adding items to the cart and validating as well
            var idName = divName;
            var count = document.getElementById('basket').innerHTML;
            if(!count.includes(idName))
            {
                var qty = parseInt(prompt("Enter the quantity", "0"));
                if(qty>0 && qty<99999)
                {
                    basketQty++;
                    if(idName == 't1')
                    {
                        qty1 = qty;
                        sessionStorage.setItem("qty1StoredValue", qty1);
                        item1();
                    }
                    else if(idName == 't2')
                    {
                        qty2 = qty;
                        sessionStorage.setItem("qty2StoredValue", qty2);
                        item2();
                    }
                    else if(idName == 't3')
                    {
                        qty3 = qty;
                        sessionStorage.setItem("qty3StoredValue", qty3);
                        item3();
                    }
                    else if(idName == 't4')
                    {
                        qty4 = qty;
                        sessionStorage.setItem("qty4StoredValue", qty4);
                        item4();
                    }
                    else if(idName == 't5')
                    {
                        qty5 = qty;
                        sessionStorage.setItem("qty5StoredValue", qty5);
                        item5();
                    }
                }
                else{
                    alert('Please enter a number!');
                }
            }
            else{
                alert('Item already exists in the basket!');
            }
    }
        
    function item1(){
                price1 = 100;
                sessionStorage.setItem("price1StoredValue", price1);
                document.getElementById('basket').innerHTML += (`
                    <div class="rightProduct" id="rt1" style="justify-content: center;">
                        <img src="images/chair.jpg" alt="Chair"/>
                        <h2 id="price" style="font-size: 20px;">Vintage Chair</h2>
                        <p style="font-size: 15px; font-family: 'Open Sans', sans-serif;"> Cost: $100<br/>Quantity: ${qty1}</p>
                        <p><button class="Delete" onclick="deleteFun('rt1')">Delete</button></p>
                    </div>
                    `);
    }
    function item2(){
                price2 = 500;
                sessionStorage.setItem("price2StoredValue", price2);
                document.getElementById('basket').innerHTML += (`
                    <div class="rightProduct" id="rt2" style="justify-content: center;">
                        <img src="images/closet.jpg" alt="Closet"/>
                        <h2 id="price" style="font-size: 20px;">Vintage Closet</h2>
                        <p style="font-size: 15px; font-family: 'Open Sans', sans-serif;"> Cost: $500<br/>Quantity: ${qty2}</p>
                        <p><button class="Delete" onclick="deleteFun('rt2')">Delete</button></p>
                    </div>  
                `);
    }
    function item3(){
                price3 = 400;
                sessionStorage.setItem("price3StoredValue", price3);
                document.getElementById('basket').innerHTML += (`
                    <div class="rightProduct" id="rt3" style="justify-content: center;">
                        <img src="images/calender.jpg" alt="Calender"/>
                        <h2 id="price" style="font-size: 20px;">Antique Calender</h2>
                        <p style="font-size: 15px; font-family: 'Open Sans', sans-serif;"> Cost: $400<br/>Quantity: ${qty3}</p>
                        <p><button class="Delete" onclick="deleteFun('rt3')">Delete</button></p>
                    </div>  
                `);
    }
    
    function item4(){
                price4 = 150;
                sessionStorage.setItem("price4StoredValue", price4);
                document.getElementById('basket').innerHTML += (`
                    <div class="rightProduct" id="rt4" style="justify-content: center;">
                        <img src="images/fan.jpg" alt="Fan"/>
                        <h2 id="price" style="font-size: 20px;">Antique Fan</h2>
                        <p style="font-size: 15px; font-family: 'Open Sans', sans-serif;"> Cost: $150<br/>Quantity: ${qty4}</p>
                        <p><button class="Delete" onclick="deleteFun('rt4')">Delete</button></p>
                    </div>  
                `);
    }
    function item5(){
                price5 = 450;
                sessionStorage.setItem("price5StoredValue", price5);
                document.getElementById('basket').innerHTML += (`
                    <div class="rightProduct" id="rt5" style="justify-content: center;">
                        <img src="images/phone.jpg" alt="Phone"/>
                        <h2 id="price" style="font-size: 20px;">Antique Telephone</h2>
                        <p style="font-size: 15px; font-family: 'Open Sans', sans-serif;"> Cost: $450<br/>Quantity: ${qty5}</p>
                        <p><button class="Delete" onclick="deleteFun('rt5')">Delete</button></p>
                    </div>  
                `);
    }

    function deleteFun(tagId){ //deleting item from the basket and setting the global price variable of that item to zero
            document.getElementById(tagId).remove();
            basketQty--;
            if(tagId=='rt1'){
                price1=0;
                sessionStorage.setItem("price1StoredValue", price1);
            }
            else if(tagId=='rt2'){
                price2=0;
                sessionStorage.setItem("price2StoredValue", price2);
            }
            else if(tagId=='rt3'){
                price3=0;
                sessionStorage.setItem("price3StoredValue", price3);
            }
            else if(tagId=='rt4'){
                price4=0;
                sessionStorage.setItem("price4StoredValue", price4);
            }
            else if(tagId=='rt5'){
                price5=0;
                sessionStorage.setItem("price5StoredValue", price5);
            }
    }

    function checkout(){
            if(basketQty == 0)
            {
                alert('Basket is Empty');
            }
            else{

                if(document.contains(document.getElementById('rt1'))){
                    total = total + (price1*qty1);
                    n1 = "Vintage Chair"; // giving name of the item
                    sessionStorage.setItem("n1StoredValue", n1);
                }   
                if(document.contains(document.getElementById('rt2'))){
                    total = total + (price2*qty2);
                    n2 = "Vintage Closet";
                    sessionStorage.setItem("n2StoredValue", n2);
                }  
                if(document.contains(document.getElementById('rt3'))){
                    total = total + (price3*qty3);
                    n3 = "Antique Calender";
                    sessionStorage.setItem("n3StoredValue", n3);
                }  
                if(document.contains(document.getElementById('rt4'))){
                    total = total + (price4*qty4);
                    n4 = "Antique Fan";
                    sessionStorage.setItem("n4StoredValue", n4);
                }  
                if(document.contains(document.getElementById('rt5'))){
                    total = total + (price5*qty5);
                    n5 = "Antique Telephone";
                    sessionStorage.setItem("n5StoredValue", n5);
                }

                quantity = basketQty; // total basket quantity
                total = total + ((total * 13)/100); // after gst 13%gst

                sessionStorage.setItem("qtyStoredValue", quantity);
                sessionStorage.setItem("totalStoredValue", total);

                window.location.href = "formPage.html"; // form page
            }
    }

    function submitFun(){
                let total1 = sessionStorage.getItem("totalStoredValue");
                let n1_1 = sessionStorage.getItem("n1StoredValue");
                let n2_2 = sessionStorage.getItem("n2StoredValue");
                let n3_3 = sessionStorage.getItem("n3StoredValue");
                let n4_4 = sessionStorage.getItem("n4StoredValue");
                let n5_5 = sessionStorage.getItem("n5StoredValue");
                let price1_1 = sessionStorage.getItem("price1StoredValue");
                let price2_2 = sessionStorage.getItem("price2StoredValue");
                let price3_3 = sessionStorage.getItem("price3StoredValue");
                let price4_4 = sessionStorage.getItem("price4StoredValue");
                let price5_5 = sessionStorage.getItem("price5StoredValue");
                let qty1_1 = sessionStorage.getItem("qty1StoredValue");
                let qty2_2 = sessionStorage.getItem("qty2StoredValue");
                let qty3_3 = sessionStorage.getItem("qty3StoredValue");
                let qty4_4 = sessionStorage.getItem("qty4StoredValue");
                let qty5_5 = sessionStorage.getItem("qty5StoredValue");
                let quantity1 = sessionStorage.getItem("qtyStoredValue");

                let name = document.getElementById('name').value;
                let email = document.getElementById('email').value;
                let creditCardNumber = document.getElementById('creditCardNumber').value;
                let creditCredentials = document.getElementById('monthYear').value; 
                let dashCount = 0;
                let tempCardNumber = "";

                //credit card number
                for(let i = 0; i < creditCardNumber.length; i++)
                {
                    if(creditCardNumber[i] == '-' && dashCount <3)
                    dashCount++
                    else if(creditCardNumber[i] != '-' && dashCount == 3)
                    {
                        tempCardNumber += creditCardNumber[i];
                    }
                }

                if(name == "" && email == "")
                {
                    alert('Fields are empty');
                }   
                else{
                    if(emailValidate(email))
                    {
                        if(creditCardValidate(creditCardNumber, creditCredentials))
                        {
                            let donation = total1 * 0.1; // 10%
                            if(donation > 10)
                            total1 += donation;
                            else
                            {total += 10; donation = 10;}

                            //Generating bill in SMALL WINDOW IN A TABLE
                            smallWindow = window.open('','', 'width=600, height=300');
                            smallWindow.document.write(`<p style="font-size: 15px; font-family: 'Open Sans', sans-serif;">You have ordered the following things:<br/>`);
                            smallWindow.document.write(`<table style="border-style: solid; border-width: thin;"><tr><th>Item Name</th><th>Cost</th><th>Quantity</th></tr>`); //heading of the table
                                if(n1_1!=""){
                                    smallWindow.document.write(`<tr><td>${n1_1}</td><td>${price1_1}</td><td>${qty1_1}</td></tr>`);
                                }   
                                if(n2_2!=""){
                                    smallWindow.document.write(`<tr><td>${n2_2}</td><td>${price2_2}</td><td>${qty2_2}</td></tr>`);
                                }  
                                if(n3_3!=""){
                                    smallWindow.document.write(`<tr><td>${n3_3}</td><td>${price3_3}</td><td>${qty3_3}</td></tr>`);
                                }  
                                if(n4_4!=""){
                                    smallWindow.document.write(`<tr><td>${n4_4}</td><td>${price4_4}</td><td>${qty4_4}</td></tr>`);
                                }  
                                if(n5_5!=""){
                                    smallWindow.document.write(`<tr><td>${n5_5}</td><td>${price5_5}</td><td>${qty5_5}</td></tr>`);
                                }
                            smallWindow.document.write(`</table><br/><br/>`);
                                smallWindow.document.write(`<p>
                                Name = ${name}<br/>
                                Email = ${email}<br/>
                                Credit Card Number = xxxx-xxxx-xxxx-${tempCardNumber}<br/>
                                Total Number of Items Ordered = ${quantity1}<br/>
                                Donation = $${donation}<br/>
                                Total @ 13% GST = $${total1}<br/> 
                                </p>`);
                                sessionStorage.clear(); // clearing
                        }
                        else
                        {
                            alert('Enter Correct Credit Card Credentials');
                        }
                    }
                    else{
                        alert('Enter Correct Email');
                    }

                    
                }                
    }

    function emailValidate(email)
    {
        let temp = email;
        let atTheRateChar = 0;
        let dotCom = 0;
        let atTheRateCharCount = 0;
        let dotComCount = 0;
        let index = 0;

        for(let i = 0; i < temp.length; i++)
        {
            if(temp[i] == '@')
            {atTheRateChar = i; atTheRateCharCount++;}

            if(temp[i] == '.')
            {dotCom = i; dotComCount++; index = i;}
        }
        if(atTheRateCharCount == 1 && dotComCount == 1 && atTheRateChar<dotCom)
            return 1;
        else
        return 0;
    }

    function creditCardValidate(creditCardNumber, creditCredentials){
        let number = creditCardNumber;
        let dashCount = 0;
        let length = 0; //19

        let redFlag = 0;

        for(let i = 0; i < number.length; i++)
        {
            if(number[i] == '-')
            dashCount++;

            length++;
        }

        let credentials = creditCredentials;
        let month = "";
        let year = "";
        let flag = 0;

        for(i = 0; i < credentials.length; i++) // separating out month and year 
        {
            if(credentials[i]!='/' && flag == 0)
            {
                month += credentials[i];
            }
            else if (credentials[i] == '/')
            flag = 1;
            else
            year += credentials[i]; //string
            
        }

        if(month === "JAN" || month === "MAY" || month === "FEB" || month === "MAR" || month === "APR" || month === "JUN" || month === "JUL" || month === "AUG" || month === "SEP" || month === "OCT" || month === "NOV" || month === "DEC")
        redFlag = 0;
        else
        redFlag = 1;

        year = parseInt(year); 

        if(year > 999 && year < 9999)
        redFlag = 0;
        else
        redFlag = 1;

        if(length == 19 && dashCount == 3 && redFlag == 0)
        return 1;
        else
        return 0; 
    }