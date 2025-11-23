"use client"

import React from 'react';
import BGMainBlock from '@/app/components/BgMainBlock';
import CategoriesNews from '@/app/containers/CategoriesNews';

const News = () => {
    return (
        <main>

            <BGMainBlock title={"News"} description={"Stay tuned with our news, expert tips and articles."} image="/images/news_bg.png" />

            <CategoriesNews />

        </main>
    );
};

export default News;