/**
 * Я опробовал тестирование через Mocha, но если возможно, хотелось бы получить какую-то справку о том,
 * как это организовывать правильно в TypeScript, потому что мне кажется, что я соорудил какого-то монстра.
 * Пользу тестов я ощутил, т.к. в ходе рефакторинга множество раз мне Mocha подсказывала, что я ошибся, но
 * как это правильно организовать, я не очень понял.
 */

import * as functions from './functions';
import {Menu, menuListType} from './menu';
import {Slider} from './slider';

const menuList: menuListType = [
    {
        title: 'Животные',
        label: 'animals',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    { title: 'Коровы' },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Тигры' }
                ]
            },
            {
                title: 'Другие',
                items: [
                    { title: 'Змеи' },
                    { title: 'Птицы' },
                    { title: 'Ящерицы' },
                ]
            }
        ]
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    { title: 'Гуппи' },
                    { title: 'Скалярии' }
                ]
            },
            {
                title: 'Форель',
                items: [
                    { title: 'Морская форель' }
                ]
            }
        ]
    }
];

const element: HTMLElement = document.querySelector('.menu') as HTMLElement;
const nav: Menu = new Menu({ element, menuList });

const sliderElement: HTMLElement = document.getElementById('slider') as HTMLElement;
const slider: Slider = new Slider(sliderElement);