//Задания с 2 по 4

const positionAt = (anchor, position, element) => {
  const anchorCoords = anchor.getBoundingClientRect();
  
  switch (position){
    case 'top-out':
      element.style.left = `${anchorCoords.left}px`;
      element.style.top = `${anchorCoords.top - element.clientHeight}px`;
      break;
    case 'bottom-out':
      element.style.left = `${anchorCoords.left}px`;
      element.style.top = `${anchorCoords.top + anchor.clientHeight}px`;
      break;
    case 'right-out':
      element.style.left = `${anchorCoords.left + anchor.clientWidth}px`;
      element.style.top = `${anchorCoords.top}px`;
      break;
    case 'top-in':
      element.style.left = `${anchorCoords.left}px`;
      element.style.top = `${anchorCoords.top}px`;
      break;
    case 'right-in':
      element.style.width = '100px';
      element.style.left = `${anchorCoords.left + anchor.offsetWidth - element.offsetWidth}px`;
      element.style.top = `${anchorCoords.top}px`;
      break;
    case 'bottom-in':
      element.style.left = `${anchorCoords.left}px`;
      element.style.top = `${anchorCoords.top + anchor.offsetHeight - element.offsetHeight}px`;
      break;
    default: 
      break;
  }
};

function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");