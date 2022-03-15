// console.table(countries);

// function getAvaragePopulation(props) {
//     let avaragePopulation = props.map(i => i.population).reduce((i, sum) => i + sum) / countries.length;
//     console.log(avaragePopulation.toFixed())
//     //в каждой стране есть поле population, вернуть из функции среднее арифм.
// }

// getAvaragePopulation(countries);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getNames(props) {
//     let names = props.map(i => i.name);
//     // console.log(names);
//     return names
//     //вернуть список (массив) имен стран (поле name)
// }

// getNames(countries);





// function findCountry(props) {
//     let userCountry = prompt('введите название страны');
//     let isExist = props.includes(userCountry);

//     console.log(isExist)
//     //ввод через prompt название страны, вернуть true если такая страна нашлась по имени, false если не нашлась. можно использовать для этого getNames выше + indexOf
// }

// findCountry(getNames(countries));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getCountryByCode(props) {
    let userAlfaInput = prompt('введите трехбуквенный код').toUpperCase();

    if(userAlfaInput.length !== 3) {
        return console.log('incorrect input')
    }

    let isCorrect = props.filter(prop => prop.alpha3Code === userAlfaInput);

    if (isCorrect.length === 0) {
        return console.log(false)
    } else {
        return console.log(isCorrect);
    }

    //пользователь вводит через prompt трехбуквенный код. если введенная строка не 3 символа длиной - выдать сообщение о неправильном вводе.
    //по введенной строке (трехбуквенный код) найти страну (должно совпадать с alpha3Code, которое есть у каждой страны).
    //и вернуть из функции либо объект с найденной страной, либо false
}

getCountryByCode(countries);


// Удачи.