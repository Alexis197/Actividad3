import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

// Este es un array de objetos que contiene la información de cada slide del carrusel, incluyendo la URL de la imagen (src),
// el texto alternativo (altText), el texto del caption (caption),
// y una clave única (key).
const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

// activeIndex mantiene el índice de la slide activa
//animating controla si la animación está en curso para evitar cambios durante la misma.

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    //Avanza al siguiente slide. Si la animación está en curso (animating), no hace nada. Calcula el próximo índice y actualiza activeIndex.
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    //Cambia a un índice específico si no hay animación en curso.
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    //slides: Mapea cada objeto en el array items a un componente CarouselItem. 
    //Maneja las animaciones con onExiting y onExited para actualizar el estado animating.
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
    //Contiene la estructura principal del carrusel, incluyendo controles y los slides.
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
      //Muestra los indicadores del carrusel y permite seleccionar un slide específico.
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
      //Añade controles de navegación previos y siguientes.
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;
