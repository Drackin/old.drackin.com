import type { NextApiRequest, NextApiResponse } from "next";
import { createCanvas, loadImage, registerFont } from "canvas";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { avatar, content, fullname, username } = (req as any).query;

    if(!avatar || !content || !fullname || !username) {
        return res.status(400).json({ code: 400, message: "Please Enter All Query Params. (avatar, content, fullname, username)" })
    }

    registerFont("../../../drackin-tk/assets/Roboto.ttf", {
      family: "Roboto"
    })
    const canvas = createCanvas(596, 334);
    const ctx = canvas.getContext("2d");
    // Load Background Image
    const img = await loadImage("https://i.imgur.com/jBG4QUn.png");
    ctx.drawImage(img, 0, 0, 596, 334);
    // Content
    ctx.font = '25px "Roboto"';
    ctx.fillStyle = "white"
    wrapText(ctx, content, 10, 100, 580, 30)
    // Full Name
    ctx.font = 'bold 25px "Roboto"';
    ctx.fillText(fullname, 72, 35);
    // Username
    ctx.font = '15px "Roboto"';
    ctx.fillStyle = "#AAB8C2";
    ctx.fillText(username, 86, 54);
    // Profile Photo
    roundedImage(11, 11, 50, 50, 29);
    ctx.clip();
    const pp = await loadImage(avatar);
    ctx.drawImage(pp, 11, 11, 50, 50);
     

    // Image Border Radius
    function roundedImage(x: number, y: number, width: number, height: number, radius: number) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }

    // Line Wrap
    function wrapText(context: any, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
        var words = text.split(' ');
        var line = '';

        for(let n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
    }

    res.setHeader("Content-Type", "image/png");
    res.status(200).send(canvas.toBuffer());
}
