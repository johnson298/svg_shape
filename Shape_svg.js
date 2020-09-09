class Shape {
    constructor(element, baseWidth, w, h, scale = 1, title = '') {
        this.element = element;
        this.baseWidth = baseWidth;
        this.scale = scale;
        this.w = w;
        this.h = h;
        this.title = title;
        this.color = '#000';
        this.draw = SVG().addTo(this.element).size(this.w, this.h);
        this.text = {
            size: 14,
            family: 'segoe UI, sans-serif'
        }
    }

    box(props) {
        const draw = this.draw;
        const groupBox = draw.group();
        const box = draw.rect(props.w, props.h)
            .fill(props.fill || 'transparent')
            .stroke({color: 'red',  width: 2})
            .move(props.x, props.y);

        // Draw points
        const points = props.data.points;

        const point1 = draw.text(points[0])
            .move(props.x - this.text.size, props.y + 3)
            .font({...this.text, weight: '500'}).rotate(props.rotateText);
        const point2 = draw.text(points[1])
            .move(props.x + props.w + 5, props.y)
            .font({...this.text, weight: '500'}).rotate(props.rotateText);
        const point3 = draw.text(points[2])
            .move(props.x + props.w + 3, props.y + props.h)
            .font({...this.text, weight: '500'}).rotate(props.rotateText);
        const point4 = draw.text(points[3])
            .move(props.x - this.text.size, props.y + props.h - this.text.size)
            .font({...this.text, weight: '500'}).rotate(props.rotateText);

        // Draw params
        const params = props.data.params;

        const param1 = draw.text(`${params[0]}`)
            .move(props.x + 3, props.y + 3)
            .font({...this.text, fill: 'red', weight: '500'}).rotate(props.rotateText);
        const param2 = draw.text(`${params[1]}`)
            .move(props.x + props.w - this.text.size - 5, props.y + 3)
            .font({...this.text, fill: 'red', weight: '500'}).rotate(props.rotateText);
        const param3 = draw.text(`${params[2]}`)
            .move(props.x + props.w - this.text.size - 4, props.y + props.h - this.text.size - 3)
            .font({...this.text, fill: 'red', weight: '500'}).rotate(props.rotateText);
        const param4 = draw.text(`${params[3]}`)
            .move(props.x + 3, props.y + props.h - this.text.size - 3)
            .font({...this.text, fill: 'red', weight: '500'}).rotate(props.rotateText);

        // Draw text
        const textBox1 = draw.text(props.data.text.tspan1).font({...this.text,size: 11, weweight: 400}).fill('red');
        const widthTextBox1 = textBox1.node.getBBox().width;
        const heightTextBox1 = textBox1.node.getBBox().height;
        textBox1.move(props.x + ( props.w  - widthTextBox1)/2, props.y + (props.h - heightTextBox1)/2);

        const textBox2 = draw.text(props.data.text.tspan2).font({...this.text,size: 11, weight: 400});
        const widthTextBox2 = textBox2.node.getBBox().width;
        const heightTextBox2 = textBox2.node.getBBox().height;
        textBox2.move(props.x + ( props.w  - widthTextBox2)/2, props.y + (props.h)/2 + 4);

        // Draw x
        const xs = props.data.x;
        const x1 = draw.text('x').move(props.x - 3, props.y - 4).stroke(xs.color).font({...this.text, size: 12}).opacity(xs.x1 ? 1 : 0);
        const x2 = draw.text('x').move(props.x + props.w - 3, props.y - 5).stroke(xs.color).font({...this.text, size: 12}).opacity(xs.x2 ? 1 : 0);
        const x3 = draw.text('x').move(props.x + props.w - 3, props.y + props.h - 5).stroke(xs.color).font({...this.text, size: 12}).opacity(xs.x3 ? 1 : 0);
        const x4 = draw.text('x').move(props.x - 3, props.y + props.h - 5).stroke(xs.color).font({...this.text, size: 12}).opacity(xs.x4 ? 1 : 0);

        // Draw digit
        const digit = props.data.digit;
        const digit1 = draw.text(function(add) {add.tspan(`${digit.point[0]}`).font({weight: 100}).fill('blue')});
        digit1.move(props.x - digit1.node.getBBox().width + 2, props.y + (props.h - 12)/2)
            .stroke(digit.color).font({...this.text, size: 12});

        const digit2 = draw.text(function(add) {add.tspan(`${digit.point[1]}`).font({weight: 100}).fill('blue')})
            .move(props.x + ( props.w  - 12)/2, props.y - 18)
            .stroke(digit.color).font({...this.text, size: 12});

        const digit3 = draw.text(function(add) {add.tspan(`${digit.point[2]}`).font({weight: 100}).fill('blue')})
            .move(props.x + props.w + 3, props.y + (props.h - 12)/2)
            .stroke(digit.color).font({...this.text, size: 12});

        if(digit.inside && digit.inside === 3){
            digit3.move(props.x + props.w - 5 - digit3.node.getBBox().width, props.y + (props.h - 12)/2)
        }
        const digit4 = draw.text(function(add) {add.tspan(`${digit.point[3]}`).font({weight: 100}).fill('blue')})
            .move(props.x + ( props.w  - 12)/2, props.y + props.h + 5)
            .stroke(digit.color).font({...this.text, size: 12});

        if(digit.inside && digit.inside === 4){
            digit4.move(props.x + ( props.w  - 12)/2, props.y + props.h  - 18);
        }

        groupBox.add(box)
            .add(textBox1)
            .add(textBox2)
            .add(point1).add(point2).add(point3).add(point4)
            .add(param1).add(param2).add(param3).add(param4)
            .add(x1).add(x2).add(x3).add(x4)
            .add(digit1).add(digit2).add(digit3).add(digit4);

        groupBox.transform(props.data.transfrom)
    }

    render(data) {
        const draw = this.draw;
        const tileDetail = draw.text(this.title);
        tileDetail.move(( this.w  - tileDetail.node.getBBox().width)/2, this.h - 50).font(this.text);
        draw.text(data.triangleText)
            .move(data.dataShape[0].xX + this.baseWidth + 10, data.dataShape[0].yY + this.baseWidth/2 + 10)
            .font({...this.text, weight: 400});
        data.dataShape.forEach(item => {
            this.box({
                w: this.baseWidth * item.width,
                h: this.baseWidth * item.height,
                x: item.xX,
                y: item.yY,
                data: item,
                rotateText: -(item?.transfrom?.rotate)
            })
        })
    }
}
window.Shape = Shape;
if(typeof window.Shape === "undefined"){
    window.Shape = Shape;
}