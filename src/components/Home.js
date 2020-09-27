import React from 'react';
import Dashboard from './Dashboard';
import {useHistory, useParams} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Home = () => {
  let history = useHistory ();
  const navigateTo = () => history.push ('/java'); //eg.history.push('/login');

  return (
    <div className="container">
      <Dashboard />
      <div className="py-4">
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
            <option href="/reactjs">ReactJs</option>
          </select>
        </form>
        <p className="lead">
          Java is a set of computer software and specifications developed by James Gosling at Sun Microsystems, which was later acquired by the Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to enterprise servers and supercomputers. Java applets, which are less common than standalone Java applications, were commonly run in secure, sandboxed environments to provide many features of native applications through being embedded in HTML pages.

          Writing in the Java programming language is the primary way to produce code that will be deployed as byte code in a Java virtual machine (JVM); byte code compilers are also available for other languages, including Ada, JavaScript, Python, and Ruby. In addition, several languages have been designed to run natively on the JVM, including Clojure, Groovy, and Scala. Java syntax borrows heavily from C and C++, but object-oriented features are modeled after Smalltalk and Objective-C.[12] Java eschews certain low-level constructs such as pointers and has a very simple memory model where objects are allocated on the heap (while some implementations e.g. all currently supported by Oracle, may use escape analysis optimization to allocate on the stack instead) and all variables of object types are references. Memory management is handled through integrated automatic garbage collection performed by the JVM.
        </p>
      </div>
    </div>
  );
};

export default Home;
