import { FilterDataList, FilterDataItem } from '../../types/apiTypes';

const orderList: FilterDataList = [
  {
    id: 'RATING',
    ru: 'Рейтинг',
    eng: 'Rating',
  },
  {
    id: 'NUM_VOTE',
    ru: 'Количество голосов',
    eng: 'Number votes',
  },
  {
    id: 'YEAR',
    ru: 'Год',
    eng: 'Year',
  },
];

const typeList: FilterDataList = [
  {
    id: 'FILM',
    ru: 'Фильм',
    eng: 'Film',
  },
  {
    id: 'TV_SHOW',
    ru: 'ТВ Шоу',
    eng: 'TV Show',
  },
  {
    id: 'TV_SERIES',
    ru: 'ТВ Сериал',
    eng: 'TV Series',
  },
  {
    id: 'MINI_SERIES',
    ru: 'Мини Сериал',
    eng: 'Mini Series',
  },
  {
    id: 'ALL',
    ru: 'Все',
    eng: 'All',
  },
];
const genreList: FilterDataList = [
  {
    id: 'ALL',
    ru: 'все',
    eng: 'all',
  },
  {
    id: '1',
    ru: 'триллер',
    eng: 'thriller',
  },
  {
    id: '2',
    ru: 'драма',
    eng: 'drama',
  },
  {
    id: '3',
    ru: 'криминал',
    eng: 'crime',
  },
  {
    id: '4',
    ru: 'мелодрама',
    eng: 'melodrama',
  },
  {
    id: '5',
    ru: 'детектив',
    eng: 'detective',
  },
  {
    id: '6',
    ru: 'фантастика',
    eng: 'fantasy',
  },
  {
    id: '7',
    ru: 'приключения',
    eng: 'adventure',
  },
  {
    id: '8',
    ru: 'биография',
    eng: 'biography',
  },
  {
    id: '9',
    ru: 'фильм-нуар',
    eng: 'film noir',
  },
  {
    id: '10',
    ru: 'вестерн',
    eng: 'western',
  },
  {
    id: '11',
    ru: 'боевик',
    eng: 'action',
  },
  {
    id: '12',
    ru: 'фэнтези',
    eng: 'fantasy',
  },
  {
    id: '13',
    ru: 'комедия',
    eng: 'comedy',
  },
  {
    id: '14',
    ru: 'военный',
    eng: 'war',
  },
  {
    id: '15',
    ru: 'история',
    eng: 'history',
  },
  {
    id: '16',
    ru: 'музыка',
    eng: 'music',
  },
  {
    id: '17',
    ru: 'ужасы',
    eng: 'horror',
  },
  {
    id: '18',
    ru: 'мультфильм',
    eng: 'animated',
  },
  {
    id: '19',
    ru: 'семейный',
    eng: 'family',
  },
  {
    id: '20',
    ru: 'мюзикл',
    eng: 'musical',
  },
  {
    id: '21',
    ru: 'спорт',
    eng: 'sport',
  },
  {
    id: '22',
    ru: 'документальный',
    eng: 'documentary',
  },
  {
    id: '23',
    ru: 'короткометражка',
    eng: 'short',
  },
  {
    id: '24',
    ru: 'аниме',
    eng: 'anime',
  },
  {
    id: '25',
    ru: '',
    eng: '',
  },
  {
    id: '26',
    ru: 'новости',
    eng: 'news',
  },
  {
    id: '27',
    ru: 'концерт',
    eng: 'concert',
  },
  {
    id: '28',
    ru: 'для взрослых',
    eng: 'adult',
  },
  {
    id: '29',
    ru: 'церемония',
    eng: 'ceremony',
  },
  {
    id: '30',
    ru: 'реальное ТВ',
    eng: 'reality TV',
  },
  {
    id: '31',
    ru: 'игра',
    eng: 'game',
  },
  {
    id: '32',
    ru: 'ток-шоу',
    eng: 'talk show',
  },
  {
    id: '33',
    ru: 'детский',
    eng: 'children',
  },
];

const countriesList: string[] = [
  'США',
  'Швейцария',
  'Франция',
  'Польша',
  'Великобритания',
  'Швеция',
  'Индия',
  'Испания',
  'Германия',
  'Италия',
  'Гонконг',
  'Германия (ФРГ)',
  'Австралия',
  'Канада',
  'Мексика',
  'Япония',
  'Дания',
  'Чехия',
  'Ирландия',
  'Люксембург',
  'Китай',
  'Норвегия',
  'Нидерланды',
  'Аргентина',
  'Финляндия',
  'Босния и Герцеговина',
  'Австрия',
  'Тайвань',
  'Новая Зеландия',
  'Бразилия',
  'Чехословакия',
  'Мальта',
  'СССР',
  'Россия',
  'Югославия',
  'Португалия',
  'Румыния',
  'Хорватия',
  'ЮАР',
  'Куба',
  'Колумбия',
  'Израиль',
  'Намибия',
  'Турция',
  'Бельгия',
  'Сальвадор',
  'Исландия',
  'Венгрия',
  'Корея Южная',
  'Лихтенштейн',
  'Болгария',
  'Филиппины',
  'Доминикана',
  '',
  'Марокко',
  'Таиланд',
  'Кения',
  'Пакистан',
  'Иран',
  'Панама',
  'Аруба',
  'Ямайка',
  'Греция',
  'Тунис',
  'Кыргызстан',
  'Пуэрто Рико',
  'Казахстан',
  'Югославия (ФР)',
  'Алжир',
  'Германия (ГДР)',
  'Сингапур',
  'Словакия',
  'Афганистан',
  'Индонезия',
  'Перу',
  'Бермуды',
  'Монако',
  'Зимбабве',
  'Вьетнам',
  'Антильские Острова',
  'Саудовская Аравия',
  'Танзания',
  'Ливия',
  'Ливан',
  'Кувейт',
  'Египет',
  'Литва',
  'Венесуэла',
  'Словения',
  'Чили',
  'Багамы',
  'Эквадор',
  'Коста-Рика',
  'Кипр',
  'Уругвай',
  'Ирак',
  'Мартиника',
  'Эстония',
  'ОАЭ',
  'Бангладеш',
  'Македония',
  'Гвинея',
  'Иордания',
  'Литва',
];

const getItemById = (id: string, arr: FilterDataList): FilterDataItem | undefined => {
  return arr.find((value) => value.id === id);
};

type languages = 'eng' | 'ru';

const findItemId = (item: string | undefined, arr: FilterDataList, type: languages): string => {
  const result = arr.find((value) => value[type] === item);
  return result ? result.id : '';
};

export { orderList, typeList, genreList, countriesList, findItemId, getItemById };
