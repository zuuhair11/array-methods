const companies = [
    {name: 'Company One', category: 'Finanace', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finanace', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1981}
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}


// ============================= forEach ===============================
companies.forEach(function(company, index, companies) {
    console.log(company);
});


// ============================= filter ================================
// ===> Get 20 and older
const canDrink1 = ages.filter(function(age) {
    if(age >= 20) {
        return true;
    }
})
console.log(canDrink1);


const canDrink2 = ages.filter(age => age >= 20);
console.log(canDrink2);



// ===> Get reatails companies
const retailCompanies1 = companies.filter(function(company){
    if(company.category === 'Retail') {
        return true;
    }
}) 
console.log(retailCompanies1);


const retailCompanies2 = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies2);



// ===> Get reatails companies
const eightyCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightyCompanies);


// ===> Get all companies that has lasted 10 years or more
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);


// ============================= map ===================================
// ===> Get companies name
const companyNames1 = companies.map(function(company) {
    return `<li class="item">${company.name}</li>`
});
console.log(companyNames1);


const companyNames2 = companies.map(company => `<li class="item">${company.name}</li>`);
console.log(companyNames2);


const testMap = companies.map(function(company, index, companies) {
    return `${company.name} [${company.start} - ${company.end}] => ${companies[index].category}`;
});
console.log(testMap);

// ===> Get square root of all ages
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

// ===> Get all ages times two
const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);


// ===> Get square root of all ages and multiply it by two on one line
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

console.log(ageMap);

const canDrink3 = ages
    .filter(age => age >= 20)
    .map(age => `<li>${age}</li>`);
console.log(canDrink3);


const canDrink4 = ages
    .filter(age => age >= 20)
    .every(age => age >= 20);
console.log(canDrink4);

// The every() method tests whether all elements in the array 
// pass the test implemented by the provided function. 
// It returns a Boolean value.


// ============================= sort ==================================
// ===> Sort companies by stary year
const sortedCompanies1 = companies.sort(function(company1, company2) {
    if(company1.start > company2.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCompanies1);


const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies2);

// ===> Sort ages from lowest to heighest
const sortAges1 = ages.sort(function(a, b) {
    if(a > b) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortAges1);

const sortedAges2 = ages.sort((a, b) => a - b);
const sortedAges3 = ages.sort((a, b) => b - a);
console.log(sortedAges2);
console.log(sortedAges3);



// ============================= reduce ================================
// ===> Get the sum all ages
let ageSum1 = 0;
for(let i = 0; i < ages.length; i++) {
    ageSum1 += ages[i];
}
console.log(ageSum1);


const ageSum2 = ages.reduce(function(total, currentAge) {
    return total + currentAge ;
}, 0);

// initialValue (optional) - A value that will be passed to callback() 
// on first call. If not provided, the first element acts as the accumulator 
// on the first call and callback() won't execute on it.
// ==> If you calling a reduce() on an empty array without initialValue
// ==> Will throw an error
console.log(ageSum2);


const ageSum3 = ages.reduce((total, currentAge) => total += currentAge, 0);
console.log(ageSum3);
// 0 = I am kinf of saying here to set the total to 0;



// ===> Get total years for all companies
const totalYears1 = companies.reduce(function(total, currentCompany) {
    return total + (currentCompany.end - currentCompany.start);

}, 0);
console.log(totalYears1);

const totalYears2 = companies.reduce((total, currentCompany) => total += (currentCompany.end - currentCompany.start), 0);
console.log(totalYears2);

// The reason for putting the zero because the default it sets to company
// I will get an error [object Object]010232116855

const totalYears3 = companies
    .map(function(company) {
        return company.end - company.start
    })
    .reduce(function(total, currentYear) {
        return total += currentYear;
    })

console.log(totalYears3);




// Combine Methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, currentAge) => total += currentAge, 0)
console.log(combined);