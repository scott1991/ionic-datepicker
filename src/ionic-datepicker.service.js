//By Rajeshwar Patlolla - rajeshwar.patlolla@gmail.com
//https://github.com/rajeshwarpatlolla

(function(){
  'use strict';

  angular.module('ionic-datepicker')
    .service('DatepickerService',DatepickerService);

  DatepickerService.$inject = [];
  function DatepickerService(){
    this.monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.yearsList = [1985, 1986, 1987, 1988, 1989, 1990,
      1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
      2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
      2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
      2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
      2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040
    ];
  }

})();
