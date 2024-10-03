import robot from "../images/you robot.jpg";
import frontier from "../images/frontier.jpg";
import conspiracy from "../images/conspiracy.jpg";
import forest from "../images/forest.jpg";
import heist from "../images/heist.jpg";
import underground from "../images/underground.jpg";
import carnival from "../images/carnival.jpg";
import plague from "../images/plague.jpg";
import gods from "../images/gods.jpg";
import clerics from "../images/clerics.jpg";
import runaways from "../images/runaways.jpg";
import { type } from "@testing-library/user-event/dist/type";

export const gameCards = {
  ru: [
    {
      title: "Ты, робот",
      text: "На борту космического корабля произошло убийство! Среди вас находится сломанный андроид, не подчиняющийся законам робототехники. Найдите его и раскройте преступление!",
      image: robot,
      repeat: false,
    },
    {
      title: "Убийство на фронтире",
      text: "Маленький городок посреди прерии. Таинственная незнакомка и необъяснимая смерть. Слухи расползаются быстро. В Ред-Ривере все как семья, и эта семья вот-вот будет расколота. ",
      image: frontier,
      repeat: false,
    },
    {
      title: "Конспираториум",
      text: "Все самые безумные теории заговора оказались правдой! Столкнитесь в схватке с рептилоидами и инопланетянами, чтобы навсегда решить, кто будет править земным диском.",
      image: conspiracy,
      repeat: true,
    },
    {
      title: "Дети Леса",
      text: "Кто это танцует на лесной поляне? Человек или зверь сейчас скрылся за деревом? Они зовут себя Детьми Леса. Что скрывают звериные маски: дружную семью или опасный культ? Скоро тайна Детей Леса будет раскрыта.",
      image: forest,
      repeat: true,
    },
  ]
};

export const dndCards = {
  ru: [
    {
      title: "Невозможное ограбление (D&D-ваншот)",
      text: "Команда авантюристов застряла в магическом лабиринте. Единственное, что они знают: их задача — украсть сокровище, которое вернёт им свободу.",
      image: heist,
      repeat: false,
    },
    {
      title: "Подземный Король (D&D-кампания)",
      text: "Тысячелетний барьер в Подземье вновь открыт. Лишь ваша команда храбрецов может остановить орды чудовищ и найти стоящего за ними Подземного Короля!",
      image: underground,
      repeat: false,
    },
    {
      title: "Карнавал в жёлтых тонах (D&D-ваншот)",
      text: "На праздник осеннего карнавала приехал цирк из далёких земель! Но почему с их приездом в городе начинаются странные события?",
      image: carnival,
      repeat: true,
    },
    {
      title: "Чумной лес (D&D-ваншот)",
      text: "Жителей деревни и лесных обитателей поражает магическая болезнь. Рискните ступить в чащу леса и раскройте, кто за этим стоит!",
      image: plague,
      repeat: true,
    },
    {
      title: "Пантеон (D&D-ваншот)",
      text: "Старые боги пали с небес. Ваши герои, некогда почитаемые смертными, теперь сами заключены в смертных телах. Верните славу поверженному пантеону!",
      image: gods,
      repeat: true,
    },
    {
      title: "Беглецы (D&D-кампания)",
      text: "Кампания для фанатов подростковых антиутопий. Группа подростков с магическими способностями сбегает из интерната и осознаёт, что мир совсем не такой, как им говорили.",
      image: runaways,
      repeat: false,
    },
    {
      title: "За дверями храма (D&D-ваншот)",
      text: "Заходят как-то в таверну... Нет, не так. Сегодня команде жрецов разных богов придётся оставить все разногласия и объединиться против общей угрозы!",
      image: clerics,
      repeat: true,
    },
  ]
};

export const nearestGames = [
  {
    isDnd: true,
    index: 0,
    date: "09/10, 18:15",
    city: {
      ru: "Ришон-ле-Цион",
    },
    link: "https://forms.gle/GSLC715dgyTV8dzH7"
  },
  {
    isDnd: false,
    index: 3,
    date: "10/10, 17:00",
    city: {
      ru: "Тель-Авив",
    },
    link: "https://forms.gle/677WWuyKNaeryMRVA"
  },
  {
    isDnd: true,
    index: 1,
    date: "16/10, 18:30",
    city: {
      ru: "Ришон-ле-Цион",
    },
    link: "https://forms.gle/ESbX9R8SygC2qp4j8"
  },
  {
    isDnd: false,
    index: 0,
    date: "21/10, 17:00",
    city: {
      ru: "Иерусалим",
    },
    link: "https://forms.gle/oL14cM8DemdVFHuh7"
  },
  {
    isDnd: true,
    index: 1,
    date: "23/10, 18:30",
    city: {
      ru: "Ришон-ле-Цион",
    },
    link: "https://forms.gle/ESbX9R8SygC2qp4j8"
  },
]