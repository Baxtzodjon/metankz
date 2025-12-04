export interface WorkItem {
    id: number;
    slug: string;  
    titleKey: string;
    descriptionKey: string;
    images: string[];
}

export const workItems: WorkItem[] = [
    {
        id: 1,
        slug: "storage-tank",
        titleKey: 'Резервуар для газа',
        descriptionKey: 'Ёмкость для хранения сжатого метана',
        images: ['/work/storage_tank_fir.png', '/work/storage_tank_sec.png', '/work/storage_tank_thr.png'],
    },
    {
        id: 2,
        slug: "compressor-unit",
        titleKey: 'Компрессорная установка',
        descriptionKey: 'Сжатие газа до рабочей температуры и давления',
        images: ['/work/compressor_fir.png', '/work/compressor_sec.png', '/work/compressor_thr.png'],
    },
    {
        id: 3,
        slug: "gas-separator",
        titleKey: 'Сепаратор газа',
        descriptionKey: 'Очистка газа от примесей и влаги',
        images: ['/work/separator_fir.png', '/work/separator_sec.png', '/work/separator_thr.png'],
    },
    {
        id: 4,
        slug: "gas-filter",
        titleKey: 'Осушитель / фильтр',
        descriptionKey: 'Удаление влаги и конденсата из газа',
        images: ['/work/filter_fir.png', '/work/filter_sec.png', '/work/filter_thr.png'],
    },
    {
        id: 5,
        slug: "gas-dispenser",
        titleKey: 'Газораздаточная колонка',
        descriptionKey: 'Заправка автомобилей метаном',
        images: ['/images/metan/dispenser_1.jpg', '/images/metan/dispenser_1b.jpg', '/images/metan/dispenser_1c.jpg'],
    },
    {
        id: 6,
        slug: "pressure-regulator",
        titleKey: 'Регулятор давления',
        descriptionKey: 'Система редуцирования давления газа',
        images: ['/images/metan/regulator_1.jpg', '/images/metan/regulator_1b.jpg', '/images/metan/regulator_1c.jpg'],
    },
    {
        id: 7,
        slug: "accumulator-block",
        titleKey: 'Аккумуляторный блок',
        descriptionKey: 'Блок хранения газа в баллонах',
        images: ['/images/metan/accumulator_1.jpg', '/images/metan/accumulator_1b.jpg', '/images/metan/accumulator_1c.jpg'],
    },
    {
        id: 8,
        slug: "safety-valve",
        titleKey: 'Предохранительный клапан',
        descriptionKey: 'Обеспечение безопасности станции',
        images: ['/images/metan/safety_valve_1.jpg', '/images/metan/safety_valve_1b.jpg', '/images/metan/safety_valve_1c.jpg'],
    },
    {
        id: 9,
        slug: "gas-piping",
        titleKey: 'Трубопроводная сеть',
        descriptionKey: 'Обвязка и разводка газа по станции',
        images: ['/images/metan/piping_1.jpg', '/images/metan/piping_1b.jpg', '/images/metan/piping_1c.jpg'],
    },
    {
        id: 10,
        slug: "compressor-module",
        titleKey: 'Компрессорный модуль',
        descriptionKey: 'Модуль с компрессором и фильтрацией газа',
        images: ['/images/metan/compressor_module_1.jpg', '/images/metan/compressor_module_1b.jpg', '/images/metan/compressor_module_1c.jpg'],
    },
    {
        id: 11,
        slug: "gas-cylinder",
        titleKey: 'Газовый цилиндр',
        descriptionKey: 'Цилиндр для хранения и транспортировки газа',
        images: ['/images/metan/cylinder_1.jpg', '/images/metan/cylinder_1b.jpg', '/images/metan/cylinder_1c.jpg'],
    },
    {
        id: 12,
        slug: "control-cabinet",
        titleKey: 'Щит управления',
        descriptionKey: 'Электроуправление станцией и оборудованием',
        images: ['/images/metan/control_cabinet_1.jpg', '/images/metan/control_cabinet_1b.jpg', '/images/metan/control_cabinet_1c.jpg'],
    },
];