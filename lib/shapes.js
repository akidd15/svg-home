//constructor class for shape with color text, text color

class Triangle {
    constructor(logoText, textColor, logoShape) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.logoShape = logoShape;
   
    }
    setcolor(shapeColor) {
        this.shapeColor = shapeColor;
        return shapeColor;
    }

    render() {
        return `<svg height="200" width="300" 
        xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,0 250,200 50,200" fill="${this.shapeColor}" />
            <text fill="${this.textColor}" font-size="50" x="145" y="140" 
            text-anchor="middle">${this.logoText}</text>
          </svg>`
    
    };
}

  
//module.exports = triangle;

class Circle {
    constructor(logoText, textColor, logoShape) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.logoShape = logoShape;

    }
setcolor(shapeColor) {
    this.shapeColor = shapeColor;
    return shapeColor;
}

render() {
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="250" r="250" fill="${this.shapeColor}" />
    <text fill="${this.textColor}" font-size="75px" x="50%" y="50%" text-anchor="middle">${this.logoText}</text>
    </svg>`
}
};
//module.exports = circle;

class Square {
    constructor(logoText, textColor, logoShape) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.logoShape = logoShape;
}
setcolor(shapeColor) {
    this.shapeColor = shapeColor;
    return shapeColor;
}

render(){
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <rect width="250" height="250" fill="${this.shapeColor}" />
        <text fill="${this.textColor}" font-size="75px" x="55" y="145">${this.logoText}</text>
      </svg>`
}};

module.exports = {Triangle, Circle, Square}

//function renderLogo(data) {

