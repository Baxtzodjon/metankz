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
        images: ['/work/dispenser_fir.png', '/work/dispenser_sec.png', '/work/dispenser_thr.png'],
    },
    {
        id: 6,
        slug: "pressure-regulator",
        titleKey: 'Регулятор давления',
        descriptionKey: 'Система редуцирования давления газа',
        images: ['/work/regulator_fir.png', '/work/regulator_sec.png', '/work/regulator_thr.png'],
    },
    {
        id: 7,
        slug: "accumulator-block",
        titleKey: 'Аккумуляторный блок',
        descriptionKey: 'Блок хранения газа в баллонах',
        images: ['/work/accumulator_fir.png', '/work/accumulator_sec.png', '/work/accumulator_thr.png'],
    },
    {
        id: 8,
        slug: "safety-valve",
        titleKey: 'Предохранительный клапан',
        descriptionKey: 'Обеспечение безопасности станции',
        images: ['/work/safety_valve_fir.png', '/work/safety_valve_sec.png', '/work/safety_valve_thr.png'],
    },
    {
        id: 9,
        slug: "gas-distribution-block",
        titleKey: 'Газораспределительная рампа',
        descriptionKey: 'Блок для распределения газа по станции',
        images: ['/work/gas_distribution_fir.png', '/work/gas_distribution_sec.png', '/work/gas_distribution_thr.png'],
    },
    {
        id: 10,
        slug: "compressor-module",
        titleKey: 'Компрессорный модуль',
        descriptionKey: 'Модуль с компрессором и фильтрацией газа',
        images: ['/work/compressor_module_fir.png', '/work/compressor_module_sec.png', '/work/compressor_module_thr.png'],
    },
    {
        id: 11,
        slug: "gas-cylinder",
        titleKey: 'Газовый цилиндр',
        descriptionKey: 'Цилиндр для хранения и транспортировки газа',
        images: ['/work/cylinder_fir.png', '/work/cylinder_sec.png', '/work/cylinder_thr.png'],
    },
    {
        id: 12,
        slug: "control-cabinet",
        titleKey: 'Щит управления',
        descriptionKey: 'Электроуправление станцией и оборудованием',
        images: ['/work/control_cabinet_fir.png', '/work/control_cabinet_sec.png', '/work/control_cabinet_thr.png'],
    },
];