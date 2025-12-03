export interface WorkItem {
    id: number;
    titleKey: string;
    descriptionKey: string;
    images: string[];
}

export const workItems: WorkItem[] = [
    {
        id: 1,
        titleKey: 'Резервуар для газа',
        descriptionKey: 'Ёмкость для хранения сжатого метана',
        images: ['/images/metan/storage_tank_1.jpg', '/images/metan/storage_tank_1b.jpg', '/images/metan/storage_tank_1c.jpg'],
    },
    {
        id: 2,
        titleKey: 'Компрессорная установка',
        descriptionKey: 'Сжатие газа до рабочей температуры и давления',
        images: ['/images/metan/compressor_1.jpg', '/images/metan/compressor_1b.jpg', '/images/metan/compressor_1c.jpg'],
    },
    {
        id: 3,
        titleKey: 'Сепаратор газа',
        descriptionKey: 'Очистка газа от примесей и влаги',
        images: ['/images/metan/separator_1.jpg', '/images/metan/separator_1b.jpg', '/images/metan/separator_1c.jpg'],
    },
    {
        id: 4,
        titleKey: 'Осушитель / фильтр',
        descriptionKey: 'Удаление влаги и конденсата из газа',
        images: ['/images/metan/filter_1.jpg', '/images/metan/filter_1b.jpg', '/images/metan/filter_1c.jpg'],
    },
    {
        id: 5,
        titleKey: 'Газораздаточная колонка',
        descriptionKey: 'Заправка автомобилей метаном',
        images: ['/images/metan/dispenser_1.jpg', '/images/metan/dispenser_1b.jpg', '/images/metan/dispenser_1c.jpg'],
    },
    {
        id: 6,
        titleKey: 'Регулятор давления',
        descriptionKey: 'Система редуцирования давления газа',
        images: ['/images/metan/regulator_1.jpg', '/images/metan/regulator_1b.jpg', '/images/metan/regulator_1c.jpg'],
    },
    {
        id: 7,
        titleKey: 'Аккумуляторный блок',
        descriptionKey: 'Блок хранения газа в баллонах',
        images: ['/images/metan/accumulator_1.jpg', '/images/metan/accumulator_1b.jpg', '/images/metan/accumulator_1c.jpg'],
    },
    {
        id: 8,
        titleKey: 'Предохранительный клапан',
        descriptionKey: 'Обеспечение безопасности станции',
        images: ['/images/metan/safety_valve_1.jpg', '/images/metan/safety_valve_1b.jpg', '/images/metan/safety_valve_1c.jpg'],
    },
    {
        id: 9,
        titleKey: 'Трубопроводная сеть',
        descriptionKey: 'Обвязка и разводка газа по станции',
        images: ['/images/metan/piping_1.jpg', '/images/metan/piping_1b.jpg', '/images/metan/piping_1c.jpg'],
    },
    {
        id: 10,
        titleKey: 'Компрессорный модуль',
        descriptionKey: 'Модуль с компрессором и фильтрацией газа',
        images: ['/images/metan/compressor_module_1.jpg', '/images/metan/compressor_module_1b.jpg', '/images/metan/compressor_module_1c.jpg'],
    },
    {
        id: 11,
        titleKey: 'Газовый цилиндр',
        descriptionKey: 'Цилиндр для хранения и транспортировки газа',
        images: ['/images/metan/cylinder_1.jpg', '/images/metan/cylinder_1b.jpg', '/images/metan/cylinder_1c.jpg'],
    },
    {
        id: 12,
        titleKey: 'Щит управления',
        descriptionKey: 'Электроуправление станцией и оборудованием',
        images: ['/images/metan/control_cabinet_1.jpg', '/images/metan/control_cabinet_1b.jpg', '/images/metan/control_cabinet_1c.jpg'],
    },
];