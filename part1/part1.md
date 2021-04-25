Part 1a
    1. values added:  20
    2. final result:  20
    3. values added: 20
    4. ReferenceError: result is not defined - Let variable "result" is out of scope as it is declared within the if block
    5. TypeError: Assignment to constant variable. - Constant variables can't be reassigned
    6. TypeError: Assignment to constant variable. - Constant variables can't be reassigned 
Part 1b
    1. prints 3. Var is local to the function scope and within the for loop is incremented 3 times from it's initial value of zero.
    2. prints 150 because the discount of 0.5 is multiplied to the last value in price (300 * 0.5) to get 150
    3. prints 150 for same reason as number 2. The value of finalPrice is set in the last loop of the for loop to be 150.
    4. returns an array of all of the discounted prices [ 50, 100, 150] in the for loop all of the original prices are altered by the discount of 0.5 (50% off) and pushed to the discounted array.
    5. ReferenceError: i is not defined - let variable is local to the for loop
    6. ReferenceError: discountedPrice is not defined - let variable that is local to the for loop
    7. prints 150. Although the change to FinalPrice occurs within the for loop, the vairable is instantiated with scope local to the entire function discountPrices
    8. returns array of discountedPrices [ 50, 100, 150 ]. Discounted array is local to the entire function
    9. ReferenceError: i is not defined. - let variable is local to the for loop.
    10. prints 3. const variable is never reassigned and has scope local to the entire function
    11. returns array of discountedPrices [ 50, 100, 150 ]. Discounted array is local to the entire function and the array method's dont qualify under change through re-assignment or re-declaration
    12. 
        A. student.name
        B. student["Grad Year"]
        C. student.greeting()
        D. student["Favorite Teacher"].name
        E. student.courseLoad[0]
    13.
        A. 32 - "+" operator string type
        B. 1 - "-" operator int conversion
        C. 3 - null is interpreted as 0
        D. 3null - string type 
        E. 4 - true is interpreted as 1
        F. 0 - both false and null are interpreted as 0
        G. 3undefined - string type
        H. NaN - not a legitimate number as undefined hasn't been set
    14. 
        A. true - '2'becomes int type 
        B. false - dictionary comparison
        C. true - '2' becomes int type
        D. false - checks for equality without type conversion
        E. false - checks for equality without type conversion
        F. true - Boolean(2) returns true
    15. == checks for equality with type conversion while === checks without type conversion.
    17. [ 2, 4, 6 ] doSomething function is the function passed in as a parameter and multiplies all of the numbers in the array by 2 when passed into callback() which are then pushed to the newArr for return
    19. 1
        4
        3
        2