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
            .stroke({color: this.color,  width: 2})
            .move(props.x, props.y);

        // Draw points
        const points = props.data.points;

        const point1 = draw.text(points[0])
            .move(props.x - this.text.size, props.y + 3)
            .font(this.text).rotate(props.rotateText);
        const point2 = draw.text(points[1])
            .move(props.x + props.w + 3, props.y)
            .font(this.text).rotate(props.rotateText);
        const point3 = draw.text(points[2])
            .move(props.x + props.w + 3, props.y + props.h)
            .font(this.text).rotate(props.rotateText);
        const point4 = draw.text(points[3])
            .move(props.x - this.text.size, props.y + props.h - this.text.size)
            .font(this.text).rotate(props.rotateText);

        // Draw params
        const params = props.data.params;

        const param1 = draw.text(`${params[0]}`)
            .move(props.x + 3, props.y + 3)
            .font(this.text).rotate(props.rotateText);
        const param2 = draw.text(`${params[1]}`)
            .move(props.x + props.w - this.text.size, props.y + 3)
            .font(this.text).rotate(props.rotateText);
        const param3 = draw.text(`${params[2]}`)
            .move(props.x + props.w - this.text.size - 4, props.y + props.h - this.text.size - 3)
            .font(this.text).rotate(props.rotateText);
        const param4 = draw.text(`${params[3]}`)
            .move(props.x + 3, props.y + props.h - this.text.size - 3)
            .font(this.text).rotate(props.rotateText);

        // Draw text
        const textBox = draw.text(props.data.text)
            .font({
                ...this.text,
                size: 11
            });
        const widthTextBox = textBox.node.getBBox().width;
        const heightTextBox = textBox.node.getBBox().height;
        textBox.move(props.x + ( props.w  - widthTextBox)/2, props.y + (props.h - heightTextBox)/2)

        // Draw x
        const xs = props.data.x;
        const x1 = draw.text('x').move(props.x - 3, props.y - 4).stroke(xs.color).font({...this.text, size: 10}).opacity(xs.x1 ? 1 : 0);
        const x2 = draw.text('x').move(props.x + props.w - 3, props.y - 5).stroke(xs.color).font({...this.text, size: 10}).opacity(xs.x2 ? 1 : 0);
        const x3 = draw.text('x').move(props.x + props.w - 3, props.y + props.h - 5).stroke(xs.color).font({...this.text, size: 10}).opacity(xs.x3 ? 1 : 0);
        const x4 = draw.text('x').move(props.x - 3, props.y + props.h - 5).stroke(xs.color).font({...this.text, size: 10}).opacity(xs.x4 ? 1 : 0);

        // Draw digit
        const digit = props.data.digit;
        const digit1 = draw.text(`${digit.point[0]}`).move(props.x - 10, props.y + (props.h - 10)/2).stroke(digit.color).font({...this.text, size: 10});
        const digit2 = draw.text(`${digit.point[1]}`).move(props.x + ( props.w  - 10)/2, props.y - 10).stroke(digit.color).font({...this.text, size: 10});
        const digit3 = draw.text(`${digit.point[2]}`).move(props.x + props.w + 3, props.y + (props.h - 10)/2).stroke(digit.color).font({...this.text, size: 10});
        const digit4 = draw.text(`${digit.point[3]}`).move(props.x + ( props.w  - 10)/2, props.y + props.h + 5).stroke(digit.color).font({...this.text, size: 10});

        groupBox.add(box)
            .add(textBox)
            .add(point1).add(point2).add(point3).add(point4)
            .add(param1).add(param2).add(param3).add(param4)
            .add(x1).add(x2).add(x3).add(x4)
            .add(digit1).add(digit2).add(digit3).add(digit4);

        groupBox.transform(props.data.transfrom)
    }

    render(data) {
        const draw = this.draw;
        const tileDetail = draw.text(this.title);
        tileDetail.move(( this.w  - tileDetail.node.getBBox().width)/2, this.h - 20);
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