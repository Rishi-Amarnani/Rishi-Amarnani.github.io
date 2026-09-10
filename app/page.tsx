const steamUrl = 'https://store.steampowered.com/app/2010010/Boomerang_Jack/';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rishi Amarnani, home">
          <span className="brand-mark">RA</span>
          <span>Rishi Amarnani</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            Game developer <span aria-hidden="true">/</span> Unity engineer
          </p>
          <h1>
            I build game systems
            <span> players can feel.</span>
          </h1>
          <p className="lede">
            Eight years turning combat, narrative, progression, and production
            problems into shipped experiences—across PC, mobile, and WebGL.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              See selected work <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="mailto:rsaamar@gmail.com">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <a
          className="hero-project"
          href={steamUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="View Boomerang Jack on Steam"
        >
          <img
            src="/boomerang-jack-combat.webp"
            alt="Boomerang Jack fighting multiple enemies inside a fiery combat arena"
          />
          <span className="image-wash" aria-hidden="true" />
          <span className="project-stamp">
            <span>Four years in development / Shipped 2026</span>
            <strong>Boomerang Jack</strong>
            <span>Founder &amp; Lead Developer</span>
          </span>
          <span className="project-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading">
          <p className="section-index">01 / Selected work</p>
          <h2>Shipped games. Useful tools. Better iteration.</h2>
        </div>

        <article className="case-study">
          <div className="case-intro">
            <p className="project-kicker">Featured release / Recall Interactive</p>
            <h3>Boomerang Jack</h3>
            <p>
              A story-driven 2D action-adventure RPG shaped across four years of
              development—from the first combat prototypes through launch and
              post-release support with a small, distributed team.
            </p>
            <a className="text-link" href={steamUrl} target="_blank" rel="noreferrer">
              View on Steam <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="case-detail">
            <p>
              As founder and lead developer, I owned the systems that made the
              game move, fight, tell its story, and ship: combat, AI, progression,
              dialogue, cutscenes, localization, tooling, performance, and release
              coordination.
            </p>
            <dl className="impact-grid">
              <div>
                <dt>4 yrs</dt>
                <dd>from prototype to release</dd>
              </div>
              <div>
                <dt>80k</dt>
                <dd>line Unity/C# codebase</dd>
              </div>
              <div>
                <dt>50</dt>
                <dd>levels built and balanced</dd>
              </div>
              <div>
                <dt>11</dt>
                <dd>localized languages</dd>
              </div>
            </dl>
          </div>
        </article>

        <div className="case-breakdown">
          <figure className="case-visual">
            <img
              src="/boomerang-jack-world.webp"
              alt="Jack facing enormous luminous creatures in a moonlit environment"
            />
            <figcaption>
              The work crossed combat, traversal, narrative, tools, and world
              implementation—not one isolated feature.
            </figcaption>
          </figure>

          <div className="case-story">
            <p className="project-kicker">What I owned</p>
            <h3>A whole-game role across four years.</h3>
            <p className="case-summary">
              I founded Recall Interactive and led three developers and two
              interns through the decisions, systems, and production work needed
              to turn a prototype into a commercial Steam release.
            </p>

            <div className="story-grid">
              <section>
                <span>01</span>
                <h4>Combat &amp; progression</h4>
                <p>
                  Designed and implemented free-flow combat, enemy and boss AI,
                  traversal, skill-tree progression, combat puzzles, and difficulty
                  pacing across 50 levels, 9 bosses, and 30 enemy types.
                </p>
              </section>
              <section>
                <span>02</span>
                <h4>Narrative systems</h4>
                <p>
                  Co-wrote the story and worldbuilding, led dialogue, and used
                  Pixel Crushers to drive branching conversations, cutscenes,
                  quests, animation, narration, shaders, and visual effects.
                </p>
              </section>
              <section>
                <span>03</span>
                <h4>Tools &amp; localization</h4>
                <p>
                  Built reusable ScriptableObject frameworks, editor workflows,
                  and a custom pipeline for 10,000 words across 11 languages,
                  combining first-pass automation with specialist review.
                </p>
              </section>
              <section>
                <span>04</span>
                <h4>Production &amp; release</h4>
                <p>
                  Maintained the 80,000-line Unity/C# codebase and coordinated
                  profiling, telemetry, QA, localization, Steamworks, publishing,
                  release readiness, and post-launch updates.
                </p>
              </section>
            </div>
          </div>
        </div>

        <div className="project-list">
          <article className="project-card card-lime">
            <div className="project-number">02</div>
            <div className="project-card-copy">
              <p className="project-kicker">Games for Love / 2025—Present</p>
              <h3>Kicklings World Soccer 2D</h3>
              <p>
                Helped ship and support a cozy tournament game for WebGL. Built
                adaptive difficulty, analytics, content integrations, and tooling
                that sped up design and art iteration.
              </p>
              <ul className="tag-list" aria-label="Technologies and disciplines">
                <li>Unity</li>
                <li>C#</li>
                <li>WebGL</li>
                <li>Design tools</li>
              </ul>
            </div>
          </article>

          <article className="project-card card-orange">
            <div className="project-number">03</div>
            <div className="project-card-copy">
              <p className="project-kicker">Riskyfire Studio / 2024—2026</p>
              <h3>Estelar: Freighter</h3>
              <p>
                Led design and implementation for combat AI, parry mechanics,
                resource systems, rewards, and encounter pacing. Built an
                authoring workflow that made level iteration 3× faster.
              </p>
              <ul className="tag-list" aria-label="Technologies and disciplines">
                <li>Unity 6</li>
                <li>Gameplay AI</li>
                <li>Systems design</li>
                <li>Editor tools</li>
              </ul>
            </div>
          </article>

          <article className="project-card card-neutral">
            <div className="project-number">04</div>
            <div className="project-card-copy">
              <p className="project-kicker">Contract studio / 2026</p>
              <h3>Online mobile RPG</h3>
              <p>
                Translated design requirements into modular combat AI, NavMesh
                navigation, UGUI, and adaptive pacing systems—then optimized them
                for large mobile encounters.
              </p>
              <ul className="tag-list" aria-label="Technologies and disciplines">
                <li>Mobile</li>
                <li>NavMesh</li>
                <li>UGUI</li>
                <li>Optimization</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="section-heading">
          <p className="section-index">02 / About</p>
          <h2>Designer’s instinct. Engineer’s follow-through.</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p className="about-lede">
              I work where design intent meets implementation: shaping the player
              experience, building the systems behind it, and giving teams better
              ways to iterate.
            </p>
            <p>
              My background spans independent game development, small-team
              leadership, contract production, and C++ software engineering. I’m
              comfortable owning a feature from rough idea and prototype through
              QA, localization, platform integration, and release.
            </p>
          </div>

          <div className="capability-board">
            <div>
              <span>01</span>
              <h3>Gameplay &amp; systems</h3>
              <p>Combat, AI, progression, rewards, difficulty, and player feedback.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Narrative implementation</h3>
              <p>Branching dialogue, cutscenes, quests, localization, and in-engine events.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Production tools</h3>
              <p>Unity editor workflows, content pipelines, telemetry, debugging, and optimization.</p>
            </div>
            <div>
              <span>04</span>
              <h3>Team delivery</h3>
              <p>Scoping, documentation, mentoring, code review, QA, and release support.</p>
            </div>
          </div>
        </div>

        <div className="experience-strip" aria-label="Experience highlights">
          <p>Unity 6</p>
          <p>C#</p>
          <p>C++</p>
          <p>PC / Steam</p>
          <p>Mobile</p>
          <p>WebGL</p>
          <p>Git / Perforce</p>
          <p>AI-assisted development</p>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <p className="section-index">03 / Contact</p>
        <div className="contact-layout">
          <h2>Let’s make the next thing feel great.</h2>
          <div className="contact-copy">
            <p>
              Have a game, prototype, or production problem that needs both design
              judgment and engineering depth? I’d like to hear about it.
            </p>
            <a className="button button-primary" href="mailto:rsaamar@gmail.com">
              rsaamar@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <footer>
          <p>© 2026 Rishi Amarnani</p>
          <div>
            <a
              href="https://www.linkedin.com/in/rishi-amarnani"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/Rishi-Amarnani"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </section>

      <aside className="contact-rail" aria-label="Social links">
        <a href="mailto:rsaamar@gmail.com" aria-label="Email Rishi Amarnani">
          <span aria-hidden="true">@</span>
        </a>
        <a
          href="https://www.linkedin.com/in/rishi-amarnani"
          target="_blank"
          rel="noreferrer"
          aria-label="Rishi Amarnani on LinkedIn"
        >
          <span aria-hidden="true">in</span>
        </a>
        <a
          href="https://github.com/Rishi-Amarnani"
          target="_blank"
          rel="noreferrer"
          aria-label="Rishi Amarnani on GitHub"
        >
          <span aria-hidden="true">GH</span>
        </a>
      </aside>
    </main>
  );
}
