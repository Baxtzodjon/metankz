import { workDetailsLabels } from "./workDetailsLabels";

export interface WorkDetails {
    object: string;
    location: string;
    client: string;
    purpose: string;
    specs: string;
    status: string;
    year: string;
}

export interface WorkItem {
    id: number;
    slug: string;
    titleKey: string;
    descriptionKey: string;
    images: string[];
    category: "Work.categories.all" | "Work.categories.storage" | "Work.categories.compressor" | "Work.categories.filtration" | "Work.categories.distribution" | "Work.categories.dispensing" | "Work.categories.safety" | "Work.categories.control";
    query: "all" | "storage" | "compressor" | "filtration" | "distribution" | "dispensing" | "safety" | "control";
    detailsValue: typeof workDetailsLabels;
    details: WorkDetails;
    projectEquipment: string;
}

export const workItems: WorkItem[] = [
    {
        id: 1,
        slug: "storage-tank",
        titleKey: 'Work.items.storage-tank.title',
        descriptionKey: 'Work.items.storage-tank.description',
        images: ['/work/storage_tank_fir.png', '/work/storage_tank_sec.png', '/work/storage_tank_thr.png'],
        category: 'Work.categories.storage',
        query: 'storage',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.storage-tank.details.object",
            location: "Work.items.storage-tank.details.location",
            client: "Work.items.storage-tank.details.client",
            purpose: "Work.items.storage-tank.details.purpose",
            specs: "Work.items.storage-tank.details.specs",
            status: "Work.items.storage-tank.details.status",
            year: "Work.items.storage-tank.details.year"
        },
        projectEquipment: "Work.items.storage-tank.projectEquipment"
    },
    {
        id: 2,
        slug: "compressor-unit",
        titleKey: 'Work.items.compressor-unit.title',
        descriptionKey: 'Work.items.compressor-unit.description',
        images: ['/work/compressor_fir.png', '/work/compressor_sec.png', '/work/compressor_thr.png'],
        category: 'Work.categories.compressor',
        query: 'compressor',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.compressor-unit.details.object",
            location: "Work.items.compressor-unit.details.location",
            client: "Work.items.compressor-unit.details.client",
            purpose: "Work.items.compressor-unit.details.purpose",
            specs: "Work.items.compressor-unit.details.specs",
            status: "Work.items.compressor-unit.details.status",
            year: "Work.items.compressor-unit.details.year"
        },
        projectEquipment: "Work.items.compressor-unit.projectEquipment"
    },
    {
        id: 3,
        slug: "gas-separator",
        titleKey: 'Work.items.gas-separator.title',
        descriptionKey: 'Work.items.gas-separator.description',
        images: ['/work/separator_fir.png', '/work/separator_sec.png', '/work/separator_thr.png'],
        category: 'Work.categories.filtration',
        query: 'filtration',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.gas-separator.details.object",
            location: "Work.items.gas-separator.details.location",
            client: "Work.items.gas-separator.details.client",
            purpose: "Work.items.gas-separator.details.purpose",
            specs: "Work.items.gas-separator.details.specs",
            status: "Work.items.gas-separator.details.status",
            year: "Work.items.gas-separator.details.year"
        },
        projectEquipment: "Work.items.gas-separator.projectEquipment"
    },
    {
        id: 4,
        slug: "gas-filter",
        titleKey: 'Work.items.gas-filter.title',
        descriptionKey: 'Work.items.gas-filter.description',
        images: ['/work/filter_fir.png', '/work/filter_sec.png', '/work/filter_thr.png'],
        category: 'Work.categories.filtration',
        query: 'filtration',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.gas-filter.details.object",
            location: "Work.items.gas-filter.details.location",
            client: "Work.items.gas-filter.details.client",
            purpose: "Work.items.gas-filter.details.purpose",
            specs: "Work.items.gas-filter.details.specs",
            status: "Work.items.gas-filter.details.status",
            year: "Work.items.gas-filter.details.year"
        },
        projectEquipment: "Work.items.gas-filter.projectEquipment"
    },
    {
        id: 5,
        slug: "gas-dispenser",
        titleKey: 'Work.items.gas-dispenser.title',
        descriptionKey: 'Work.items.gas-dispenser.description',
        images: ['/work/dispenser_fir.png', '/work/dispenser_sec.png', '/work/dispenser_thr.png'],
        category: 'Work.categories.dispensing',
        query: 'dispensing',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.gas-dispenser.details.object",
            location: "Work.items.gas-dispenser.details.location",
            client: "Work.items.gas-dispenser.details.client",
            purpose: "Work.items.gas-dispenser.details.purpose",
            specs: "Work.items.gas-dispenser.details.specs",
            status: "Work.items.gas-dispenser.details.status",
            year: "Work.items.gas-dispenser.details.year"
        },
        projectEquipment: "Work.items.gas-dispenser.projectEquipment"
    },
    {
        id: 6,
        slug: "pressure-regulator",
        titleKey: 'Work.items.pressure-regulator.title',
        descriptionKey: 'Work.items.pressure-regulator.description',
        images: ['/work/regulator_fir.png', '/work/regulator_sec.png', '/work/regulator_thr.png'],
        category: 'Work.categories.distribution',
        query: 'distribution',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.pressure-regulator.details.object",
            location: "Work.items.pressure-regulator.details.location",
            client: "Work.items.pressure-regulator.details.client",
            purpose: "Work.items.pressure-regulator.details.purpose",
            specs: "Work.items.pressure-regulator.details.specs",
            status: "Work.items.pressure-regulator.details.status",
            year: "Work.items.pressure-regulator.details.year"
        },
        projectEquipment: "Work.items.pressure-regulator.projectEquipment"
    },
    {
        id: 7,
        slug: "accumulator-block",
        titleKey: 'Work.items.accumulator-block.title',
        descriptionKey: 'Work.items.accumulator-block.description',
        images: ['/work/accumulator_fir.png', '/work/accumulator_sec.png', '/work/accumulator_thr.png'],
        category: 'Work.categories.storage',
        query: 'storage',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.accumulator-block.details.object",
            location: "Work.items.accumulator-block.details.location",
            client: "Work.items.accumulator-block.details.client",
            purpose: "Work.items.accumulator-block.details.purpose",
            specs: "Work.items.accumulator-block.details.specs",
            status: "Work.items.accumulator-block.details.status",
            year: "Work.items.accumulator-block.details.year"
        },
        projectEquipment: "Work.items.accumulator-block.projectEquipment"
    },
    {
        id: 8,
        slug: "safety-valve",
        titleKey: 'Work.items.safety-valve.title',
        descriptionKey: 'Work.items.safety-valve.description',
        images: ['/work/safety_valve_fir.png', '/work/safety_valve_sec.png', '/work/safety_valve_thr.png'],
        category: 'Work.categories.safety',
        query: 'safety',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.safety-valve.details.object",
            location: "Work.items.safety-valve.details.location",
            client: "Work.items.safety-valve.details.client",
            purpose: "Work.items.safety-valve.details.purpose",
            specs: "Work.items.safety-valve.details.specs",
            status: "Work.items.safety-valve.details.status",
            year: "Work.items.safety-valve.details.year"
        },
        projectEquipment: "Work.items.safety-valve.projectEquipment"
    },
    {
        id: 9,
        slug: "gas-distribution-block",
        titleKey: 'Work.items.gas-distribution-block.title',
        descriptionKey: 'Work.items.gas-distribution-block.description',
        images: ['/work/gas_distribution_fir.png', '/work/gas_distribution_sec.png', '/work/gas_distribution_thr.png'],
        category: 'Work.categories.distribution',
        query: 'distribution',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.gas-distribution-block.details.object",
            location: "Work.items.gas-distribution-block.details.location",
            client: "Work.items.gas-distribution-block.details.client",
            purpose: "Work.items.gas-distribution-block.details.purpose",
            specs: "Work.items.gas-distribution-block.details.specs",
            status: "Work.items.gas-distribution-block.details.status",
            year: "Work.items.gas-distribution-block.details.year"
        },
        projectEquipment: "Work.items.gas-distribution-block.projectEquipment"
    },
    {
        id: 10,
        slug: "compressor-module",
        titleKey: 'Work.items.compressor-module.title',
        descriptionKey: 'Work.items.compressor-module.description',
        images: ['/work/compressor_module_fir.png', '/work/compressor_module_sec.png', '/work/compressor_module_thr.png'],
        category: 'Work.categories.compressor',
        query: 'compressor',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.compressor-module.details.object",
            location: "Work.items.compressor-module.details.location",
            client: "Work.items.compressor-module.details.client",
            purpose: "Work.items.compressor-module.details.purpose",
            specs: "Work.items.compressor-module.details.specs",
            status: "Work.items.compressor-module.details.status",
            year: "Work.items.compressor-module.details.year"
        },
        projectEquipment: "Work.items.compressor-module.projectEquipment"
    },
    {
        id: 11,
        slug: "gas-cylinder",
        titleKey: 'Work.items.gas-cylinder.title',
        descriptionKey: 'Work.items.gas-cylinder.description',
        images: ['/work/cylinder_fir.png', '/work/cylinder_sec.png', '/work/cylinder_thr.png'],
        category: 'Work.categories.storage',
        query: 'storage',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.gas-cylinder.details.object",
            location: "Work.items.gas-cylinder.details.location",
            client: "Work.items.gas-cylinder.details.client",
            purpose: "Work.items.gas-cylinder.details.purpose",
            specs: "Work.items.gas-cylinder.details.specs",
            status: "Work.items.gas-cylinder.details.status",
            year: "Work.items.gas-cylinder.details.year"
        },
        projectEquipment: "Work.items.gas-cylinder.projectEquipment"
    },
    {
        id: 12,
        slug: "control-cabinet",
        titleKey: 'Work.items.control-cabinet.title',
        descriptionKey: 'Work.items.control-cabinet.description',
        images: ['/work/control_cabinet_fir.png', '/work/control_cabinet_sec.png', '/work/control_cabinet_thr.png'],
        category: 'Work.categories.control',
        query: 'control',
        detailsValue: workDetailsLabels,
        details: {
            object: "Work.items.control-cabinet.details.object",
            location: "Work.items.control-cabinet.details.location",
            client: "Work.items.control-cabinet.details.client",
            purpose: "Work.items.control-cabinet.details.purpose",
            specs: "Work.items.control-cabinet.details.specs",
            status: "Work.items.control-cabinet.details.status",
            year: "Work.items.control-cabinet.details.year"
        },
        projectEquipment: "Work.items.control-cabinet.projectEquipment"
    },
];

/* export const workItems: WorkItem[] = [
    {
        id: 1,
        slug: "storage-tank",
        titleKey: "Work.items.storage-tank.title",
        descriptionKey: "Work.items.storage-tank.description",
        images: ["/work/storage_tank_fir.png", "/work/storage_tank_sec.png", "/work/storage_tank_thr.png"],
        category: "Work.categories.storage",
        query: "storage",
        details: {
            object: "Work.items.storage-tank.details.object",
            location: "Work.items.storage-tank.details.location",
            client: "Work.items.storage-tank.details.client",
            purpose: "Work.items.storage-tank.details.purpose",
            specs: "Work.items.storage-tank.details.specs",
            status: "Work.items.storage-tank.details.status",
            year: "Work.items.storage-tank.details.year"
        },
        projectEquipment: "Work.items.storage-tank.projectEquipment"
    },
    {
        id: 2,
        slug: "compressor-unit",
        titleKey: "Work.items.compressor-unit.title",
        descriptionKey: "Work.items.compressor-unit.description",
        images: ["/work/compressor_fir.png", "/work/compressor_sec.png", "/work/compressor_thr.png"],
        category: "Work.categories.compressor",
        query: "compressor",
        details: {
            object: "Work.items.compressor-unit.details.object",
            location: "Work.items.compressor-unit.details.location",
            client: "Work.items.compressor-unit.details.client",
            purpose: "Work.items.compressor-unit.details.purpose",
            specs: "Work.items.compressor-unit.details.specs",
            status: "Work.items.compressor-unit.details.status",
            year: "Work.items.compressor-unit.details.year"
        },
        projectEquipment: "Work.items.compressor-unit.projectEquipment"
    },
    {
        id: 3,
        slug: "gas-separator",
        titleKey: "Work.items.gas-separator.title",
        descriptionKey: "Work.items.gas-separator.description",
        images: ["/work/separator_fir.png", "/work/separator_sec.png", "/work/separator_thr.png"],
        category: "Work.categories.filtration",
        query: "filtration",
        details: {
            object: "Work.items.gas-separator.details.object",
            location: "Work.items.gas-separator.details.location",
            client: "Work.items.gas-separator.details.client",
            purpose: "Work.items.gas-separator.details.purpose",
            specs: "Work.items.gas-separator.details.specs",
            status: "Work.items.gas-separator.details.status",
            year: "Work.items.gas-separator.details.year"
        },
        projectEquipment: "Work.items.gas-separator.projectEquipment"
    },
    {
        id: 4,
        slug: "gas-filter",
        titleKey: "Work.items.gas-filter.title",
        descriptionKey: "Work.items.gas-filter.description",
        images: ["/work/filter_fir.png", "/work/filter_sec.png", "/work/filter_thr.png"],
        category: "Work.categories.filtration",
        query: "filtration",
        details: {
            object: "Work.items.gas-filter.details.object",
            location: "Work.items.gas-filter.details.location",
            client: "Work.items.gas-filter.details.client",
            purpose: "Work.items.gas-filter.details.purpose",
            specs: "Work.items.gas-filter.details.specs",
            status: "Work.items.gas-filter.details.status",
            year: "Work.items.gas-filter.details.year"
        },
        projectEquipment: "Work.items.gas-filter.projectEquipment"
    },
    {
        id: 5,
        slug: "gas-dispenser",
        titleKey: "Work.items.gas-dispenser.title",
        descriptionKey: "Work.items.gas-dispenser.description",
        images: ["/work/dispenser_fir.png", "/work/dispenser_sec.png", "/work/dispenser_thr.png"],
        category: "Work.categories.dispensing",
        query: "dispensing",
        details: {
            object: "Work.items.gas-dispenser.details.object",
            location: "Work.items.gas-dispenser.details.location",
            client: "Work.items.gas-dispenser.details.client",
            purpose: "Work.items.gas-dispenser.details.purpose",
            specs: "Work.items.gas-dispenser.details.specs",
            status: "Work.items.gas-dispenser.details.status",
            year: "Work.items.gas-dispenser.details.year"
        },
        projectEquipment: "Work.items.gas-dispenser.projectEquipment"
    },
    {
        id: 6,
        slug: "pressure-regulator",
        titleKey: "Work.items.pressure-regulator.title",
        descriptionKey: "Work.items.pressure-regulator.description",
        images: ["/work/regulator_fir.png", "/work/regulator_sec.png", "/work/regulator_thr.png"],
        category: "Work.categories.distribution",
        query: "distribution",
        details: {
            object: "Work.items.pressure-regulator.details.object",
            location: "Work.items.pressure-regulator.details.location",
            client: "Work.items.pressure-regulator.details.client",
            purpose: "Work.items.pressure-regulator.details.purpose",
            specs: "Work.items.pressure-regulator.details.specs",
            status: "Work.items.pressure-regulator.details.status",
            year: "Work.items.pressure-regulator.details.year"
        },
        projectEquipment: "Work.items.pressure-regulator.projectEquipment"
    },
    {
        id: 7,
        slug: "accumulator-block",
        titleKey: "Work.items.accumulator-block.title",
        descriptionKey: "Work.items.accumulator-block.description",
        images: ["/work/accumulator_fir.png", "/work/accumulator_sec.png", "/work/accumulator_thr.png"],
        category: "Work.categories.storage",
        query: "storage",
        details: {
            object: "Work.items.accumulator-block.details.object",
            location: "Work.items.accumulator-block.details.location",
            client: "Work.items.accumulator-block.details.client",
            purpose: "Work.items.accumulator-block.details.purpose",
            specs: "Work.items.accumulator-block.details.specs",
            status: "Work.items.accumulator-block.details.status",
            year: "Work.items.accumulator-block.details.year"
        },
        projectEquipment: "Work.items.accumulator-block.projectEquipment"
    },
    {
        id: 8,
        slug: "safety-valve",
        titleKey: "Work.items.safety-valve.title",
        descriptionKey: "Work.items.safety-valve.description",
        images: ["/work/safety_valve_fir.png", "/work/safety_valve_sec.png", "/work/safety_valve_thr.png"],
        category: "Work.categories.safety",
        query: "safety",
        details: {
            object: "Work.items.safety-valve.details.object",
            location: "Work.items.safety-valve.details.location",
            client: "Work.items.safety-valve.details.client",
            purpose: "Work.items.safety-valve.details.purpose",
            specs: "Work.items.safety-valve.details.specs",
            status: "Work.items.safety-valve.details.status",
            year: "Work.items.safety-valve.details.year"
        },
        projectEquipment: "Work.items.safety-valve.projectEquipment"
    },
    {
        id: 9,
        slug: "gas-distribution-block",
        titleKey: "Work.items.gas-distribution-block.title",
        descriptionKey: "Work.items.gas-distribution-block.description",
        images: ["/work/gas_distribution_fir.png", "/work/gas_distribution_sec.png", "/work/gas_distribution_thr.png"],
        category: "Work.categories.distribution",
        query: "distribution",
        details: {
            object: "Work.items.gas-distribution-block.details.object",
            location: "Work.items.gas-distribution-block.details.location",
            client: "Work.items.gas-distribution-block.details.client",
            purpose: "Work.items.gas-distribution-block.details.purpose",
            specs: "Work.items.gas-distribution-block.details.specs",
            status: "Work.items.gas-distribution-block.details.status",
            year: "Work.items.gas-distribution-block.details.year"
        },
        projectEquipment: "Work.items.gas-distribution-block.projectEquipment"
    },
    {
        id: 10,
        slug: "compressor-module",
        titleKey: "Work.items.compressor-module.title",
        descriptionKey: "Work.items.compressor-module.description",
        images: ["/work/compressor_module_fir.png", "/work/compressor_module_sec.png", "/work/compressor_module_thr.png"],
        category: "Work.categories.compressor",
        query: "compressor",
        details: {
            object: "Work.items.compressor-module.details.object",
            location: "Work.items.compressor-module.details.location",
            client: "Work.items.compressor-module.details.client",
            purpose: "Work.items.compressor-module.details.purpose",
            specs: "Work.items.compressor-module.details.specs",
            status: "Work.items.compressor-module.details.status",
            year: "Work.items.compressor-module.details.year"
        },
        projectEquipment: "Work.items.compressor-module.projectEquipment"
    },
    {
        id: 11,
        slug: "gas-cylinder",
        titleKey: "Work.items.gas-cylinder.title",
        descriptionKey: "Work.items.gas-cylinder.description",
        images: ["/work/cylinder_fir.png", "/work/cylinder_sec.png", "/work/cylinder_thr.png"],
        category: "Work.categories.storage",
        query: "storage",
        details: {
            object: "Work.items.gas-cylinder.details.object",
            location: "Work.items.gas-cylinder.details.location",
            client: "Work.items.gas-cylinder.details.client",
            purpose: "Work.items.gas-cylinder.details.purpose",
            specs: "Work.items.gas-cylinder.details.specs",
            status: "Work.items.gas-cylinder.details.status",
            year: "Work.items.gas-cylinder.details.year"
        },
        projectEquipment: "Work.items.gas-cylinder.projectEquipment"
    },
    {
        id: 12,
        slug: "control-cabinet",
        titleKey: "Work.items.control-cabinet.title",
        descriptionKey: "Work.items.control-cabinet.description",
        images: ["/work/control_cabinet_fir.png", "/work/control_cabinet_sec.png", "/work/control_cabinet_thr.png"],
        category: "Work.categories.control",
        query: "control",
        details: {
            object: "Work.items.control-cabinet.details.object",
            location: "Work.items.control-cabinet.details.location",
            client: "Work.items.control-cabinet.details.client",
            purpose: "Work.items.control-cabinet.details.purpose",
            specs: "Work.items.control-cabinet.details.specs",
            status: "Work.items.control-cabinet.details.status",
            year: "Work.items.control-cabinet.details.year"
        },
        projectEquipment: "Work.items.control-cabinet.projectEquipment"
    }
]; */