import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import routes from './constants/routes';
import WhatIsTailwind from './pages/Modules/Introduction/WhatIsTailwind';
import WhyUseTailwind from './pages/Modules/Introduction/WhyUseTailwind';
import TailwindIntegration from './pages/Modules/Introduction/TailwindIntegrations';
import WorkshopActivities from './pages/Modules/Activities/WorkShopActivities';
import TailwindConsumer from './pages/Modules/Introduction/TailwindConsumer';

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.definition} element={<WhatIsTailwind />} />
      <Route path={routes.whyuse} element={<WhyUseTailwind />} />
      <Route path={routes.integration} element={<TailwindIntegration />} />
      <Route path={routes.tailwindconsumer} element={<TailwindConsumer />} />
      <Route path={routes.activities} element={<WorkshopActivities />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App
