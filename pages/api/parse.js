// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { parse } from 'node-html-parser'

export default function handler(req, res) {
  // const root = parse(req.body.html)
  const root = parse('<ul id="list"><li>Hello World</li><li>Hello World2</li></ul>');
  // root.childNodes.forEach(node => {
  //   console.log('[NODE]', node)
  // })
  console.log("ddd", root.firstChild);
  res.status(200).json({ result: root.toString() })

}
