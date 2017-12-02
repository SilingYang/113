function main(dis,time) {
    let price;
    if(dis<=2)
    {
        price=6+time*0.25;
    }
    else if(dis<=8)
    {
        price=6+0.8*(dis-2)+time*0.25;
    }
    else
    {
        price=6+0.8*6+1.2*(dis-8)+time*0.25;
    }
    return Math.round(price);
};
module.exports = main;