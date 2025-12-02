export interface NewsArticle {
    id: number;
    titleKey: string;
    descriptionKey: string;
    date: string; // ISO
    dateLabel: string; // отображение на сайте
    image: string;
    category: "News.categories.allNews" | "News.categories.methane" | "News.categories.gas" | "News.categories.oil" | "News.categories.fuel" | "News.categories.petrol";
    query: "all" | "methane" | "gas" | "oil" | "fuel" | "petrol"; /* all news */
}

export const articles: NewsArticle[] = [
    {
        id: 7,
        titleKey: "News.articles.1.title",
        descriptionKey: "News.articles.1.description",
        date: "2025-11-15",
        dateLabel: "News.articles.1.dateLabel",
        image: "/news/methane_capture.jpg",
        category: "News.categories.methane",
        query: "methane"
    },
    {
        id: 2,
        titleKey: "News.articles.2.title",
        descriptionKey: "News.articles.2.description",
        date: "2022-03-19",
        dateLabel: "News.articles.2.dateLabel",
        image: "/news/gas_market.jpg",
        category: "News.categories.gas",
        query: "gas"
    },
    {
        id: 15,
        titleKey: "News.articles.3.title",
        descriptionKey: "News.articles.3.description",
        date: "2021-08-05",
        dateLabel: "News.articles.3.dateLabel",
        image: "/news/petrol_innovation.jpg",
        category: "News.categories.petrol",
        query: "petrol"
    },
    {
        id: 11,
        titleKey: "News.articles.4.title",
        descriptionKey: "News.articles.4.description",
        date: "2020-09-22",
        dateLabel: "News.articles.4.dateLabel",
        image: "/news/fuel_efficiency.jpg",
        category: "News.categories.fuel",
        query: "fuel"
    },
    {
        id: 4,
        titleKey: "News.articles.5.title",
        descriptionKey: "News.articles.5.description",
        date: "2023-05-17",
        dateLabel: "News.articles.5.dateLabel",
        image: "/news/methane_ai.jpg",
        category: "News.categories.methane",
        query: "methane"
    },
    {
        id: 9,
        titleKey: "News.articles.6.title",
        descriptionKey: "News.articles.6.description",
        date: "2021-11-09",
        dateLabel: "News.articles.6.dateLabel",
        image: "/news/oil_export.jpg",
        category: "News.categories.oil",
        query: "oil"
    },
    {
        id: 18,
        titleKey: "News.articles.7.title",
        descriptionKey: "News.articles.7.description",
        date: "2022-12-02",
        dateLabel: "News.articles.7.dateLabel",
        image: "/news/gas_storage.jpg",
        category: "News.categories.gas",
        query: "gas"
    },
    {
        id: 3,
        titleKey: "News.articles.8.title",
        descriptionKey: "News.articles.8.description",
        date: "2023-08-30",
        dateLabel: "News.articles.8.dateLabel",
        image: "/news/fuel_market.jpg",
        category: "News.categories.fuel",
        query: "fuel"
    },
    {
        id: 1,
        titleKey: "News.articles.9.title",
        descriptionKey: "News.articles.9.description",
        date: "2020-06-12",
        dateLabel: "News.articles.9.dateLabel",
        image: "/news/methane_pipeline.jpg",
        category: "News.categories.methane",
        query: "methane"
    },
    {
        id: 14,
        titleKey: "News.articles.10.title",
        descriptionKey: "News.articles.10.description",
        date: "2021-02-16",
        dateLabel: "News.articles.10.dateLabel",
        image: "/news/petrol_network.jpg",
        category: "News.categories.petrol",
        query: "petrol"
    },
    {
        id: 6,
        titleKey: "News.articles.11.title",
        descriptionKey: "News.articles.11.description",
        date: "2022-05-28",
        dateLabel: "News.articles.11.dateLabel",
        image: "/news/oil_refinery.jpg",
        category: "News.categories.oil",
        query: "oil"
    },
    {
        id: 13,
        titleKey: "News.articles.12.title",
        descriptionKey: "News.articles.12.description",
        date: "2020-10-01",
        dateLabel: "News.articles.12.dateLabel",
        image: "/news/gas_investment.jpg",
        category: "News.categories.gas",
        query: "gas"
    },
    {
        id: 8,
        titleKey: "News.articles.13.title",
        descriptionKey: "News.articles.13.description",
        date: "2023-04-20",
        dateLabel: "News.articles.13.dateLabel",
        image: "/news/methane_electricity.jpg",
        category: "News.categories.methane",
        query: "methane"
    },
    {
        id: 16,
        titleKey: "News.articles.14.title",
        descriptionKey: "News.articles.14.description",
        date: "2021-04-08",
        dateLabel: "News.articles.14.dateLabel",
        image: "/news/fuel_safety.jpg",
        category: "News.categories.fuel",
        query: "fuel"
    },
    {
        id: 12,
        titleKey: "News.articles.15.title",
        descriptionKey: "News.articles.15.description",
        date: "2022-03-10",
        dateLabel: "News.articles.15.dateLabel",
        image: "/news/petrol_tech.jpg",
        category: "News.categories.petrol",
        query: "petrol"
    },
    {
        id: 17,
        titleKey: "News.articles.16.title",
        descriptionKey: "News.articles.16.description",
        date: "2025-01-22",
        dateLabel: "News.articles.16.dateLabel",
        image: "/news/methane_storage.jpg",
        category: "News.categories.methane",
        query: "methane"
    },
    {
        id: 5,
        titleKey: "News.articles.17.title",
        descriptionKey: "News.articles.17.description",
        date: "2025-07-14",
        dateLabel: "News.articles.17.dateLabel",
        image: "/news/oil_pipeline_maintenance.jpg",
        category: "News.categories.oil",
        query: "oil"
    },
    {
        id: 10,
        titleKey: "News.articles.18.title",
        descriptionKey: "News.articles.18.description",
        date: "2025-03-05",
        dateLabel: "News.articles.18.dateLabel",
        image: "/news/fuel_industry_innovation.jpg",
        category: "News.categories.fuel",
        query: "fuel"
    }
];
