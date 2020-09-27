import React from 'react';
import Dashboard from './Dashboard';

const SpringBoot = () => {
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
            <option href="/home">Dropdown</option>
            <option href="java">java</option>
            <option href="/springboot">Spring Boot</option>
            <option href="/reactjs">ReactJs</option>         {' '}
          </select>
        </form>
        <p className="lead">
          The Spring Framework has its own Aspect-oriented programming (AOP) framework that modularizes cross-cutting concerns in aspects. The motivation for creating a separate AOP framework comes from the belief that it should be possible to provide basic AOP features without too much complexity in either design, implementation, or configuration. The Spring AOP framework also takes full advantage of the Spring container.

          The Spring AOP framework is proxy pattern-based, and is configured at run time. This removes the need for a compilation step or load-time weaving. On the other hand, interception only allows for public method-execution on existing objects at a join point.

          Compared to the AspectJ framework, Spring AOP is less powerful, but also less complicated. Spring 1.2 includes support to configure AspectJ aspects in the container. Spring 2.0 added more integration with AspectJ; for example, the pointcut language is reused and can be mixed with Spring AOP-based aspects. Further, Spring 2.0 added a Spring Aspects library that uses AspectJ to offer common Spring features such as declarative transaction management and dependency injection via AspectJ compile-time or load-time weaving. SpringSource also uses AspectJ AOP in other Spring projects such as Spring Roo and Spring Insight, with Spring Security also offering an AspectJ-based aspect library.
          {' '}
        </p>
      </div>
    </div>
  );
};

export default SpringBoot;
