import { renderToPipeableStream, PipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../App";

interface RenderOptions {
  [key: string]: unknown;
}

export default function render(
  url: string,
  opts: RenderOptions,
): PipeableStream {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    opts,
  );
  return stream;
}
