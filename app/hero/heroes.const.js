var hero_1 = require('./hero');
exports.HEROES = [
    { "id": 11, "name": "Iron Man" },
    { "id": 12, "name": "Spider Man" },
    { "id": 13, "name": "Captain America" },
    { "id": 14, "name": "Hulk" },
    { "id": 15, "name": "Thor" },
    { "id": 16, "name": "Black Widow" },
    { "id": 17, "name": "Daredevil" },
    { "id": 18, "name": "Hawkeye" },
    { "id": 19, "name": "Wolverine" },
    { "id": 20, "name": "Magneto" }
];
exports.HERO_ROUTES = [
    { path: '/detail', component: hero_1.HeroDetail, name: 'Detail' },
    { path: '/', component: hero_1.HeroesComponent, name: 'List' }
];

//# sourceMappingURL=heroes.const.js.map
