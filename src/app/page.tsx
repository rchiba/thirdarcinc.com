export default function Home() {
  return (
    <div className="sm:p-20">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-3xl mx-auto">
        <h2 className="mt-0">Third Arc Inc.</h2>
        <p>
          <b>Two</b> entrepreneurs working on their <b>third</b> venture together with <b>one</b> goal: Solving real business problems with intuitive tools.
        </p>
        <h2 className="mt-8">Our Work</h2>
        <div className="flex gap-8 w-full">
          <div className="flex-1">
            <h3>TINT</h3>
            <p className="text-sm opacity-50">2011 - 2018 (exited to Filestack)</p>
            <p>
              Helping brands tell authentic stories from their audiences
            </p>
            <p>
              <a href="https://www.tintup.com" target="_blank">tintup.com</a>
            </p>
          </div>
          <div className="flex-1">
            <h3>Topic</h3>
            <p className="text-sm opacity-50">2019 - 2021 (exited to Raptive)</p>
            <p>
              Helping content teams create better content, faster
            </p>
            <p>
              <a href="https://www.usetopic.com" target="_blank">usetopic.com</a>
            </p>
          </div>
          <div className="flex-1">
            <h3>Current Project</h3>
            <p className="text-sm opacity-50">2024 - Present</p>
            <p>
              Helping creators understand and act on their audience's desires
            </p>
          </div>
        </div>
        <h2 className="mt-8">Our Story</h2>
        <img 
          src="/images/ryo_and_nik.jpg" 
          alt="Ryo and Nik, co-founders of Third Arc Inc."
          className="w-full max-w-2xl rounded-lg mb-8"
        />
        <p>
          Hey! We're Ryo and Nik, co-founders of Third Arc Inc.
        </p>
        <p>
          We've been friends, co-workers, and co-founders for over a decade.
        </p>
        <p>
          In 2011, we met in the basement of a university library in Los Angeles. We built a social bookmarking platform called <a href="https://www.businessinsider.com/usc-students-launch-hypemarks-2012-7" target="_blank">Hypemarks</a>, which we then pivoted to a B2B marketing technology company called <a href="https://www.tintup.com" target="_blank">TINT</a>. We bootstrapped the company to 40 employees and thousands of customers worldwide. 
        </p>
        <p>
          After <a href="https://www.thedrum.com/news/2018/09/18/filestack-builds-enterprise-credentials-with-tint-acquisition" target="_blank">exiting in 2018 to Filestack</a>, we decided to take everything we learned about SEO and content marketing to build our next company, <a href="https://www.usetopic.com" target="_blank">Topic</a>. We bootstrapped it to 250+ customers and 7-figure annual recurring revenue. 
        </p>
        <p>
          After <a href="https://www.prnewswire.com/news-releases/cafemedia-announces-acquisition-of-leading-seo-platform-topic-301387841.html" target="_blank">exiting in 2021 to Raptive</a>, we joined their team for three years to help content creators grow their audience with our technology.
        </p>
        <p>
          Now, we're working on our third arc.
        </p>
      </main>
    </div>
  );
}
