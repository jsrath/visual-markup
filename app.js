function displayTags() {
  window.localStorage.clear();
  let all = document.querySelectorAll('*');
  all.forEach((element, index) => {
    let originalBorder = window.getComputedStyle(element).border;
    window.localStorage.setItem(`border${index}`, `${originalBorder}`)
    let originalShadow = window.getComputedStyle(element).boxShadow;
    window.localStorage.setItem(`shadow${index}`, `${originalShadow}`)
    let p = document.createElement('p');
    p.className = 'css-viz';
    p.addEventListener('click', () => {
      p.innerHTML.select();
      document.execCommand('copy');
      alert("Copied the text: " + p.innerHTML);
    });

    if (element.id) {
      p.innerText = `${element.id}`;
    } else if (element.className) {
      p.innerText = `${element.className}`;
    } else {
      p.innerText = `${element.nodeName.toLowerCase()}`;
    }

    Object.assign(p.style, {
      margin: 0,
      display: 'inline',
      padding: '5px',
      position: 'absolute',
      color: 'white',
      fontSize: '10px',
      fontWeight: 'normal',
      textTransform: 'lowercase',
      fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif'
    });

    document.body.style.overflowX = 'hidden';

    switch (element.nodeName) {
      case 'P':
        element.style.borderColor = 'transparent';
        element.style.boxShadow = '0 0 0 1px green';
        p.style.backgroundColor = 'green'
        break;

      case 'DIV':
        element.style.borderColor = 'transparent';
        element.style.boxShadow = '0 0 0 1px red';
        p.style.backgroundColor = 'red'
        break;

      case 'IMG':
        element.style.borderColor = 'transparent';
        element.style.boxShadow = '0 0 0 1px blue';
        p.style.backgroundColor = 'blue'
        break;

      case 'A':
        element.style.borderColor = 'transparent';
        element.style.boxShadow = '0 0 0 1px purple';
        p.style.backgroundColor = 'purple'
        break;

      case 'UL':
        element.style.borderColor = 'transparent';
        element.style.boxShadow = '0 0 0 1px navy';
        p.style.backgroundColor = 'navy'
        break;

      case 'LI':
        element.style.borderColor = 'transparent';
        element.style.boxShadow = '0 0 0 1px deepPink';
        p.style.backgroundColor = 'deepPink'
        break;

      case 'H1':
        element.style.borderColor = 'transparent';
        element.style.boxShadow = '0 0 0 1px orange';
        p.style.backgroundColor = 'orange'
        break;

      case 'H2':
        element.style.borderColor = 'transparent';
        element.style.boxShadow = '0 0 0 1px teal';
        p.style.backgroundColor = 'teal'
        break;

      case 'H3':
        element.style.borderColor = 'transparent';
        element.style.boxShadow = '0 0 0 1px maroon';
        p.style.backgroundColor = 'maroon'
        break;

      case 'H4':
      case 'H5':
      case 'H6':
        element.style.borderColor = 'transparent';
        element.style.boxShadow = '0 0 0 1px olive';
        p.style.backgroundColor = 'olive'
        break;

      default:
        element.style.borderColor = 'transparent';
        element.style.boxShadow = '0 0 0 1px darkRed';
        p.style.backgroundColor = 'darkRed'
    }
    element.insertBefore(p, element.childNodes[0]);
  });
}

function removeTags() {
  let tags = document.querySelectorAll('.css-viz');
  tags.forEach((element) => {
    element.parentNode.removeChild(element)
  });

  let all = document.querySelectorAll('*');
  all.forEach((element, index) => {
    element.style.border = window.localStorage.getItem(`border${index}`)
    element.style.boxShadow = window.localStorage.getItem(`shadow${index}`)
  });
  window.localStorage.clear();
}

if (document.querySelector('.css-viz') === null) {
  displayTags();
} else {
  removeTags();
}
