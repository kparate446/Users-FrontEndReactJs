import React from 'react';
import Dashboard from './Dashboard';

const ReactJs = () => {
  return (
    <div className="container">
      <Dashboard />
      <div className="py-4">
        <h1>
          Home Page
        </h1>
        <form>
          <select
            name="cars"
            id="cars"
            style={{
              padding: '1%',
              width: '20%',
            }}
          >
            <option value="volvo">Dropdown</option>
            <option value="saab">Java</option>
            <option value="opel">Spring Boot</option>
            <option value="audi">ReactJs</option>
          </select>
        </form>
        <p className="lead">
          React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called "FaxJS".[34][35] He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012.[36] It was open-sourced at JSConf US in May 2013.[35]

          React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebook's React Conf in February 2015 and open-sourced in March 2015.

          On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React library for building user interfaces.[37] React Fiber was to become the foundation of any future improvements and feature development of the React library.
        </p>
      </div>
    </div>
  );
};

export default ReactJs;
