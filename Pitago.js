const Pitago = function(_element, _wLine) {
    this.w = 500;
    this.h = 330;
    this.wLine = _wLine;
    this.color = '#000';
    this.baseW = 50;
    this.draw = SVG().addTo(_element).size(this.w, this.h);
    this.styleLine = { 
        width: _wLine, 
        color: '#9C27B0', 
        linecap: 'round' 
    };
    this.font = {
        size: 13,
        family: 'segoe UI',
        weight: 'bold'
    }
};

Pitago.prototype.drawPitago = function(data){
    const points = data.circle.map(e => `${e}`);
    const bot = data.bottom.map(e => `${e}`);
    const draw = this.draw;
    const wL = 35;
    const circleW = 35;
    const mid = 220;
    const groupBox = draw.group();
    draw.line(wL, this.h - wL, this.w/2, wL).stroke(this.styleLine); 
    draw.line(this.w/2, wL, this.w - wL, this.h - wL).stroke(this.styleLine);
    draw.line(wL, this.h - wL, this.w - wL, this.h - wL).stroke(this.styleLine); 

    const line4 = draw.line(wL, this.h - wL, this.w/2, this.h/3).stroke(this.styleLine);
    draw.line(this.w/2, this.h/3, this.w - wL, this.h - wL).stroke(this.styleLine);


    const hTr = Math.sqrt((line4.width()/2)**2 - (this.w/4 - wL)**2);
    draw.line(this.w/4, this.h - wL, this.w/4, mid).stroke(this.styleLine);
    draw.line(this.w/4, mid, this.w/2, this.h - wL).stroke(this.styleLine);
    draw.line(this.w/2, this.h - wL, this.w*3/4, mid).stroke(this.styleLine);
    draw.line(this.w*3/4, mid, this.w*3/4, this.h - wL).stroke(this.styleLine);

    draw.line(this.w/2, wL, this.w/2, this.h/3).stroke(this.styleLine);

    draw.circle(circleW).fill('#ebbcff').stroke({width: 1, color: '#9C27B0'}).move(this.w/2 - circleW/2, circleW/2);
    const t1 = draw.text(points[0]).font(this.font);
    const w1 = t1.node.getBBox().width;
    t1.move(this.w/2 - w1/2, wL - 8);

    draw.circle(circleW).fill('#ebbcff').stroke({width: 1, color: '#9C27B0'}).move(wL - circleW/2, this.h - wL - circleW/2);
    const t2 = draw.text(points[1]).font(this.font);
    const w2 = t2.node.getBBox().width;
    t2.move(wL - w2/2, this.h - wL - 8);

    draw.circle(circleW).fill('#ebbcff').stroke({width: 1, color: '#9C27B0'}).move(this.w - wL - circleW/2, this.h - wL - circleW/2);
    const t3 = draw.text(points[2]).font(this.font);
    const w3 = t3.node.getBBox().width;
    t3.move(this.w - wL - w3/2, this.h - wL - 8);

    draw.circle(circleW).fill('#ebbcff').stroke({width: 1, color: '#9C27B0'}).move(this.w/4 - circleW/2, mid - circleW/2);
    const t4 = draw.text(points[3]).font(this.font);
    const w4 = t4.node.getBBox().width;
    t4.move(this.w/4 - w4/2, mid - 8);

    draw.circle(circleW).fill('#ebbcff').stroke({width: 1, color: '#9C27B0'}).move(this.w/2 - circleW/2, this.h/3 - circleW/2);
    const t5 = draw.text(points[4]).font(this.font);
    const w5 = t5.node.getBBox().width;
    t5.move(this.w/2 - w5/2, this.h/3 - 8);

    draw.circle(circleW).fill('#ebbcff').stroke({width: 1, color: '#9C27B0'}).move(this.w*3/4 - circleW/2, mid - circleW/2);
    const t6 = draw.text(points[5]).font(this.font);
    const w6 = t6.node.getBBox().width;
    t6.move(this.w*3/4 - w6/2, mid - 8);

    draw.circle(circleW).fill('#ebbcff').stroke({width: 1, color: '#9C27B0'}).move(this.w/2 - circleW/2, this.h - wL - circleW/2);
    const t7 = draw.text(points[6]).font(this.font);
    const w7 = t7.node.getBBox().width;
    t7.move(this.w/2 - w7/2, this.h - wL - 8);

    draw.circle(circleW).fill('#ebbcff').stroke({width: 1, color: '#9C27B0'}).move(this.w/4 - circleW/2, this.h - wL - circleW/2);
    const t8 = draw.text(points[7]).font(this.font);
    const w8 = t8.node.getBBox().width;
    t8.move(this.w/4 - w8/2, this.h - wL - 8);

    draw.circle(circleW).fill('#ebbcff').stroke({width: 1, color: '#9C27B0'}).move(this.w*3/4 - circleW/2, this.h - wL - circleW/2);
    const t9 = draw.text(points[8]).font(this.font);
    const w9 = t9.node.getBBox().width;
    t9.move(this.w*3/4 - w9/2, this.h - wL - 8);

    // bottom
    const b1 = draw.text(bot[0]).font(this.font);
    const bw1 = b1.node.getBBox().width;
    b1.move(wL - bw1/2, this.h - 18);
    
    const b2 = draw.text(bot[1]).font(this.font);
    const bw2 = b2.node.getBBox().width;
    b2.move(this.w/4 - bw2/2, this.h - 18);
    
    const b3 = draw.text(bot[2]).font(this.font);
    const bw3 = b3.node.getBBox().width;
    b3.move(this.w/2 - bw3/2, this.h - 18);
    
    const b4 = draw.text(bot[3]).font(this.font);
    const bw4 = b4.node.getBBox().width;
    b4.move(this.w*3/4 - bw4/2, this.h - 18);
    
    const b5 = draw.text(bot[4]).font(this.font);
    const bw5 = b5.node.getBBox().width;
    b5.move(this.w - wL - bw5/2, this.h - 18);
};

(function(){
    if(typeof window.Pitago === "undefined"){
        window.Pitago = Pitago;
    }
})(Pitago)