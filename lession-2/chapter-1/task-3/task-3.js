const element = document.querySelector('[data-widget-name]');
console.log(element.dataset.widgetName);

const links = Array.from(document.querySelectorAll('a'));
const outerLinks = links.filter((link) => {
  const attribute = link.getAttribute('href') ?? '';
  if(attribute.indexOf('http://internal.com') === 0){
    return false;
  }
  if(attribute.indexOf('://') !== -1){
    return true;
  }

  return false;
});

outerLinks.forEach((link) => link.style.color = 'orange');