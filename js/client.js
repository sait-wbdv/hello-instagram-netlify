console.log('Hello World!');

const init = async () => {
  const response = await fetch('/.netlify/functions/lunch');
  const data = await response.json();

  const lunchFigure = data.find((item) => item.caption.startsWith('#lunch'));

  document.querySelector('.container').innerHTML = `
    <figure>
      <img src="${lunchFigure.url}" alt="Tony's image">
      <figcaption>${lunchFigure.caption}</figcaption>
    </figure>
  `
  console.log(data);
}

init();