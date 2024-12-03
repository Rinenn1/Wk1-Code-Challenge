# WEEK1-code-challengeit 

## Repository Structure

```toy-problem-solutions/
│
├── README.md                 # Documentation for the repository
├── challenge1.js             # Solution for Student Grade Generator
├── challenge2.js             # Solution for Speed Detector
├── challenge3.js             # Solution for Net Salary Calculator
└── .gitignore                # Files to ignore in the repository```


## Set-up Instructions
On GitHub, navigate to the _Spoon-Knife_ repository
In the top-right corner of the page, click _Fork_.
In the "Repository name" field, type a name.
**Optionally**, in the "Description" field, type a description of your fork.
Click Create fork.

Clone the repository using the **SSH code** into the terminal:
```git clone https://github.com/YOUR-USERNAME/Spoon-Knife```
Ensure you have Node.js installed


## Summary of contents
The code in this file are labelled *Challenge1*, *Challenge2*, and *Challenge3* representing the 3 different code challenges.

## Challenge Breakdown

### Challenge 1
File: [wk1-code-challenge] (challenge1.js)
Prompts the user to input student marks (0–100) and outputs the corresponding grade:
`A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40`
The program prompts the user to input a score (0–100) and outputs the grade. Invalid inputs are handled gracefully with error messages.


### Challenge 2
File: [wk1-code-challenge] (challenge2.js)
Calculates demerit points based on the speed of a car:
If speed ≤ 70, prints: Ok.
For every 5 km/s over 70, assigns 1 demerit point.
If demerit points exceed 12, prints: License suspended.

**Challenge 3**
File: [wk1-code-challenge] (challenge3.js)
Calculates an individual’s Net Salary using basic salary and benefits as inputs. 
This program calculates net salary based on:
Basic salary: _User-provided input_.
Benefits: _Additional allowances_.
The program computes deductions (NSSF, NHIF, Payee) and outputs the final net salary.

**Uses KRA, NHIF, and NSSF values from**:
[KRA Tax Rates] (https://www.kra.go.ke/individual/calculate-tax/calculating-tax/paye)
[NHIF and NSSF Info] (https://www.aren.co.ke/payroll/taxrates.htm)

## Contribution Guidelines
We welcome contributions to improve the solutions! To contribute:

Fork the repository.
Create a new branch:
```git checkout -b feature-branch-name```
Commit your changes:
```git commit -m "Description of changes"```
Push to your branch:
```git push origin feature-branch-name```
Open a pull request.
