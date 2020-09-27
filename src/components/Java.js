import React from 'react';
import Dashboard from './Dashboard';

const Java = () => {
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
            <option href="/reactjs">ReactJs</option>
          </select>
        </form>
        <p className="lead">
          Java (Indonesian: Jawa, Indonesian pronunciation: [ˈdʒawa]; Javanese: ꦗꦮ; Sundanese: ᮏᮝ) is an island of Indonesia, bordered by the Indian Ocean on the south and the Java Sea on the north. With a population of over 141 million (Java only) or 145 million (including the inhabitants of its surrounding islands), Java constitutes 56.7 percent of the Indonesian population and is the world's most populous island.[1] The Indonesian capital city, Jakarta, is located on its northwestern coast. Much of the well-known part of Indonesian history took place on Java. It was the centre of powerful Hindu-Buddhist empires, the Islamic sultanates, and the core of the colonial Dutch East Indies. Java was also the center of the Indonesian struggle for independence during the 1930s and 1940s. Java dominates Indonesia politically, economically and culturally. Four of Indonesia's eight UNESCO world heritage sites are located in Java: Ujung Kulon National Park, Borobudur Temple, Prambanan Temple, and Sangiran Early Man Site.

          Formed mostly as the result of volcanic eruptions from geologic subduction between the Sunda Plate and Australian Plate, Java is the 13th largest island in the world and the fifth largest in Indonesia by landmass at about 138,800 square kilometres (53,600 sq mi). A chain of volcanic mountains forms an east–west spine along the island. Three main languages are spoken on the island: Javanese, Sundanese, and Madurese, where Javanese is the most spoken; it is the native language of about 60 million Javanese people in Indonesia, most of whom live on Java. Most residents are bilingual, speaking Indonesian (the official language of Indonesia) as their first or second language. While the majority of the people of Java are Muslim, Java's population comprises people of diverse religious beliefs, ethnicities, and cultures.

          Java is divided into four administrative provinces Banten, West Java, Central Java, and East Java, and two special regions, Jakarta and Yogyakarta.
        </p>
      </div>
    </div>
  );
};

export default Java;
