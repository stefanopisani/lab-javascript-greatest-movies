// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) => {
    return arr.map(movie => movie.director);
};

getAllDirectors(movies);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (arr) => {
    const spielbergMovies = arr.filter(movie => movie.director === 'Steven Spielberg');
    const dramaMovies = spielbergMovies.filter(dramaMov => dramaMov.genre.includes('Drama'));

    return dramaMovies.length;
};


// Iteration 3: All rates average - Get the average of all rates with 2 decimals


const ratesAverage = (arr) => {
    const ratesArr = arr.map(onlyRate => onlyRate.rate);
    if (ratesArr.length === 0) {
        return 0;
    }

    const notRounded = ratesArr.reduce((prev, curr) => {
        if (curr) {
            return prev + curr;
        } else {
            return prev;
        }
    });

    return Number((notRounded / arr.length).toFixed(2));
    //return Math.round(notRounded * 100) / 100;
};



// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
    const dramaMovies = arr.filter(dramaMov => dramaMov.genre.includes('Drama'));
    const ratesArr = dramaMovies.map(onlyRate => onlyRate.rate);
    if (ratesArr.length === 0) {
        return 0;
    }
    const notRounded = ratesArr.reduce((prev, curr) => prev + curr) / (ratesArr.length);
    return Math.round(notRounded * 100) / 100;
};


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
    /*  const movieYear = arr.map(onlyYear => onlyYear.year);
      const movieY = [];
      movieYear.forEach(item => movieY.push({
          year: item
      }));
      return movieY.sort((a, b) => a - b);*/
    arr.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1;
            }
            return 0;
        }
    });
    return arr.map((item) => item);
};



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average