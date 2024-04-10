import React from "react";
import "./Job.css";
const Job = () => {
  return (
    <>
      <h1 className="md:text-4xl font-bold mb-5">Job Opportunities</h1>
      <div className="flex items-center justify-center mt-5 mb-5 flex-wrap gap-5">
        <div class=" job text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <ul>
            <li>Power Plants & Power Industries</li>
            <li>Manufacturing Industries</li>
            <li>Construction Projects</li>
            <li>Refineries & Dockyard</li>
          </ul>
        </div>
        <div class=" job text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <ul>
            <li>Malls & Airports</li>
            <li>Nuclear Plants</li>
            <li>Chemical Plants</li>
            <li>Municipal Corporation</li>
          </ul>
        </div>
        <div class=" job text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <ul>
            <li>Research Labs & Centres</li>
            <li>Automobile Industries</li>
            <li>Merchant Navy</li>
            <li>Shipping Corporations</li>
          </ul>
        </div>
        <div class=" job text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <ul>
            <li>Cement Industries</li>
            <li>Explosive Industries</li>
            <li>Textiles Industries</li>
            <li>Defence Industries</li>
          </ul>
        </div>
        <div class=" job text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <ul>
            <li>Locomotive Industries</li>
            <li>Mines & Coal-fields</li>
            <li>Steel Plant</li>
            <li>Hospitals</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Job;
