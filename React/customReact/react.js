
const customRender = function(reactElement,container){
    const domEle = document.createElement(reactElement.type);
    domEle.innerHTML = reactElement.children;
    // domEle.setAttribute('href',reactElement.props.href);
    // domEle.setAttribute('target',reactElement.props.target);
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domEle.setAttribute(prop,reactElement.props[prop]);
    }

    container.appendChild(domEle);
}

const reactElement = {       //we have created this by ourselves but react does it under the hood
    type : 'a',
    props : {
        href : "https://google.com",
        target : '_blank'
    },
    children : 'click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer);