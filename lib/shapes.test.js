const {Triangle, Circle, Square} = require("./shapes")

describe("shape", () => {
    describe("triangle", () => {
        it("should render a triangle with a given color", () => {
            const triangle = new Triangle();
            const color = triangle.setcolor("blue")
            expect(triangle.render()).toEqual(`<svg height="200" width="300" 
        xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,0 250,200 50,200" fill="${color}" />
            <text fill="${this.textColor}" font-size="50" x="145" y="140" 
            text-anchor="middle">${this.logoText}</text>
          </svg>`)
        })
    })
});


describe("shape", () => {
    describe("square", () => {
        it("should render a square with a given color", () => {
            const square = new Square(); 
            const color = square.setcolor("green")
            expect(square.render()).toEqual(`<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <rect width="250" height="250" fill="${color}" />
        <text fill="${this.textColor}" font-size="75px" x="55" y="145">${this.logoText}</text>
      </svg>`)
        })
    })
})


describe("shape", () => {
    describe("circle", () => {
        it ("should render a square with a given color", () => {
            const circle = new Circle();
            const color = circle.setcolor("pink")
            expect(circle.render()).toEqual(`<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="250" r="250" fill="${color}" />
    <text fill="${this.textColor}" font-size="75px" x="50%" y="50%" text-anchor="middle">${this.logoText}</text>
    </svg>`)
        })
    }
)

});