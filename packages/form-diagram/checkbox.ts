import { Pen } from '../core/src/pen';

declare const window: any;
var currentTopology: any;
export function checkbox(
  pen: any,
  path?: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | Path2D
) {
  if (!pen.onDestroy) {
    pen.onClick = click;
  }
  if (!path) {
    path = new Path2D();
  }
  let x = pen.calculative.worldRect.x;
  let y = pen.calculative.worldRect.y;
  let w = pen.calculative.worldRect.width;
  let h = pen.calculative.worldRect.height;
  pen.textLeft = h;
  pen.textWidth = w - h;
  pen.textAlign = 'start';
  pen.textBaseline = 'middle';
  path.rect(x, y, h, h);
  if (pen.isChecked) {
    path.moveTo(x, y + h / 2);
    path.lineTo(x + h / 2, y + h);
    path.lineTo(x + h, y);
  }
  return path;
}

function click(pen: any) {
  pen.isChecked = !pen.isChecked;
  pen.calculative.canvas.render();
}