import express from "express";
import cors from "cors";
import ytdl from "ytdl-core";

const app = express();

app.use('/static', express.static('./static'));

app.get("/", (request, response) => {
  response.sendFile('index.html', { root: './' });
});

app.get("/download", (request, response) => {
  const url = request.query.url;
  response.header("Content-Disposition", 'attachment; filename="Video.mp4');
  ytdl(url, {quality: "highestaudio", format: "mp4"}).pipe(response);
});

app.listen(7000, () => console.log(`Server is running on port 7000`));
