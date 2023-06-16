import Image from "next/image";

export default function Home() {
  return (
    <div>
      <body>
        <header>
          <img
            src="https://pbs.twimg.com/media/EzlxtfDXMAEfJrv.jpg"
            alt="mur bleu karminecorp"/>
          <nav>
            <ul>
              <li>
                <a href="#" className="text-black">projet</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <a href="#">parcour</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <h1>uwu</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, totam
            voluptate in enim perferendis tenetur blanditiis neque ipsum optio
            minus fuga voluptates corporis officia at modi commodi nobis animi
            dignissimos?{" "}
          </p>
        </main>
      </body>
    </div>
  );
}
